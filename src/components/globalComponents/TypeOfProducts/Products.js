import React from "react";
import "./products.css";
import { SingleProduct } from "./singleProduct/SingleProduct";

export const Products = ({ listType, img, name, price, actual, color }) => {
  return (
    <div className="products mt-5">
      <div
        className="products-background"
        style={{ background: `${color}` }}
      ></div>
      <div className="container py-4 d-flex">
        <h5>{listType}</h5>
        <h5 className="ms-auto view-all">View All</h5>
      </div>
      <div className="inner-products container d-flex">
        <SingleProduct {...{ img, name, price, actual }} />
        <SingleProduct {...{ img, name, price, actual }} />
        <SingleProduct {...{ img, name, price, actual }} />
        <SingleProduct {...{ img, name, price, actual }} />
        <SingleProduct {...{ img, name, price, actual }} />
        <SingleProduct {...{ img, name, price, actual }} />
      </div>
    </div>
  );
};
 