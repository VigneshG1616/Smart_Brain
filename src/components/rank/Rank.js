import React from "react";

const Rank = ({name,entries}) => {
  return (
    <div className="">
      <div
        className=""
        style={{
          fontSize: "32px",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        {`"${name}, Your total search count is:"`}
      </div>
      <div
        className=""
        style={{
          fontSize: "48px",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
        }}
      >
        {entries}
      </div>
    </div>
  );
};

export default Rank;
