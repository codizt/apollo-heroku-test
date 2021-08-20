const {ApolloServer} = require('apollo-server')
const {typeDefs, resolvers} = require('./schema')

const port = process.env.PORT || 4000

const server = new ApolloServer({typeDefs, resolvers})

server.listen({port}, ()=> {
    console.log(`Sever ready at http://localhost:${port}/graphql`);
})