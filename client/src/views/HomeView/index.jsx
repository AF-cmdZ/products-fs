import FilterableProductTable from "./FilterableProductTable";
import React from "react";
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <>
      <FilterableProductTable />
      <Link
        to="/admin"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-min"
      >
        Admin
      </Link>
    </>
  );
}

export default HomeView;
