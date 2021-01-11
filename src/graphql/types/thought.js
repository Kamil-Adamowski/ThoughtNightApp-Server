const { gql } = require('apollo-server');

module.exports = gql`
  type Thought {
    id: ID!
    title: String!
    description: String!
    createdData: String!
    likes: Int!
    author: String!
  }
  input CreateThoughtInput {
    title: String!
    description: String!
    createdData: String!
    likes: Int!
    author: String!
  }
  input UpdateThoughtInput {
    title: String!
    description: String!
    createdData: String!
    likes: Int!
    author: String!
  }
  input DeleteThoughtInput {
    id: ID!
  }
  type DeletePayload{
    id: ID!
  }
  type Query {
    thoughts: [Thought]
  }
  type Mutation {
    createThought(input: CreateThoughtInput!): Thought!
    updateThought(id: ID!, input: UpdateThoughtInput!): Thought!
    deleteThought(id: ID!): DeletePayload!
  }
  
`;

/*
4 zdjęcia 
nazwę 
opis 
cena
stan na magazynie 
ocena
kategoria

*/