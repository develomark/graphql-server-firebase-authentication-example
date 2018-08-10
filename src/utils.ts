import { Prisma } from './generated/prisma'
import { verifyUserSessionToken } from './firebase'

export interface Context {
  db: Prisma
  req: any
  user: Auth
}

export interface Auth {
  id: string
  admin: boolean
  [key: string]: any
}

export async function getUser(ctx) {
  const Authorization = (ctx.req || ctx.request).get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { id, admin } = (await verifyUserSessionToken(token)) as Auth
    return { id, admin }
  }
  return null
}

export class AuthError extends Error {
  constructor(
    error: { message: string; stack?: any } = { message: 'Not authorized' },
  ) {
    super(error.message)
  }
}
