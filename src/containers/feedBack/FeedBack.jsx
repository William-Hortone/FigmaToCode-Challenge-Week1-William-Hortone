import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeedBackCard } from "../../components";
import { images } from "../../constants";
import "./feedBack.css";

const FeedBack = () => {
  // The carousel for the responsive
  const responsive = {
    tablet: {
      breakpoint: { max: 2850, min: 564 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="app__feedBack section__padding box-with-top-shadow">
      <h2>What our great customers say about Dr. Matthew Anderson</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>

      {/* The carousel for the responsive */}
      <div className="app__feedBack-container_carousel">
        <Carousel responsive={responsive}>
          <div className="wrapper-carousel">
            <div className="item">
              <FeedBackCard
                title="Cardiology Patient"
                name="Samy White"
                img={images.profile3}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore"
              />
            </div>
            <div className="item">
              <FeedBackCard
                title="Orthopedics Patient"
                name="Kevin Smith"
                img={images.profile2}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              />
            </div>
          </div>

          <div className="wrapper-carousel">
            <div className="item">
              <FeedBackCard
                title="Nutrion Patient"
                name="Arthur Northon"
                img={images.profile1}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              />
            </div>
            <div className="item">
              <FeedBackCard
                title="Ophthalmology Patient"
                name="Amanda Jackson"
                img={images.profile4}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore"
              />
            </div>
          </div>
          <div className="wrapper-carousel">
            <div className="item">
              <FeedBackCard
                title="Cardiology Patient"
                name="Samy White"
                img={images.profile3}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore"
              />
            </div>
            <div className="item">
              <FeedBackCard
                title="Orthopedics Patient"
                name="Kevin Smith"
                img={images.profile2}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              />
            </div>
          </div>

          <div className="wrapper-carousel">
            <div className="item">
              <FeedBackCard
                title="Nutrion Patient"
                name="Arthur Northon"
                img={images.profile1}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              />
            </div>
            <div className="item">
              <FeedBackCard
                title="Ophthalmology Patient"
                name="Amanda Jackson"
                img={images.profile4}
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeedBack;
