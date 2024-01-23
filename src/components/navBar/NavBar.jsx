import React from "react";
import "./navBar.css";
import SmallBtn from "../smallBtn/SmallBtn";
import { images } from "../../constants";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="app__navBar">
      <div className="title">
        <h2>Doctor</h2> <span> </span>
      </div>
      <ul className="app__navBar-links">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="app__navBar-wrapper">
        <FaBars size={24} color="#3a8ef6" className="burgerBtn" />

        <div className="content-btn">
          <SmallBtn
            text="Book Now"
            img={images.messageCircle}
            paddingBlock="1rem"
            paddingInline="1.75rem"
            fontSize="1.125rem"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
