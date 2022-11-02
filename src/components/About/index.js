import React from "react";
import breenGrub from "../../assets/images/BreenGrub-logo.jpg"

function About () {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={breenGrub} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;