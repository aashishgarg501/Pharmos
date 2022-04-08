import React from "react";
import { Input } from "../inputfields/Input";
import { user } from "../images/Images";
import "./signup.css";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="signup">
      <div className="inner-signup ">
        <h2 className="text-center">Sign Up</h2>
        <p className="signup-dec text-center">
          Sign up to your account using email address.
        </p>
        <Input icon={user} placeholder="Name" />
        <Input icon={user} placeholder="Email" type="email" />
        <Input icon={user} placeholder="Password" />
        <Input icon={user} placeholder="Confirm Password" />
        <button className="sign-in-button">Sign Up</button>
        <p className="already-ac-up">
          Already have an account?
          <NavLink to="/signin">
            <span>Sign in</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
