import { gql, useQuery } from "@apollo/client";
import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const GET_PRODUCTS = gql`
  query Products {
    products {
      _id
      category
      price
      stocked
      name
    }
  }
`;

function FilterableProductTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const { data } = useQuery(GET_PRODUCTS);
  let filteredProducts = [];

  if (data) {
    const { products } = data;
    filteredProducts = products
      .filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(({ stocked }) => !inStockOnly || stocked);
  }

  return (
    <div className="flex flex-col justify-center gap-3">
      <SearchBar
        checkboxHandler={setInStockOnly}
        inputHandler={setSearchTerm}
      />
      <ProductTable products={filteredProducts} searchTerm={searchTerm} />
    </div>
  );
}

export default FilterableProductTable;
