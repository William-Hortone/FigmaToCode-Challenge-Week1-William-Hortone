import React from "react";
import { Card, SmallBtn } from "../../components";
import { images } from "../../constants";
import "./services.css";

const Services = () => {
  return (
    <div className="app__services section__padding">
      <div className="app__services-header">
        <div className="app__services-header-content">
          <h4>Service</h4>
          <h2>
            Experienced in multiple <br /> medical practices
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra turpis habitant eu sociis fermentum felis.
          </p>
          <SmallBtn
            text="Book an appointment"
            img={images.whatsapp2}
            paddingBlock="1rem"
            paddingInline="1.75rem"
          />
        </div>
        <div className="app__services-header-img">
          <img src={images.Visual} alt="" />
        </div>
      </div>
      <div className="app__services-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
