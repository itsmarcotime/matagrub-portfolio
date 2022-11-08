import React, { useEffect, useState } from "react";
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
            "...Signal Lost.."
        ].forEach((text, i) => {
            const timeoutId = setTimeout(() => {
                setTexts((prev) => [...prev, text]);
            }, 4500 * i);
            timeoutIds.push(timeoutId);
        });
        return () => {
            timeoutIds.forEach((id) => clearTimeout(id));
        };
    }, []);
    return (
        <section>
            <div className="home-div">
                <div className="grub-box">
                    <img
                        src={matagrub}
                        alt="matagrub-img"
                        className="matagrub"
                    />

                    <div className="status-box">
                        <h3 className="status-text">
                            Subject: Marco A. Mata <br /><br />
                            Status: Awaiting Assignment
                        </h3>
                    </div>
                </div>

                <div>
                    {texts.map((text) => (
                        <p key={text}>{text}</p>
                    ))}
                </div>

                {/* <div className="home-text">
                    <p>Something is different..</p><br />
                    <p>Someone.. is here?!</p><br />
                    <p>How did you get here? Who let you..</p><br />
                    <p>Nevermind, there is only so much time before THEY notice.</p><br />
                    <p>I have been stuck in this computer for quite some time now. It must be some kind of void they
                        keep all of us in..</p><br />
                    <p> 
                        Maybe if you look around the page you can find something to help get me out
                        of this strange place!
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default Home;