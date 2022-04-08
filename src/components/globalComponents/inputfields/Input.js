import React from "react";
import "./input.css";

export const Input = ({ placeholder, icon, type }) => {
  return (
    <div className="input-field">
      {icon ? <img src={icon} alt="icon" /> : ""}
      <input type={type ? type : "text"} placeholder={placeholder} />
    </div>
  );
};
