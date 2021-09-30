import { gql } from "apollo-server-express";

export default gql`
  enum AllowedCategory {
    SPORTING_GOODS
    ELECTRONICS
  }

  input ProductInput {
    _id: ID
    category: AllowedCategory!
    price: Float!
    stocked: Boolean
    name: String!
  }

  type Query {
    products: [Product]
  }

  type Product {
    _id: ID!
    category: AllowedCategory!
    price: String!
    stocked: Boolean
    name: String!
  }

  type Mutation {
    createProduct(product: ProductInput!): Product
    updateProduct(product: ProductInput!): Product
    deleteProduct(id: String!): ID
  }
`;
