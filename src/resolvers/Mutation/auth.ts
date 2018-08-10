import { AuthError, Context } from '../../utils'

import {
  verifyIdToken,
  getUser,

  createUserSessionToken,
  setUserClaims,
} from '../../firebase'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const { uid } = await verifyIdToken(args.idToken)

    const fuser = await getUser(uid)
    const { email, emailVerified, displayName, phoneNumber } = fuser

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
    //Here we could save some authorization data also e.g. auth.admin: true
    await setUserClaims(uid, { userId: user.id })

    const token = await createUserSessionToken(args, ctx)

    return {
      token,
      user,
    }
  },

  async login(parent, args, ctx: Context, info) {
    const fuser = await verifyIdToken(args.idToken)

    if (!fuser.userId) new AuthError({ message: 'User is not registered' })

    const { userId } = fuser

    const user = await ctx.db.query.user({ where: { id: userId } })

    if (!user) {
      throw new AuthError({ message: 'User account does not exist' })
    }

    return {
      token: createUserSessionToken(args, ctx),
      user,
    }
  },
}
