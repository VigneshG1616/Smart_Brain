import React from "react";
import "./Sign_in.css";

const Sign_in = () => {
  return (
    <div class="form-box">
      <div class="header-text">Login Form</div>
      <input placeholder="Your Email Address" type="text" />
      <input placeholder="Your Password" type="password" />

      <button className="login">login</button>
      <button className="register">Register</button>
    </div>
  );
};

export default Sign_in;
