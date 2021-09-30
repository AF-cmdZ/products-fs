import { gql, useLazyQuery } from "@apollo/client";
import AdminContext from "@app/context/AdminContext";
import ProductContext from "@app/context/ProductContext";
import React from "react";
import { Link } from "react-router-dom";
import FilterableProductTable from "./FilterableProductTable";
import AddProductForm from "./Form";

const SHOW_PRODUCT = gql`
  query ShowProduct($productId: ID) {
    product(_id: $productId) {
      price
      stocked
      name
      _id
    }
  }
`;

function HomeView() {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);
  const [product4Update, setProduct4Update] = React.useContext(ProductContext);

  const [showProduct] = useLazyQuery(SHOW_PRODUCT, {
    onCompleted(product) {
      setProduct4Update(product);
    },
  });

  React.useEffect(() => {
    if (product4Update._id) {
      showProduct({
        variables: { productId: product4Update._id },
      });
    }
  }, [product4Update._id, showProduct]);

  const handleClick = () => {
    setIsAdmin(false);
  };

  return (
    <>
      <FilterableProductTable />
      {isAdmin ? (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-max"
          onClick={handleClick}
        >
          Log Out
        </button>
      ) : (
        <Link
          to="/admin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-max mb-6"
        >
          Admin
        </Link>
      )}
      {isAdmin && <AddProductForm />}
    </>
  );
}

export default HomeView;
