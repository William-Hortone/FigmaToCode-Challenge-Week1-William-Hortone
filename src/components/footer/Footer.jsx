import React from "react";
import { images } from "../../constants";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-wrapper">
        <div className="app__footer-wrapper_content">
          <div className="title">
            <h2>Doctor</h2> <span />
          </div>
          <p>
            8 W. South St.Buford, GA 30518 <br /> 5Briarwood LaneVienna, VA
            22180 RER
          </p>
          <div className="social-media">
            <img src={images.youtube} alt="YouTube icon" />
            <img src={images.facebook} alt="facebook icon" />
            <img src={images.whatsapp2} alt="whatsapp icon" />
          </div>
        </div>

        <div className="app__footer-wrapper_content">
          <h4>Company Info</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="app__footer-wrapper_content">
          <h4>Company Info</h4>
          <p>Appointment</p>
        </div>
        <div className="app__footer-wrapper_content">
          <h4>Company Info</h4>
          <ul>
            <li>+1 123456789</li>
            <li>remmcal@mail.com</li>
            <li>Phone: +1 12345678</li>
          </ul>
        </div>
      </div>
      <div className="divider" />
      <div className="copyright">
        © Doctor all rights 2023 - Designed by remmcalT
      </div>
    </footer>
  );
};

export default Footer;
