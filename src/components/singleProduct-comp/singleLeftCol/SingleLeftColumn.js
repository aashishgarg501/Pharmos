import React from "react";
import "./singleleftcolumn.css";
import { oilPro } from "../../globalComponents/images/Images";

export const SingleLeftColumn = () => {
  return (
    <div className="singleleftcolumn">
      <div className="single-item-detail">
        <div className="single-item-detail-one">
          <img src={oilPro} alt="pro" />
        </div>
        <div className="single-item-detail-two">
          <h3 className="single-item-Pname">Product Name</h3>
          <h4 className="single-item-Bname">Brand name</h4>
          <h4 className="single-item-qty">Quantity of products</h4>
          <h3 className="single-item-price">Price ₹100.00</h3>
          <p className="single-item-act-price">
            MRP <del>₹112.00</del>
          </p>
          <button className="single-item-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
