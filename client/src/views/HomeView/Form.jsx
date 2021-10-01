import { gql, useMutation } from "@apollo/client";
import ProductType from "@app/types/Product";
import PropTypes from "prop-types";
import React from "react";

const ADD_PRODUCT = gql`
  mutation AddProduct($newProduct: ProductInput!) {
    createProduct(product: $newProduct) {
      _id
    }
  }
`;

function Form({ product4Update }) {
  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: ["GetProducts"],
    onCompleted: () => {
      // TODO{manav.misra}: Use `useRef` to clear the form
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      variables: {
        newProduct: {
          ...Object.fromEntries(new FormData(e.target)),
          price: parseFloat(e.target.price.value),
          stocked: e.target.stocked.checked,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <div>
        <label htmlFor="price" className="sr-only">
          Price
        </label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          name="price"
          defaultValue={Number(product4Update?.price.slice(1))}
        />
      </div>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          step="0.01"
          defaultValue={product4Update?.name}
        />
      </div>
      <div>
        <label htmlFor="stocked" className="mr-2">
          Stocked?
        </label>
        <input
          type="checkbox"
          id="stocked"
          name="stocked"
          defaultValue={product4Update?.checked}
        />
      </div>
      <button type="submit" className="bg-green-500 p-2 rounded text-white">
        Add Product
      </button>
      <button type="reset" className="bg-yellow-500 p-2 rounded">
        Clear
      </button>
    </form>
  );
}

Form.propTypes = {
  product4Update: PropTypes.shape(ProductType),
};

export default Form;
