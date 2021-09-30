import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import adminContext from "../../context/AdminContext";
import Form from "./Form";

const IS_ADMIN = gql`
  query isAdmin($isAdminPass: String) {
    isAdmin(pass: $isAdminPass)
  }
`;

function AdminView() {
  const [isAdmin, setIsAdmin] = React.useContext(adminContext);
  const history = useHistory();

  // If already isAdmin, go home 🏠
  React.useEffect(() => {
    if (isAdmin) {
      history.push("/");
    }
  });

  const [getIsAdmin] = useLazyQuery(IS_ADMIN, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
    onCompleted(token) {
      if (token.isAdmin) {
        setIsAdmin(true);
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
