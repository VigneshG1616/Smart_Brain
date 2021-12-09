import React from "react";
import "../sign_in/SignIn.css";

const Register = ({ onRouteChange }) => {
  return (
    <div className="form-box">
      <div action="">
        <div className="header-text">Register</div>
        <input placeholder="Your Name" type="name" required />
        <input placeholder="Your Email Address" type="email" required />
        <input placeholder="Your Password" type="password" />

        <button className="login" onClick={() => onRouteChange("home")}>
          Register
        </button>
        <p className="registered">Already registered? Click below.</p>
        <button
          className="aleready-registered"
          onClick={() => onRouteChange("signin")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Register;
