import AdminContext from "@app/context/AdminContext";
import React from "react";
import { Link } from "react-router-dom";
import FilterableProductTable from "./FilterableProductTable";
import AddProductForm from "./Form";

function HomeView() {
  const [isAdmin, setIsAdmin] = React.useContext(AdminContext);

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
