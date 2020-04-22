import React from "react";
import "../Styles/Appheader.style.scss";
/**
 * App Header component
 */
function AppHeader() {
  return (
    <div className="app-header">
      <p className="app-header__title">
        ACID <span className="app-header__title--bold">HOUSE</span>
      </p>
    </div>
  );
}

export default AppHeader;
