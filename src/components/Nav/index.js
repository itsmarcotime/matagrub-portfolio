import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Eyeball from "../Eyeball";

function Nav() {
    
    return (
        <nav className="nav">
            <a href="/" className="title-pic">
                <Eyeball></Eyeball>
            </a>
            <ul>
                <GrubsLink to="/">Home</GrubsLink>
                <GrubsLink to="/about">About</GrubsLink>
                <GrubsLink to="/work">Work</GrubsLink>
                <GrubsLink to="/contact">Contact</GrubsLink>
                <GrubsLink to="/resume">Resume</GrubsLink>
            </ul>
        </nav>
    );

    function GrubsLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }
}

export default Nav;