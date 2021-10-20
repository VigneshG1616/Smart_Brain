import React from "react";

const Recognised_image = ({ imageUrl }) => {
  return (
    <div
      className=""
      style={{ display: "flex", justifyContent: "center", padding: "40px 0px" }}
    >
      <img src={imageUrl} alt="" width="500px" height="auto" />
    </div>
  );
};

export default Recognised_image;
