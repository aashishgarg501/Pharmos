import React from "react";
import "./heading.css";

export const Heading = () => {
  return (
    <div className="p-5 my-4 heading">
      <div className="container px-2 py-4 rounded d-flex">
        <h3 className="text-white">
          Pharmos <span>An Express Medicine delivery</span>
        </h3>
        <h5 className="text-white text-center">
          Save flat 8% extra and get free delivery on order of Rs. 500.
        </h5>
      </div>
    </div>
  );
};
