import React from "react";
import "./RecognisedImage.css";

const RecognisedImage = ({ imageUrl, box }) => {
  return (
    <div
      className=""
      style={{ display: "flex", justifyContent: "center", padding: "40px 0px" }}
    >
      <div className="" style={{ position: "absolute" }}>
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RecognisedImage;
