 
const { GraphQLServer } = require("graphql-yoga");

const messages = [];

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }
  
  type Query {
    messages: [Message!]
  }
  
  type Mutation {
      postMessage(usr: String!, content: String!): ID!
  }

`;
 

const resolvers = {
    Query: {
      messages: () => messages,
    },
    mutations: {
        postMessage: (parent, {us})
    }
};

const server = new GraphQLServer({ typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server on http://localhost:${port}/`);
})