import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (

        <div className="container row ">
            <ul className="footer-box">
                <li className="text-center footer-text">
                    <a href="/">Home</a>
                </li>
                <li className="text-center footer-text">
                    <a href="/about">About</a>
                </li>
                <li className="text-center footer-text">
                    <a href="/work">Work</a>
                </li>
                <li className="text-center footer-text">
                    <a href="/contact">Contact</a>
                </li>
                <li className="text-center footer-text">
                    <a href="/resume">Resume</a>
                </li>
                <li className="icon-list">
                    <div className="container d-flex justify-content-center text-center iconBox">
                        <div className="col-2">
                            <a href="mailto:mmata3309@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="iconClass"/>
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="https://www.linkedin.com/in/marco-mata-8165bb175/">
                                <FontAwesomeIcon icon={faLinkedin} className="iconClass" />
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="https://github.com/itsmarcotime">
                                <FontAwesomeIcon icon={faGithub} className="iconClass"/>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="text-center copyrightbox">
                        <p className="footerP">
                            Created by Marco A. Mata <FontAwesomeIcon icon={faCopyright} className="iconClass"/>
                        </p>
                        <p className="footerP">
                            2022
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        
    )
}

export default Footer;