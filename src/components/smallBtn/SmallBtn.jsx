import React from "react";
import "./smallBtn.css";

const SmallBtn = ({
  img,
  text,
  paddingBlock,
  paddingInline,
  width,
  fontSize,
}) => {
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
      <p style={{ fontSize: `${fontSize}` }}>{text}</p>
    </button>
  );
};

export default SmallBtn;
