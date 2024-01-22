import React from "react";
import { SmallBtn } from "../../components";
import { images } from "../../constants";
import "./about.css";

const About = () => {
  return (
    <div className="app__about section__padding">
      <div className="app__about-wrapper">
        <div className="app__about-img">
          <img src={images.doctorsImg} alt="" />
          <div className="img-plus"></div>
        </div>
        <div className="app__about-content">
          <h4>About me</h4>
          <h2>
            A dedicated doctor with the <br /> core mission to help
          </h2>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
          <SmallBtn
            text="Book an appointment"
            img={images.whatsapp}
            paddingBlock="1rem"
            paddingInline="1.75rem"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
