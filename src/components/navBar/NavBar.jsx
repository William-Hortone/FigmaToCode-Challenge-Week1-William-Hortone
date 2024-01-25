import React, { useState } from "react";
import "./navBar.css";
import SmallBtn from "../smallBtn/SmallBtn";
import { images } from "../../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="app__navBar">
        <div className="title">
          <h2>Doctor</h2> <span />
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
          <FaBars
            onClick={() => setShowMenu(true)}
            size={24}
            color="#3a8ef6"
            className="burgerBtn"
          />
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

      {showMenu && (
        <div className="wrapper-small-screen show-menu">
          <div className="close-btn">
            <FaTimes
              onClick={() => setShowMenu(false)}
              size={36}
              color="#fff"
            />
          </div>
          <ul className="small-screen-links">
            <li>
              <a className="link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <button className="book-btn">
            <img src={images.whatsapp3} alt="icon" />
            <p>Book now</p>
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
