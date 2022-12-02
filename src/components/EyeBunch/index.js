import { useState, useEffect, useRef } from "react";
import "./styles/styles.scss";

function EyeBunch() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();
  const eyeRight = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -18;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="eye_container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}
          className="eye"
        ></div>
        <div
          ref={eyeRight}
          style={{
            transform: `rotate(${calcAngle(eyeRight)}deg)`,
          }}
          className="eye"
        ></div>
      </div>
    </div>
  );
}

export default EyeBunch;