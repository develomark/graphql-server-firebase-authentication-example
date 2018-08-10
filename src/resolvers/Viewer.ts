import { Context } from '../utils'

export const Viewer = {
  async bookings(_, args, ctx: Context, info) {
    const id = ctx.user.id
    return ctx.db.query.bookings({ where: { bookee: { id } } }, info)
  },

  async me(_, args, ctx: Context, info) {
    const id = ctx.user.id
    return ctx.db.query.user({ where: { id: id } }, info)
  },
}
