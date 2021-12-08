import React from "react";
import "./Sign_in.css";

const Sign_in = ({ onRouteChange }) => {
  return (
    <div class="form-box">
      <form action="">
        <div class="header-text">Login Form</div>
        <input placeholder="Your Email Address" type="email" required />
        <input placeholder="Your Password" type="password" />

        <button className="login" onClick={() => onRouteChange("home")}>
          Sign in
        </button>
        <button className="register">Register</button>
      </form>
    </div>
  );
};

export default Sign_in;
