import React from "react";

const InputCustom = ({ type, ...props }) => {
  return <input type={type} {...props} />;
};

export default InputCustom;
