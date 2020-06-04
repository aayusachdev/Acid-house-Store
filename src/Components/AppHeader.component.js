import React from "react";
import "../Styles/Appheader.style.scss";
import { withRouter } from "react-router-dom";
/**
 * App Header component
 */
function AppHeader(props) {
  console.log("Header", props);
  return (
    <div className="app-header" onClick={() => props.history.push("./")}>
      <p className="app-header__title">
        ACID <span className="app-header__title--bold">HOUSE</span>
      </p>
    </div>
  );
}

export default withRouter(AppHeader);
