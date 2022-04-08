import React from "react";
import { NavLink } from "react-router-dom";
import "./cartleft.css";
import { SingleItem } from "./singleItem/SingleItem";

export const CartLeft = () => {
  return (
    <div className="cartleft">
      <div className="cart-heading">
        <h3> Number of Items</h3>
        <NavLink to="/" className="cart-add">
          Add more items
        </NavLink>
      </div>
      <SingleItem />
      <SingleItem />
      <SingleItem />
    </div>
  );
};
