import React, { useEffect, useState } from "react";
import Blink from 'react-blink-text';
import Eyeball from "../Eyeball";
import matagrub from "../../assets/images/matagrub.jpg";

function Home() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const timeoutIds = [];

        [
            "...Loading...", "Something is different..", "Someone.. is here?!", "How did you get here? Who let you..",
            "Nevermind, there is only so much time before THEY notice.",
            "I have been stuck in this computer for quite some time now. It must be some kind of void they keep all of us in..",
            "Maybe if you look around the page you can find something to help get me out of this strange place!",
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
            <div className="homeContainer">
                <div>
                    <Blink color="red" text="Warning!!" fontSize="60" className="blinkText">
                    </Blink>
                </div>
                <div className="">
                <img
                    src={matagrub}
                    alt="matagrub-img"
                    className="matagrub"
                    width={75}
                />
                </div>
                <div className="home-div">
                    <div>
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