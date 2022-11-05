import React from "react";
import matagrub from "../../assets/images/matagrub.jpg";

function Home() {
    return (
        <section>
            <div className="home-div">
                <div className="grub-box">
                    <img
                        src={matagrub}
                        alt="matagrub-img"
                        className="matagrub"
                    />

                    <div>
                        <h3>
                            Subject: Marco A. Mata <br />
                            Status: Awaiting Assignment
                        </h3>
                    </div>
                </div>

                <div className="home-text">
                    <p>
                        Something is different.. Someone.. is here?! <br />
                        How did you get here? Who let you.. Nevermind, there is only so much time before THEY notice.
                        I have been stuck in this computer for quite some time now. It must be some kind of void they
                        keep all of us in.. Maybe if you look around the page you can find something to help get me out
                        of this strange void!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;