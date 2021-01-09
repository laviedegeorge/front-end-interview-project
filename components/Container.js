import React from "react";
import propTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-full lg:w-8/12">{children}</div>;
};

Container.propTypes = {
  children: propTypes.node.isRequired,
};

export default Container;
