import React from "react";
import Tilt from "react-tilt";
import Logo_brain from "./Logo_brain.png";

import "./Logo.css";
const Logo = () => {
  return (
    <div className="">
      <Tilt
        className="Tilt "
        options={{ max: 55 }}
        style={{ height: 120, width: 150 }}
      >
        <div className="Tilt-inner  ">
          <img src={Logo_brain} alt="Brain-Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
