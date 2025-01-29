// DecorativeElements.jsx
import React from "react";
import "../index.css";

const DecorativeElements = () => {
  return (
    <div className="decorative-elements">
      {/* Diamonds */}
      <div className="shape diamond top-left"></div>
      <div className="shape diamond-filled top-right"></div>
      <div className="shape diamond-dotted bottom-left"></div>

      {/* Cones */}
      <div className="shape cone bottom-right"></div>
      <div className="shape cone-striped center-left"></div>

      {/* Circles */}
      <div className="shape circle center-right"></div>
      <div className="shape circle-filled top-left"></div>
    </div>
  );
};

export default DecorativeElements;
