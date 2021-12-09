import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="form-box">
      <div action="">
        <div className="header-text">Login Form</div>
        <input placeholder="Your Email Address" type="email" required />
        <input placeholder="Your Password" type="password" />

        <button className="login" onClick={() => onRouteChange("home")}>
          Sign in
        </button>
        <button className="register" onClick={() => onRouteChange("register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default SignIn;
