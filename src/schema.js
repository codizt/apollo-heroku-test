const {gql} = require('apollo-server')
const { prisma } = require('./db')

const typeDefs = gql`
    type Post {
        id: ID! 
        title: String!
        content: String
        published: Boolean!
    }

    type Query {
        feed: [Post!]!
        post(id: ID!): Post
    }

    type Mutation {
        createDraft(title: String!, content: String): Post!
        publish(id: ID!): Post
    }
`

const resolvers = {
    Query: {
        feed: (parents, args) => {
            return prisma.post.findMany({
                where: {published: true},
            })
        },
        post: (parent, args) => {
            return prisma.post.findOne({
                where: {id: Number(args.id)},
            })
        }
    },
    Mutation: {
        createDraft: (parent, args) => {
            return prisma.post.create({
                data: {
                    title: args.title,
                    content: args.content
                }
            })
        },
        publish: (parent, args) => {
            return prisma.post.update({
                where: {
                    id: Number(args.id),
                },
                data: {
                    published: true,
                }
            })
        }
    }
}

module.exports = {
    resolvers,
    typeDefs,
}