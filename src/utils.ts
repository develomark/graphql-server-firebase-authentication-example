import { Prisma } from './generated/prisma'
import { verifyUserSessionToken } from './firebase'

export interface Context {
  db: Prisma
  req: any
  userId: string
}

export async function getUserId(context) {
  
  const Authorization = context.req.headers.authorization
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = await verifyUserSessionToken(token)
    console.log(userId)
    return userId
  }

  throw new AuthError()
}



export class AuthError extends Error {
  constructor(
    error: { message: string; stack?: any } = { message: 'Not authorized' },
  ) {
    super(error.message)
  }
}
