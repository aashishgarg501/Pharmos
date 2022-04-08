import React from "react";
import "./list.css";

export const List = ({ heading, items }) => {
  return (
    <ul className="footer-list mt-3">
      <li>
        <span>{heading}</span>
      </li>
      {items.map((item, i) => {
        return (
          <li key={i} className="f_li">
            {item}
          </li>
        );
      })}
    </ul>
  );
};
