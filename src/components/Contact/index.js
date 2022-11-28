import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact () {
    return (
        <section>
            <div className="container text-center">
                <div className="col-12">
                    <h1>Contact Me</h1>
                    <h4>You'll be glad you did.</h4>
                </div>
                <div>
                    <div className="container row">
                        <div className="col-5">
                            <ul>
                                <li><FontAwesomeIcon icon={faEnvelope} className=""/></li>
                                <li><FontAwesomeIcon icon={faEnvelope} className=""/></li>
                                <li><FontAwesomeIcon icon={faEnvelope} className=""/></li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <ul>
                                <li><FontAwesomeIcon icon={faGithub} className=""/></li>
                                <li><FontAwesomeIcon icon={faLinkedin} className=""/></li>
                                <li><FontAwesomeIcon icon={faEnvelope} className=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;