import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Canvas from "../Canvas";

function Home() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const timeoutIds = [];

        [
            "...Loading...", "Something is different... 🤔", "Someone.. is here?! 🤯", "How did you get here?? Who let you...",
            "Nevermind, there is only so much time before THEY notice. 🕒",
            "I have been stuck in this computer for quite some time now. It must be some kind of void they keep all of us in... 😵",
            "Maybe if you look around the page you can find something to help get me out of this strange place! 🕵",
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

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
        ctx.fill()
    };

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

            <Canvas draw={draw}></Canvas>

            <div className="m-5 row justify-content-around text-center">
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