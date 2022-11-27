import React from "react";
import portfolioPic from "../../assets/images/portfolioPic.jfif"

function About () {
    return (
        <section>
            <div className="d-flex aboutContainer">
                <div className="col-4 text-center statusBox">
                    <p className="aboutStatus">
                        SUBJECT: MARCO A. MATA<br />
                        <br />
                        STATUS: OBSERVATION <br />
                        <br />
                        REASON:<br /> AWAITING FURTHER DATA
                    </p>
                </div>
                <div className="col-4">
                    <img
                        src={portfolioPic}
                        alt="portfolio-pic"
                        className="aboutImg"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="col-4 text-center statusBox">
                    <p className="aboutText">
                        DESCRIPTION:
                    </p>
                    <p className="aboutText">
                        Subject has completed a full stack programming bootcamp from University of Texas in 
                        San Antonio. Strong interests in understanding the deeper meaning and functions of everything around us. 
                        Continuous learner who loves working with JavaScript, React, and Python. Born to be a 
                        back-end developer, but will never be afraid of front-end work. Hobbies include jogging, 
                        philosophy, physics, and eating Pho. 🍜
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;