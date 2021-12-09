import React from "react";
import "./ImageInputField.css";

const ImageInputField = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="input-heading" style={{}}>
      <p
        style={{
          fontSize: "24px",
          padding: "20px 0px",
        }}
      >
        {"This magic brain will detect faces in your pictures, Give it a try."}
      </p>
      <div
        className=""
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div className="" style={{}}>
          <div className="input-form-div">
            <input
              className="input"
              placeholder=" Enter the image url here"
              type="text"
              style={{ fontSize: "20px", height: "30px" }}
              onChange={onInputChange}
            />
            <button
              style={{
                fontSize: "20px",
                padding: "3.6px",
                cursor: "pointer",
                background: "#2ac38a",
                color: "#fff",

                border: "3px solid #2ac38a",
                borderTopRightRadius: "4px",
                BorderBottomRightRadius: "4px",
              }}
              onClick={onButtonSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageInputField;
