import { gql } from "apollo-server-express";

export default gql`
  input ProductInput {
    _id: ID
    price: Float!
    stocked: Boolean
    name: String!
  }

  type Query {
    product(_id: ID): Product
    products: [Product]!
    isAdmin(pass: String): ID
  }

  type Product {
    _id: ID!
    price: String!
    stocked: Boolean
    name: String!
  }

  type Mutation {
    createProduct(product: ProductInput!): Product
    updateProduct(product: ProductInput!): Product
    deleteProduct(_id: String!): ID
  }
`;
