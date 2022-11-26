import React, { useState } from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const prevDef =(e)=>{
e.preventDefault();
  }

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSignInSubmit = () => {
    let userDetails = [];

    fetch("http://localhost:3131/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>{ if(data === "success"){
          this.props.onRouteChange("home");
          console.log("data ISS",data);
      }});

    console.log("email", signInEmail);
    console.log("Pass", signInPassword);
   
  };

  return (
    <div className="form-box">
      <div action="">
        <div className="header-text">Login Form</div>
        <form onSubmit={prevDef}>
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

        <button className="login" onClick={onSignInSubmit}>
          Sign in
        </button>
        <button className="register" onClick={() => onRouteChange("register")}>
          Register
        </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
