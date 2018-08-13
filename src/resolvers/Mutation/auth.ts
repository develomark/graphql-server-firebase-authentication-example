import { AuthError, Context } from '../../utils'

import {
  verifyIdToken,
  getUserRecord,
  createUserSessionToken,
  setUserClaims,
} from '../../firebase'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const { uid } = await verifyIdToken(args.idToken)

    const firebaseUser = await getUserRecord(uid)
    const { email, emailVerified, displayName, phoneNumber } = firebaseUser

    const user = await ctx.db.mutation.createUser({
      data: {
        firstName: displayName,
        email: email,
        emailVerified,
        lastName: '',
        phone: phoneNumber,
      },
    })

    //Create firebase new cookie token
    //Persist prisma userId into firebase auth so we do not need to do a DB call.
    //Here we could save some authorization data also e.g. admin: true
    await setUserClaims(uid, { id: user.id, admin: false })

    const token = await createUserSessionToken(args, ctx)

    return {
      token,
      user,
    }
  },

  async login(parent, args, ctx: Context, info) {
    const { id } = await verifyIdToken(args.idToken)

    if (!id) new AuthError({ message: 'User is not registered' })

    const user = await ctx.db.query.user({ where: { id } })

    if (!user) {
      throw new AuthError({ message: 'User account does not exist' })
    }

    return {
      token: createUserSessionToken(args, ctx),
      user,
    }
  },
}
