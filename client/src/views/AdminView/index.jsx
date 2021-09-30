import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form";

const IS_ADMIN = gql`
  query isAdmin($isAdminPass: String) {
    isAdmin(pass: $isAdminPass)
  }
`;

function AdminView() {
  const history = useHistory();
  const [getIsAdmin] = useLazyQuery(IS_ADMIN, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
    onCompleted(token) {
      if (token.isAdmin) {
        localStorage.setItem("token", token.isAdmin);
        history.push("/");
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getIsAdmin({
      variables: {
        // ⚠️ 🔑 MUST MATCH THAT OF DUMB, STUPID $ VARIABLE NAME ABOVE❗
        isAdminPass: e.target.elements[0].value,
      },
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Form submitHandler={handleSubmit} />
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
