import React from "react";
import "./smallBtn.css";

const SmallBtn = ({ img, text, paddingBlock, paddingInline, width }) => {
  return (
    <button
      className="app__smallBtn"
      style={{
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
        width: `${width}`,
      }}
    >
      <img src={img} alt="icon" />
      <p>{text}</p>
    </button>
  );
};

export default SmallBtn;
