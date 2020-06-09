import React from "react";
import "../Styles/Appheader.style.scss";
import { ReactComponent as Logo } from "../Assests/crown.svg";

import { withRouter, Link } from "react-router-dom";

/**
 * App Header component
 */
function AppHeader(props) {
  console.log("Header", props);
  return (
    <div className="appheader-container">

      <div className="app-header" onClick={() => props.history.push("./")}>
        <Logo className="logo"></Logo>
        <p className="app-header__title">
          ACID <span className="app-header__title--bold">HOUSE</span>
        </p>
      </div>
      <div className="header-options">
        <Link to="/shop" className="nav-optn">SHOP</Link>
        <Link to="/contact" className="nav-optn">CONTACT</Link>
      </div>
    </div>
  );
}

export default withRouter(AppHeader);
