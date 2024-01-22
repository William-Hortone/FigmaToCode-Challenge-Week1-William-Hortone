import React from "react";
import "./bigBtn.css";

const BigBtn = ({ paddingBlock, paddingInline, img, text, title }) => {
  return (
    <button
      className="app__bigBtn"
      style={{
        paddingBlock: `${paddingBlock}`,
        paddingInline: `${paddingInline}`,
      }}
    >
      <img src={img} alt="icon" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default BigBtn;
