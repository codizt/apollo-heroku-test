const {ApolloServer} = require('apollo-server')
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core')
const {typeDefs, resolvers} = require('./schema')

const port = process.env.PORT || 4000

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen({port}, ()=> {
    console.log(`Sever ready at http://localhost:${port}/graphql`);
})