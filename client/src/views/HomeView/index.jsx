import React from "react";
import { Link } from "react-router-dom";
import FilterableProductTable from "./FilterableProductTable";

function HomeView() {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <FilterableProductTable />
      {localStorage.getItem("token") ? (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 w-max"
          onClick={handleClick}
        >
          Log Out
        </button>
      ) : (
        <Link
          to="/admin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-max"
        >
          Admin
        </Link>
      )}
    </>
  );
}

export default HomeView;
