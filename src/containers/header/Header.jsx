import React from "react";
import { BigBtn, NavBar, SmallBtn } from "../../components";
import { images } from "../../constants";
import "./header.css";

const Header = () => {
  // text for the  buttons
  const text1 = "Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.";
  const text2 =
    "Lorem ipsum dolor sit amet , con <br /> sectetur adipiscing elit.";
  return (
    <section className="app__header">
      <NavBar />
      <div className="app__header-wrapper">
        <div className="app__header-wrapper-text">
          <h4>Dr. Matthew Anderson</h4>
          <h1>
            A dedicated doctor <br /> you can trust
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Elementum eget vel, nunc nulla feugiat. Metus ut.
          </p>
          <SmallBtn
            text="Book an appointment"
            img={images.messageCircle}
            paddingBlock="1rem"
            paddingInline="1.75rem"
          />
        </div>
        <div className="app__header-wrapper-image">
          <img src={images.imgDoc} alt="doctor photo" />
        </div>
      </div>

      <div className="app__header-container">
        <BigBtn
          img={images.clockIcon}
          text={<div dangerouslySetInnerHTML={{ __html: text1 }} />}
          title="24 hour service"
        />
        <BigBtn
          img={images.checkCircle}
          text={<div dangerouslySetInnerHTML={{ __html: text2 }} />}
          title="8 years of experience"
        />
        <BigBtn
          img={images.medicalSymbol}
          text={<div dangerouslySetInnerHTML={{ __html: text1 }} />}
          title="High quality care"
        />
      </div>
    </section>
  );
};

export default Header;
