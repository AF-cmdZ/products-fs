import { gql } from "apollo-server-express";

export default gql`
  enum AllowedCategory {
    SPORTING_GOODS
    ELECTRONICS
  }

  type Query {
    products: [Product]
  }

  type Product {
    # Provided by MongoDB 🗃️
    id: String!
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
