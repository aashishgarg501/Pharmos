import React from "react";
import { offer } from "../../globalComponents/images/Images";
import "./cartright.css";

export const CartRight = () => {
  return (
    <div className="cartright">
      <div className="cart-coup">
        <img src={offer} alt="offer" />
        <span>Apply Coupon / View Offer</span>
      </div>
      <div className="cart-del">Add Deliver Address</div>
      <div className="cart-offer-del"></div>
      <div className="cart-summ"></div>
    </div>
  );
};
