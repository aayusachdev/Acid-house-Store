import React from "react";
import "../Styles/Homepage.style.scss";
import { menuItems } from "../Constants/Data";

/**
 * Homepage Component for menu items
 */
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="menu-item-container">
                <div
                  className="menu-item"
                  style={{
                    height: 300,
                    backgroundImage: `url(${item.imgsrc})`,
                  }}
                >
                  <div className="content">
                    <h1 className="title">{item.name}</h1>
                    <span className="sub-title">{item.link}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
