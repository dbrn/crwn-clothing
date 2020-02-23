import React from "react";
import "./CustomButton.style.scss";

const customButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default customButton;
