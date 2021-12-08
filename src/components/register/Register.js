import React from "react";
import "../sign_in/Sign_in.css";

const Register = ({ onRouteChange }) => {
  return (
    <div class="form-box">
      <form action="">
        <div class="header-text">Register</div>
        <input placeholder="Your Name" type="name" required />
        <input placeholder="Your Email Address" type="email" required />
        <input placeholder="Your Password" type="password" />

        <button className="login" onClick={() => onRouteChange("home")}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
