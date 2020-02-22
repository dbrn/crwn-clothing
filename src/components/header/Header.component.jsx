import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="header__logo-container__logo" />
      </Link>
      <div className="header__options">
        <Link to="/shop" className="header__options__option">
          SHOP
        </Link>
        <Link to="/contact" className="header__options__option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default header;
