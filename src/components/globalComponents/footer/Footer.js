import React from "react";
import { rupay, upi, visa } from "../images/Images";
import "./footer.css";
import { List } from "./list/List";

const headings = [
  "Our Services",
  "Featured Categories",
  "Need Help",
  "Company",
];

const itemsList = [
  ["Order MedicinesOrder", "Healthcare Products"],
  ["Personal Care", "Baby & Mom Care", "Health Care", "Medicines"],
  ["Browse All Medicines", "Browse All Healthcare Products", "offer", "FAQ"],
  [
    "About",
    "Shipping Policy",
    "Privacy Policy",
    "Terms and Conditions",
    "Return Policy",
  ],
];
export const Footer = () => {
  return (
    <div className="footer mt-5 d-flex w-100">
      <div className="footer-one center_elm">
        <h1 className="text-white fst-italic text-start w-75">Pharmos</h1>
        <p className="f_l_one text-start w-75 text-white mt-3">Call us:</p>
        <p className="f_l_two  text-start w-75 text-white fw-bold mt-2">
          Tel- XXXXXXXXXX
        </p>
        <p className="f_l_three  text-start w-75 text-white my-4">
          dhani Services Limited | CIN: U74899DL1994PLC062407 Registered Office:
          M-62 & 63, First Floor, Connaught Place, New Delhi-110001
        </p>
        <p className="f_l_four  text-start w-75 text-white fw-bold">
          email: example@gmail.com
        </p>
      </div>
      <div className="footer-two jcc">
        <List {...{ heading: headings[0], items: itemsList[0] }} />
        <List {...{ heading: headings[1], items: itemsList[1] }} />
      </div>
      <div className="footer-three jcc">
        <List {...{ heading: headings[2], items: itemsList[2] }} />
        <List {...{ heading: headings[3], items: itemsList[3] }} />
      </div>
      <div className="footer-four center_elm">
        <h5 className="text-left w-75 text-white">Payment Gateway</h5>
        <div className="d-flex w-75 aic payment">
          <img src={upi} alt="upi" />
          <img src={rupay} alt="rupay" />
          <img src={visa} alt="visa" />
        </div>
      </div>
    </div>
  );
};
