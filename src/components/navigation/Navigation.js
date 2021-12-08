import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("home")}
        style={{ background: "black", color: "white", padding: "5px 8px" }}
        className=""
      >
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
