import React from "react";
import { images } from "../../constants";
import "./appointment.css";

const Appointment = () => {
  return (
    <section className="app__appointment section__padding">
      <div className="app__appointment-container-schedule">
        <h4>Book an appointment</h4>
        <div className="wrapper-schedule">
          <h2>Schedule a virtual or presential appointment today</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra turpis habitant eu sociis fermentum felis.
          </p>

          <button className="appointment__smallBtn">
            <img src={images.whatsapp3} alt="icon" />
            <p>Book an appointment</p>
          </button>
        </div>
      </div>

      <div className="app__appointment-doctor">
        <h4>Book an appointment</h4>
        <div className="app__appointment-doctor_img">
          <img src={images.image4} alt="doctor photo" />
          <div className="play-btn">
            <img src={images.play} alt="play button" />
          </div>
        </div>
        <h2>A dedicated doctor with the core mission to help</h2>
        <p className="text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>

        {/* buttons */}
        <div className="appointment-container-btn">
          <button className="appointment__bigBtn">
            <img src={images.clockIcon} alt="icon" />
            <h3>+15 years of experience</h3>
          </button>
          <button className="appointment__bigBtn">
            <img src={images.checkCircle} alt="icon" />
            <h3>Urgent 24 hour service</h3>
          </button>
          <button className="appointment__bigBtn">
            <img src={images.medicalSymbol} alt="icon" />
            <h3>High quality care</h3>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
