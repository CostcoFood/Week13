import React from "react";
import './App.css';

function Nav() {
    return(
        <nav className="navBar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;