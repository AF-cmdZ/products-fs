import { gql, useQuery } from "@apollo/client";
import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const GET_PRODUCTS = gql`
  query Query {
    products {
      _id
      category
      price
      stocked
      name
    }
  }
`;

function handleToggle(e) {
  console.log("toggle", e.target.checked);
}

function FilterableProductTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const { data } = useQuery(GET_PRODUCTS);
  let filteredProducts = [];

  if (data) {
    const { products } = data;
    filteredProducts = products.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="flex flex-col justify-center gap-3">
      <SearchBar checkboxHandler={handleToggle} inputHandler={setSearchTerm} />
      <ProductTable products={filteredProducts} searchTerm={searchTerm} />
    </div>
  );
}

export default FilterableProductTable;
