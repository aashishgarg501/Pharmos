import React from "react";
import "./card.css";

export const Card = ({ title, buttonTitle, img, colorCode }) => {
  return (
    <div className="card-style">
      <div className="card-title" style={{ background: colorCode }}>
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="button-title">
        <button>{buttonTitle}</button>
        <img src={img} alt="med.." className="oil" />
      </div>
    </div>
  );
};
