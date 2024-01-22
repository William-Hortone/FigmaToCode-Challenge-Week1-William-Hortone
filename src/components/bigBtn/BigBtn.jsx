import React from "react";
import "./bigBtn.css";

const BigBtn = ({ img, text, title }) => {
  return (
    <button className="app__bigBtn">
      <img src={img} alt="icon" />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </button>
  );
};

export default BigBtn;
