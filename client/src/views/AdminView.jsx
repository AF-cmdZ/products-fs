import React from "react";
import { Link } from "react-router-dom";

function AdminView() {
  return (
    <div>
      <h1>Admin View</h1>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 w-max"
      >
        🏠 Home
      </Link>
    </div>
  );
}

export default AdminView;
