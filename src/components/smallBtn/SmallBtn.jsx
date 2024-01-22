import React from "react";
import "./smallBtn.css";

const SmallBtn = ({ img, text, paddingBlock, paddingInline }) => {
  return (
    <button
      className="app__smallBtn"
      style={{
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
      }}
    >
      <img src={img} alt="icon" />
      <p>{text}</p>
    </button>
  );
};

export default SmallBtn;
