import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";

const header = ({ currentUser }) => {
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
        {currentUser ? (
          <div
            className="header__options__option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="header__options__option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default header;
