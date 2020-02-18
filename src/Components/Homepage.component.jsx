import React from 'react'
import '../Styles/Homepage.style.css'
const Homepage = ()=>{
    return(
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item fitem">
                    <div className="content">
                        <h1 className="title">
                            HATS
                        </h1>
                        <span className="sub-title">
                            SHOP NOW
                        </span>
                    </div>
                </div>
                <div className="menu-item fitem">
                    <div className="content">
                        <h1 className="title">
                            SHOES
                        </h1>
                        <span className="sub-title">
                            SHOP NOW
                        </span>
                    </div>
                </div>
                <div className="menu-item fitem">
                    <div className="content">
                        <h1 className="title">
                            CAPS
                        </h1>
                        <span className="sub-title">
                            SHOP NOW
                        </span>
                    </div>
                </div>
                <div className="menu-item item">
                    <div className="content">
                        <h1 className="title">
                            WALLETS MEN
                        </h1>
                        <span className="sub-title">
                            SHOP NOW
                        </span>
                    </div>
                </div>
                <div className="menu-item item">
                    <div className="content">
                        <h1 className="title">
                            BELTS MEN
                        </h1>
                        <span className="sub-title">
                            SHOP NOW
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;