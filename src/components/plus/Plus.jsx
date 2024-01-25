import React, { useEffect, useState } from "react";
import "./plus.css";
import { images } from "../../constants";

const Plus = ({
  width,
  height,
  top,
  left,
  widthOnSmall,
  heightOnSmall,
  topOnSmall,
  leftOnSmall,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 550);

  // To Check the width of the screen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      // set the width according to the size of the screen
      className={`app__plus ${isSmallScreen ? "smallScreen" : ""}`}
      style={{
        width: isSmallScreen ? widthOnSmall : width,
        height: isSmallScreen ? heightOnSmall : height,
        top: isSmallScreen ? topOnSmall : top,
        left: isSmallScreen ? leftOnSmall : left,
      }}
    >
      <img src={images.plus} alt="plus icon" />
    </div>
  );
};

export default Plus;
