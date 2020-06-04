import React from "react";
import "../Styles/Homepage.style.scss";
import { menuItems } from "../Constants/Data";

/**
 * Homepage Component for menu items
 */
const Homepage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map(({ name, imgsrc, link, linkUrl, index }) => {
          return (
            <React.Fragment key={index}>
              <div
                className="menu-item-container"
                onClick={() => {
                  console.log(name);
                  props.history.push(`${props.match.url}${linkUrl}`);
                }}
              >
                <div
                  className="menu-item"
                  style={{
                    height: 300,
                    backgroundImage: `url(${imgsrc})`,
                  }}
                >
                  <div className="content">
                    <h1 className="title">{name}</h1>
                    <span className="sub-title">{link}</span>
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
