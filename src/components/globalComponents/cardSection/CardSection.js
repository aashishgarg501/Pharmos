import React from "react";
import "./cardsection.css";
import { Card } from "../card/Card";
import { oil, pickup } from "../images/Images";
import { Spacer } from "../spacer/Spacer";

export const CardSection = () => {
  return (
    <div className="card-section">
      <div className="container">
        <div className="inner-card-section">
          <Card
            {...{
              title: "Order Medicines",
              buttonTitle: "Order Now",
              img: oil,
              colorCode: "#ffc0cb4a",
            }}
          />
          <Spacer w="100" />
          <Card
            {...{
              title: "Pick and Drop",
              buttonTitle: "Check Now",
              img: pickup,
              colorCode: "#e8f9ff",
            }}
          />
        </div>
      </div>
    </div>
  );
};
