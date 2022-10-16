import { buildSchema } from 'graphql'

const typeDefs = `
    type FooResponse {
        formatedName: String,
        something: String
    }

    type Query {
        fooDetails(name: String!): FooResponse
    }
`;

export const graphqlSchema = buildSchema(typeDefs);

export default typeDefs;