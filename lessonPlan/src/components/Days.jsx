import React from "react";
import Form from "./Form";
import { useRef } from "react";
const Days = ({ id, title }) => {
  const tiltBox = useRef(null);
  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = tiltBox.current;
    const { clientX: x, clientY: y } = e;

    const xPos = x / width - 0.5;
    const yPos = y / height - 0.5;

    const tiltX = yPos * 10;
    const tiltY = xPos * 10;

    tiltBox.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    tiltBox.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={tiltBox}
      className="day-div"
      id={id}
    >
      <h2 data-testid="titleText">{title}</h2>
      <Form />
    </div>
  );
};

export default Days;
