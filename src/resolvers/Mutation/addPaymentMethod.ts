import {  Context } from '../../utils'

export async function addPaymentMethod(parent, args, ctx: Context, info) {
  await ctx.db.mutation.createPaymentAccount({
    data: {
      creditcard: { create: args },
      user: { connect: { id: ctx.user.id } },
    },
  })

  // TODO: send email to user
  return { success: true }
}
