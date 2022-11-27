import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import matagrub from "../../assets/images/matagrub.jpg";

function Home() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const timeoutIds = [];

        [
            "...Loading...", "Something is different... 🤔", "Someone.. is here?! 🤯", "How did you get here?? Who let you...",
            "Nevermind, there is only so much time before THEY notice. 🕒",
            "I have been stuck in this computer for quite some time now. It must be some kind of void they keep all of us in... 😵",
            "Maybe if you look around the page you can find something to help get me out of this strange place! 🕵🕵🕵",
            "...Signal Lost..."
        ].forEach((text, i) => {
            const timeoutId = setTimeout(() => {
                setTexts((prev) => [...prev, text]);
            }, 3500 * i);
            timeoutIds.push(timeoutId);
        });
        return () => {
            timeoutIds.forEach((id) => clearTimeout(id));
        };
    }, []);

    return (
        <section>
            <Marquee className="marquee" gradientColor="[0,0,0]" gradientWidth="600">
                Welcome to my webpage.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Feel free to lurk.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                You'll be glad you came. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;👾&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
            <div className="m-5 row justify-content-around">
                <div className="grubContainer col">
                    <img
                        src={matagrub}
                        alt="matagrub-img"
                        className="matagrub"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="home-div col">
                    <div className="home-text">
                        {texts.map((text) => (
                            <p key={text}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;