import React, { useState } from "react";
import "../sign_in/SignIn.css";

const Register = ({ onRouteChange, loadUser }) => {
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

  const onRegisterSubmit = ()=>{
    fetch("http://localhost:3131/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newName: registerName,
        newEmail: registerEmail,
        newPassword: registerPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          alert("Registered Successfully");
          onRouteChange("signin");
          console.log("regdata ",data);
          loadUser(data);
          
        } else {
          alert("Failed to register");
        } 
      });
  }

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

          <button className="login" onClick={onRegisterSubmit}>
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
