import React from "react";
import { Link } from "react-router-dom";

function AdminView() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center">
        <input type="password" />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 w-max"
          onSubmit={handleSubmit}
        >
          Login
        </button>
      </form>
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
