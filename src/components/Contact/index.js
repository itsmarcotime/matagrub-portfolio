import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact () {
    return (
        <section>
            <div className="container text-center">
                <div className="col-12 contacttitle">
                    <h1>Contact Me</h1>
                    <h4>You'll be glad you did.</h4>
                </div>
                <div className="firstcontact">
                    <div className="container row contactcontainer">
                        <div className="col-6">
                            <ul>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>Phone</p>
                                            </div>
                                            <div>
                                                <p><a href="tel:+14323867370">+14323867370</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>Email</p>
                                            </div>
                                            <div>
                                                <p><a href="mailto:mmata3309@gmail.com">mmata3309@gmail</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faThumbTack} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>Location</p>
                                            </div>
                                            <div>
                                                <p>Texas, United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faGithub} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>GitHub</p>
                                            </div>
                                            <div>
                                                <p><a href="https://github.com/itsmarcotime">itsmarcotime</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faLinkedin} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>LinkedIn</p>
                                            </div>
                                            <div>
                                                <p><a href="https://www.linkedin.com/in/marco-mata-8165bb175/">Marco A. Mata</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="contactlist">
                                    <div className="container d-flex">
                                        <div>
                                            <FontAwesomeIcon icon={faStackOverflow} className="contacticon" />
                                        </div>
                                        <div className="container">
                                            <div>
                                                <p>StackOverflow</p>
                                            </div>
                                            <div>
                                                <p><a href="https://stackoverflow.com/users/18444146/itsmarcotime">itsmarcotime</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;