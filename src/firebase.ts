import * as firebase from 'firebase-admin'
import { AuthError, Context } from './utils'



const admin = firebase.initializeApp(
  {
    credential: firebase.credential.cert({
      projectId: process.env.GCP_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  },
  'server',
)

//returns cookie token
const createUserSessionToken = async (args, ctx: Context) => {
  // Get the ID token passed and the CSRF token.
  const idToken = args.idToken.toString()
  const csrfToken = args.csrfToken.toString()
  // Guard against CSRF attacks.
  if (csrfToken !== ctx.request.cookies.csrfToken) {
    return { error: 'Unauthorised request', token: null }
  }

  // Only process if the user just signed in in the last 5 minutes.
  // To guard against ID token theft, reject and require re-authentication.
  const decodedIdToken = await admin.auth().verifyIdToken(idToken)
  if (!(new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60))
    return { error: { message: 'Recent sign in required!' }, token: null }

  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  const token = await admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .catch(error => {
      return {
        error: { message: 'User Session Token Creation Error', stack: error },
        token: null,
      }
    })
  if (token) return { error: false, token }
  else return { error: 'User Session Token Creation Error', token: null }
}

//Returns decodedClaims
const verifyUserSessionToken = async token => {
  //Verify session cookies tokens with firebase admin.
  //This is a low overhead operation.
  const claims = await admin
    .auth()
    .verifySessionCookie(token, true /** checkRevoked */)
    .catch(error => {
      return {
        error: {
          message: 'User Session Token Verification Error',
          stack: error,
        },
        claims: null,
      }
    })

  if (claims) return { error: false, claims }
  else
    return {
      error: { message: 'User Session Token Verification Error' },
      claims: null,
    }
}

const setUserClaims = (uid, data) => admin.auth().setCustomUserClaims(uid, data)

const getUser = uid => admin.auth().getUser(uid)

const verifyIdToken = idToken => admin.auth().verifyIdToken(idToken)

const getUID = async idToken => {
  const decodedToken = await admin.auth().verifyIdToken(idToken)
  return decodedToken.uid
}
