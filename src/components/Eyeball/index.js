import React from "react";

function Eyeball() {

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        const eyeBall = document.getElementById('eyeBall');
        const rekt = eyeBall.getBoundingClientRect();
        const eyeBallX = rekt.left + rekt.width / 2;
        const eyeBallY = rekt.top + rekt.height / 2;
    
        const angleDeg = angle(eyeBallX, eyeBallY, mouseX, mouseY);
    
        console.log(angleDeg);
    
        const pupil = document.querySelectorAll('.eye-inner')
        pupil.forEach(pupil => {
            pupil.style.transform = `rotate(${90 + angleDeg}deg)`
        });
    });
    
    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy,dx);  // range (-PI, PI]
        const deg = rad * 180 / Math.PI  // rads to degs, range (-180, 180]
    
        return deg;
    };

    return (
        <div className="eye" id="eyeBall">
            <div className="eye-inner">
                <div className="pupil">
                    <div className="core"></div>
                </div>
            </div>
        </div>
    );
};

export default Eyeball;