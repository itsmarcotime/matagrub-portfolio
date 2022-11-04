import React from "react";
import About from "../About";

function Nav() {
    
    return (
        <nav className="nav">
            <ul>
                <activeLink className="navColor" href="/">Home</activeLink>
                <activeLink className="navColor" href="/about">About</activeLink>
                <activeLink className="navColor" href="/work">Work</activeLink>
                <activeLink className="navColor" href="/contact">Contact</activeLink>
                <activeLink className="navColor" href="/resume">Resume</activeLink>
            </ul>
        </nav>
    )

    function activeLink({ href, children, ...props }) {
        const path = window.location.pathname
        return (
            
                <a href={href} {...props} className={path === href ? "active": ""}>{children}</a>
            
        )
    }
}

export default Nav;