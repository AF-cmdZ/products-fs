import productController from "../controller.js";
import createProduct from "../model.js";

export default {
  Query: {
    products() {
      return productController.index();
    },
  },
  Mutation: {
    // Destructure args into product object
    async createProduct(_, { product }) {
      const validatedProduct = createProduct(product);
      const { insertedId: _id } = await productController.create(
        validatedProduct
      );
      return { ...validatedProduct, _id };
    },
    async updateProduct(_, { product }) {
      const validatedProduct = createProduct(product);
      await productController.update(validatedProduct);
      return validatedProduct;
    },
    deleteProduct(_, { 
      _id }) {
      return productController.delete(_id);
    },
  },
};
