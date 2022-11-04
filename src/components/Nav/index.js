import React from "react";
import About from "../About";

function Nav() {

    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;