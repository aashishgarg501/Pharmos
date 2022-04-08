import React from "react";
import "./singleitem.css";

import { oilPro, trash } from "../../../globalComponents/images/Images";

export const SingleItem = () => {
  return (
    <div className="singleitem">
      <div className="singleitem-left">
        <img src={oilPro} alt="product" />
      </div>
      <div className="singleitem-right">
        <div className="singleitem-dec">
          <div className="singleitem-dec-left">Product details</div>
          <div className="singleitem-dec-right">
            <img src={trash} alt="del" className="cart-delete" />
          </div>
        </div>
        <p className="cart-brand">Brand name</p>
        <p className="cart-product-dec">Product description in short.</p>
        <div className="singleitem-drop">
          <SelectBox />
          <div className="">
            <p>
              18% OFF <del>₹106.5</del>
            </p>
            <span>₹96</span>
          </div>
        </div>
        <p className="cart-deal-date">Delivery date: 01-01-2022</p>
      </div>
    </div>
  );
};

const SelectBox = () => {
  return (
    <select name="" id="">
      <option value="data 1">data 1</option>
      <option value="data 2">data 2</option>
    </select>
  );
};
