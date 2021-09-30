import { gql, useMutation } from "@apollo/client";
import React from "react";

const ADD_PRODUCT = gql`
  mutation Mutation($newProduct: ProductInput!) {
    createProduct(product: $newProduct) {
      _id
    }
  }
`;

function Form() {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        <label htmlFor="price" className="sr-only">
          Price
        </label>
        <input type="number" id="price" placeholder="Price" name="price" />
      </div>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input type="text" id="name" placeholder="Name" name="name" />
      </div>
      <div>
        <label htmlFor="stocked" className="mr-2">
          Stocked?
        </label>
        <input type="checkbox" id="stocked" name="stocked" />
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

export default Form;
