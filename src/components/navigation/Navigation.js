import React from "react";

const Navigation = ({ onRouteChange, isSignedIN }) => {
  return isSignedIN ? (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signout")}
        style={{ background: "black", color: "white", padding: "5px 8px" }}
        className=""
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: "flex", justifyContent: "flex-end", gap: "0.8rem" }}>
      <p
        onClick={() => onRouteChange("signin")}
        style={{ background: "black", color: "white", padding: "5px 8px" }}
        className=""
      >
        Sign In
      </p>
      <p
        onClick={() => onRouteChange("register")}
        style={{ background: "black", color: "white", padding: "5px 8px" }}
        className=""
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
