import ProductType from "@app/types/Product";
import PropTypes from "prop-types";
import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const filteredProducts = products
    .filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(({ stocked }) => !inStockOnly || stocked);

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

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductType)),
};

FilterableProductTable.defaultProps = {
  products: [],
};

export default FilterableProductTable;
