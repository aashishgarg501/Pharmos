import React from "react";
import { Input } from "../inputfields/Input";
import { user, password } from "../images/Images";
import "./sign.css";
import { NavLink } from "react-router-dom";

export const Sigin = () => {
  return (
    <div className="signin">
      <div className="inner-signin">
        <h2 className="text-center">Sign in</h2>
        <p className="signin-dec text-center">
          Sign in to your account using username and password provided during
          registration.
        </p>
        <Input icon={user} placeholder="Username" />
        <Input icon={password} placeholder="Password" />
        <p className="forget">Forgot password?</p>
        <button className="sign-in-button">Sign in</button>
        <p className="create-ac">
          Don't have an account?
          <NavLink to="/signup">
            <span>Sign up</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
