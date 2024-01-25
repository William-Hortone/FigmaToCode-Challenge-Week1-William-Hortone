import React from "react";
import { Plus, SmallBtn } from "../../components";
import { images } from "../../constants";
import "./about.css";

const About = () => {
  return (
    <div className="app__about section__padding">
      <div className="app__about-wrapper">
        <div className="app__about-img">
          <img src={images.doctorsImg} alt="doctor photo" />
          {/* plus icons  */}
          <Plus
            top="6rem"
            left="-3rem"
            width="2.43919rem"
            height="2.375rem"
            widthOnSmall="1.64rem"
            heightOnSmall="1.59681rem"
            topOnSmall="6rem"
            leftOnSmall="-1.7rem"
          />
          <Plus
            top="89%"
            left="4.84rem"
            width="6.0625rem"
            height="6rem"
            widthOnSmall="4.07613rem"
            heightOnSmall="4.03413rem"
            topOnSmall="87%"
            leftOnSmall="3.55rem"
          />
          <Plus
            top="65%"
            left="100%"
            width="3.3125rem"
            height="3.25rem"
            widthOnSmall="2.22719rem"
            heightOnSmall="2.18513rem"
            topOnSmall="12.55rem"
            leftOnSmall="98%"
          />
          <Plus
            top="-2rem"
            left="18.47rem"
            width="1.8015rem"
            height="1.75rem"
            widthOnSmall="1.21125rem"
            heightOnSmall="1.17663rem"
            topOnSmall="-1.55rem"
            leftOnSmall="16rem"
          />
        </div>
        <div className="app__about-content">
          <h4>About me</h4>
          <h2>A dedicated doctor with the core mission to help</h2>
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
