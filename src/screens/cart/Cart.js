import React from "react";
import { CartLeft } from "../../components/cart-comp/left-col/CartLeft";
import { CartRight } from "../../components/cart-comp/right-col/CartRight";
import "./cart.css";

export const Cart = () => {
  return (
    <div className="cart">
      <CartLeft />
      <CartRight />
    </div>
  );
};
