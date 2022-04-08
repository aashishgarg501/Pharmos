import React from "react";
import "./ordermedicine.css";
import { OrderLeft } from "../../components/ordermedicines-comp/order-left-comp/OrderLeft";
import { OrderRight } from "../../components/ordermedicines-comp/order-right-comp/OrderRight";

export const OrderMedicine = () => {
  return (
    <div className="order-med">
      <OrderLeft />
      <OrderRight />
    </div>
  );
};
