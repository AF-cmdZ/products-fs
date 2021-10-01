import { gql, useQuery } from "@apollo/client";
import AdminContext from "@app/context/AdminContext";
import React from "react";
import { Link } from "react-router-dom";
import FilterableProductTable from "./FilterableProductTable";
import AddProductForm from "./Form";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      _id
      price
      stocked
      name
    }
  }
`;

function HomeView() {
  React.useEffect(() => {
    document.title = "🏠 Home";
  });

  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

  // TODO{manav.misra}: Do some spit with loading state ⏳
  const { data } = useQuery(GET_PRODUCTS);

  const handleClick = () => {
    setIsAdmin(false);
  };

  return (
    <>
      <FilterableProductTable products={data?.products} />
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
