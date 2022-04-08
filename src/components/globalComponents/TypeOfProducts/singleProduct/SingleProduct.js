import React from "react";
import "./singleProduct.css";

export const SingleProduct = ({ img, name, price, actual }) => {
  return (
    <div className="singleProduct">
      <div className="singleProduct-one">
        <img src={img} alt="product" className="w-75 h-100" />
      </div>
      <div className="singleProduct-two w-100">
        <h5 className="w-100 d-flex">{name}</h5>
        <h5 className="w-100">{price}</h5>
        <del className="w-100">{actual}</del>
      </div>
    </div>
  );
};
