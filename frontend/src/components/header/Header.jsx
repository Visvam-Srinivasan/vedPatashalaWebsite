import React from 'react';
import './header.css';
import logo from "../../assets/navbar/logo.png";

function Header() {
    return (
        <>
        <div className="header">
            <div>
                <img
                    src= {logo}
                    alt="Logo"
                    className="logo"
                />
            </div>
            <div>
                <h1 className="title1">
                    THE 
                </h1>
                <h1 className="title2">
                    VED PATASHALA
                </h1>
            </div>
        </div>
        </>
    )

}
export default Header;
