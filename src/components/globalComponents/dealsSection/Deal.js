import React from "react";
import "./deal.css";
import { Dealcard } from "./dealcard/Dealcard";

export const Deal = () => {
  return (
    <div className="deal">
      <div className="deal-background"></div>
      <div className="inner-deal">
        <div className="deal-one container">
          <h5 className="d-flex">
            <p className="border-end border-3  me-3 pe-3">Deals of the day</p>
            <p>03:59:58 Left</p>
            <p className="view-all">View All</p>
          </h5>
        </div>
        <div className="container">
          <div className="deal-two  d-flex">
            <Dealcard />
            <Dealcard />
            <Dealcard />
            <Dealcard />
            <Dealcard />
            <Dealcard />
            <Dealcard />
            <Dealcard />
          </div>
        </div>
      </div>
    </div>
  );
};
