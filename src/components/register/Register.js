import React, { useState } from "react";
import "../sign_in/SignIn.css";

const Register = ({ onRouteChange }) => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const prevDef = (e) => {
    e.preventDefault();
  };

  const onNameChange = (event) => {
    setRegisterName(event.target.value);
  };
  const onEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  return (
    <div className="form-box">
      <div>
        <div className="header-text">Register</div>
        <form onSubmit={prevDef}>
          <input
            placeholder="Your Name"
            onChange={(event) => onNameChange(event)}
            type="name"
            required
          />
          <input
            placeholder="Your Email Address"
            onChange={(event) => onEmailChange(event)}
            type="email"
            required
          />
          <input
            placeholder="Your Password"
            onChange={(event) => onPasswordChange(event)}
            type="password"
          />

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
        </form>
      </div>
    </div>
  );
};

export default Register;
