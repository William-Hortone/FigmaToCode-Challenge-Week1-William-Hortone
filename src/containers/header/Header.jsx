import React from "react";
import { NavBar, SmallBtn } from "../../components";
import "./header.css";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header">
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
    </div>
  );
};

export default Header;
