import { gql } from "apollo-server-express";

export default gql`
  enum AllowedCategory {
    # We cannot use strings, per sé. Convention is SCREAMING_🐍_CASE
    SPORTING_GOODS
    ELECTRONICS
  }

  type Query {
    products: [Product]
  }

  type Product {
    category: AllowedCategory!
    price: String!
    stocked: Boolean
    name: String!
  }

  type Mutation {
    createProduct(product: Product): Product
    updateProduct(name: String, product: Product): Product
    deleteProduct(name: String): Product
  }
`;
