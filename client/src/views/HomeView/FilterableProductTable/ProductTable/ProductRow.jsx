import { gql, useMutation } from "@apollo/client";
import AdminContext from "@app/context/AdminContext";
import PropTypes from "prop-types";
import React from "react";

const DELETE_PRODUCT = gql`
  mutation Deletion($deleteProductId: String!) {
    deleteProduct(_id: $deleteProductId)
  }
`;

function ProductRow({ product: { _id, name, price } }) {
  const [isAdmin] = React.useContext(AdminContext);

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: ["GetProducts"],
  });

  const handleDelete = (e) => {
    const id2Delete = e.target.closest("tr").id;
    deleteProduct({ variables: { deleteProductId: id2Delete } });
  };

  const handleUpdate = (e) => {
    const id2Update = e.target.closest("tr").id;
  };

  const renderUDBtns = () =>
    isAdmin && (
      <>
        <td>
          <button
            className="btn bg-red-500 text-white p-1 text-xs rounded-lg"
            onClick={handleDelete}
          >
            🔥 Delete
          </button>
        </td>
        <td>
          <button
            className="btn bg-yellow-500 text-black p-1 text-xs rounded-lg"
            onClick={handleUpdate}
          >
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
