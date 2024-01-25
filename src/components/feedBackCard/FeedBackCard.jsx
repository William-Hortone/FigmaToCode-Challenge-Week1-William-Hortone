import React from "react";
import "./feedBackCard.css";

const FeedBackCard = ({ img, text, name, title }) => {
  return (
    <div className="app__feedBackCard">
      <p className="card-text">{text}</p>
      <div className="content">
        <img src={img} alt="profile photo" />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
