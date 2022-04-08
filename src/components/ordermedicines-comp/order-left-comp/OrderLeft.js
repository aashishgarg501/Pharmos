import React from "react";
import "./orderleft.css";
import { offer, gift, returned } from "../../globalComponents/images/Images";

export const OrderLeft = () => {
  return (
    <div className="order-left">
      <h1>Order Medicines Online</h1>
      <div className="order-left-div">
        <div className="order-tag-div">
          <Tag src={offer} text="FLAT 20% OFF" />
          <Tag src={gift} text="50K PLUS PRODUCTS" inv={true} />
          <Tag src={returned} text="EASY RETURN" inv={true} />
        </div>
        <h2>Search for Mediciens</h2>
        <div className="order-input">
          <input type="text" placeholder="Search for Medciens" />
        </div>
      </div>
    </div>
  );
};

const Tag = (p) => {
  return (
    <span className="oreder-tag">
      <img src={p.src} alt="" style={p.inv ? { filter: "invert(1)" } : {}} />
      {p.text}
    </span>
  );
};
