import React from "react";
import { SingleLeftColumn } from "../../components/singleProduct-comp/singleLeftCol/SingleLeftColumn";
import { SingleRightColumn } from "../../components/singleProduct-comp/singleRightCol/SingleRightColumn";
import "./singleproduct.css";

export const SingleProduct = () => {
  return (
    <div className="singleproduct container">
      <SingleLeftColumn />
      <SingleRightColumn />
    </div>
  );
};
