import PropTypes from "prop-types";
import React from "react";

function SearchBar({ checkboxHandler, inputHandler }) {
  return (
    <form>
      <label htmlFor="search-bar" className="sr-only">
        Search:
      </label>
      <input
        type="text"
        placeholder="Search..."
        id="search-bar"
        onChange={(event) => {
          inputHandler(event.target.value);
        }}
        className="p-1 rounded-sm mb-1"
      />
      <p>
        <input
          type="checkbox"
          onChange={(event) => checkboxHandler(event.target.checked)}
        />
        {` `}
        Only show products in stock
      </p>
    </form>
  );
}

SearchBar.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  checkboxHandler: PropTypes.func.isRequired,
};

export default SearchBar;
