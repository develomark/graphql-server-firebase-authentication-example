const { ApolloServer } = require('apollo-server')
import { Prisma } from './generated/prisma'
import { resolvers, fragmentReplacements } from './resolvers'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(`${__dirname}/schema.graphql`)

const db = new Prisma({
  fragmentReplacements,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: "mysecret123",
  debug: true,
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //optional parameter

  context: req => {
    return { ...req, db }
  },
  onHealthCheck: () =>
    new Promise((resolve, reject) => {
      //database check or other asynchronous action
    }),
  introspection: true,
  playground: true,
  debug: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
  console.log(
    `Try your health check at: ${url}.well-known/apollo/server-health`,
  )
})
