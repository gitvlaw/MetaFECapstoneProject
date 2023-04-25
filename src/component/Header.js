import React from "react";
import Nav from "./Nav";
import logo from "../icons_assets/Logo.svg";
import hamburger from "../icons_assets/🦆 icon _hamburger menu.svg";
import '../style/header.css';

export default function Header() {
    const toggleDisplay= () => {
        const element = document.getElementsByClassName('hamburger-menu')[0];
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    };
    return (
        <header className="header-nav">
            <div className="logo-and-humburger">
                <img className="logo" src={logo} alt="logo" />
                <div onClick={toggleDisplay} className="hamburger-nav">
                    <img className="img-hambuger" src={hamburger} alt="hamburger icon" ></img>
                </div>
            </div>
            <div className="hamburger-menu" >
                <Nav />
            </div>
        </header>
    )
};