import React from "react";
import propTypes from "prop-types";

const Loader = ({ text, type }) => {
  return (
    <div
      style={{ height: "50vh" }}
      className=" bg-gray-400 flex justify-center items-center p-4"
    >
      <p
        className={`font-bold text-base lg:text-2xl text-white rounded-md shadow-md p-4 ${
          type === "Error" ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

Loader.defaultProps = {
  type: "loading",
};

Loader.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.string,
};

export default Loader;
