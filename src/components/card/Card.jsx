import React from "react";
import "./card.css";
import SmallBtn from "../smallBtn/SmallBtn";
import { images } from "../../constants";

const Card = () => {
  return (
    <div className="app__card">
      <div className="app__card-img">
        <img src="" alt="" />
      </div>
      <h3>Cardiology</h3>
      <p>
        Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
        iTristique id nibh lobortis nunc
      </p>
      <SmallBtn
        text="Book an appointment"
        img={images.whatsapp2}
        paddingBlock="1rem"
        paddingInline="1.75rem"
      />
    </div>
  );
};

export default Card;
