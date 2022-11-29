import React, { useEffect }from "react";
import TagCloud from "TagCloud";

function TextSphere() {

    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "MySQL",
                "Sequelize",
                "Jquery",
                "ES6",
                "Python",
                "GIT",
                "GITHUB",
            ];

            const options = {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div className="text-sphere">
                <div className="tagcloud"></div>
            </div>
        </>
    );
};

export default TextSphere;