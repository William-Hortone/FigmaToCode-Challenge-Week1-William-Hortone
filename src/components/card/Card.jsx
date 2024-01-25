import React from "react";
import "./card.css";
import SmallBtn from "../smallBtn/SmallBtn";
import { images } from "../../constants";

const Card = ({ title, text, img }) => {
  return (
    <div className="app__card">
      <div className="app__card-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <p className="card-text">{text}</p>
      </div>
      <SmallBtn
        text="Book an appointment"
        img={images.whatsapp2}
        paddingBlock="1rem"
        paddingInline="1.75rem"
        width="100%"
      />
    </div>
  );
};

export default Card;
