import React from "react";
import "./FormInput.style.scss";

const formInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="group__form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } group__form-input__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default formInput;
