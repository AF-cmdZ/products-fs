import PropTypes from "prop-types";
import React from "react";

function ProductRow({ product: { _id, name, price } }) {
  return (
    <tr id={_id}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductRow;
