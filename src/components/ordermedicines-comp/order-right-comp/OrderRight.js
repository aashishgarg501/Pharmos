import React from "react";
import "./orderright.css";
import { prescription, notpres } from "../../globalComponents/images/Images";

export const OrderRight = () => {
  return (
    <div className="orderright">
      <div className="order-via-pres">
        <img src={prescription} alt="" />
        <span> Order via Prescription</span>
      </div>
      <div className="dontpres">
        <div>
          <img src={notpres} alt="" />
          <span>Don't have a Prescription?</span>
        </div>
        <ul>
          <li>Add medicine to your cart.</li>
          <li>Select Free Doctor Consultation at checkout.</li>
        </ul>
        <button>Or call On +91 00 0000 0000</button>
      </div>
    </div>
  );
};
