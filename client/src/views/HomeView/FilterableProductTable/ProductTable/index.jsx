import ProductType from "@app/types/Product";
import PropTypes from "prop-types";
import React from "react";
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
  products: PropTypes.arrayOf(PropTypes.shape(ProductType)),
};

export default ProductTable;
