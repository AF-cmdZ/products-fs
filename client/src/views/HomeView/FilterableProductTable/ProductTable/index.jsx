import React from "react";
import PropTypes from "prop-types";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  const renderProductRows = products.map((product) => (
    <ProductRow key={product._id} product={product} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderProductRows}</tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ProductTable;
