import React from "react";
import SearchBar from "./SearchBar";

function handleToggle(e) {
  console.log("toggle", e.target.checked);
}

function handleSearch(e) {
  e.preventDefault();
  const query = e.target.value;
  console.log(query);
}

function FilterableProductTable() {
  return (
    <div>
      <SearchBar checkboxHandler={handleToggle} inputHandler={handleSearch} />
    </div>
  );
}

export default FilterableProductTable;
