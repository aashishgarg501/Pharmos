import React from "react";
import { NavLink } from "react-router-dom";
import { logo, offer, cart } from "../images/Images";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo_div">
          <h1 className="fst-italic text-white">
            <NavLink to="/" className="navlink">
              Pharmos<span className="d-block">Pvt. Ltd.</span>
            </NavLink>
          </h1>
        </div>
        <div className="input">
          <input type="text" placeholder="Search for Medicines" />
        </div>
        <div className="navLinks">
          <ul>
            <li className="nav-one">
              <img src={offer} alt="offer" className="img-fluid" /> Offers
            </li>
            <li className="nav-two">
              <img src={cart} alt="" className="img-fluid cartButtonImg" />
              <NavLink
                className="reset navlink cart-link"
                to="cart"
                style={{ margin: "auto 0%" }}
              >
                Cart
              </NavLink>
            </li>
            <li className="nav-three">
              <NavLink className="reset navlink" to="signin">
                Log In
              </NavLink>
            </li>
            <li className="nav-four">
              <NavLink to="signup" className="navlink">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
