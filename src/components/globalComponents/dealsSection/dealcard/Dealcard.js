import React from "react";
import "./dealcard.css";
import { oilPro } from "../../images/Images";

export const Dealcard = () => {
  return (
    <div className="deal-card">
      <div className="deal-card-one">
        <img
          className="w-75 mx-auto d-block h-100"
          src={oilPro}
          alt="product"
        />
      </div>
      <div className="deal-card-two p-1">
        <h5>Jhonson Baby Oil 100ml</h5>
        <h6>
          MRP <del>₹198.23</del>
        </h6>
        <span className="fw-bold">₹100.00</span>
      </div>
    </div>
  );
};
