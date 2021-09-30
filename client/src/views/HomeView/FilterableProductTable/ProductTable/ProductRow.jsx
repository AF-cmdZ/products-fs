import AdminContext from "@app/context/AdminContext";
import PropTypes from "prop-types";
import React from "react";

function ProductRow({ product: { _id, name, price } }) {
  const [isAdmin] = React.useContext(AdminContext);

  const renderUDBtns = () =>
    isAdmin && (
      <>
        <td>
          <button className="btn bg-red-500 text-white p-1 text-xs rounded-lg">
            🔥 Delete
          </button>
        </td>
        <td>
          <button className="btn bg-yellow-500 text-black p-1 text-xs rounded-lg">
            ✨ Update
          </button>
        </td>
      </>
    );

  return (
    <tr id={_id}>
      <td>{name}</td>
      <td>{price}</td>
      {renderUDBtns()}
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
