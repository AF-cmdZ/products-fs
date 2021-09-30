import PropTypes from "prop-types";
import React from "react";

function Form({ submitHandler }) {
  return (
    <form className="flex flex-col items-center" onSubmit={submitHandler}>
      <input type="password" />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 w-max"
      >
        Login
      </button>
    </form>
  );
}

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default Form;
