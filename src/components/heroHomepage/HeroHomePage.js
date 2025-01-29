import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const HeroHomePage = () => {
  // context
  const { colors, isMobile, responsive } = useContext(AppContext);

  // state to trigger animation
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // styles
  const styles = {
    container: {
      position: "relative",
      width: "100%", // Ensure container fills the viewport width
      height: "calc( 100vh + 130px)", // Ensure container fills the viewport height
      overflow: "hidden", // Hide any overflow from the image (important for radius)
    },
    img: {
      width: "100%", // Ensure the image fills the container width
      height: "80%", // Ensure the image fills the container height
      objectFit: "cover", // Maintain aspect ratio and cover the entire container
      objectPosition: "58%", // Center the image within the container
      zIndex: -100,
      borderBottomLeftRadius: "30px", // Radius for the bottom-left corner
      borderBottomRightRadius: "30px", // Radius for the bottom-right corner
      transition: "transform 2.5s ease-out", // Smooth transition for zoom-in effect
      transform: isVisible ? "scale(1.05)" : "scale(1)", // Zoom-in effect
    },
    text: {
      position: "absolute",
      bottom: responsive("30%", "40%", "60%"),
      right: responsive(100, 70, 40),
      top: responsive(190, 200, 170),
      color: colors.white,
      fontSize: responsive(100, 100, 90),
      fontWeight: 700,
      opacity: isVisible ? 1 : 0, // Animation for fade in
      transform: isVisible ? "translateY(0)" : "translateY(20px)", // Slide-up effect
      transition: "opacity 1.5s ease-out, transform 1.5s ease-out", // Smooth transition for text
      lineHeight: 0.4,
    },
    smallText: {
      fontSize: responsive(75, 75, 70),
      fontWeight: 600,
    },
  };

  // functions
  const deskTopTitle = (
    <div style={styles.text}>
      <span style={styles.smallText}>ישיבת</span> <br />
      <br /> מעלות
    </div>
  );

  const mobileTitle = (
    <div style={styles.text}>
      <span style={styles.orangeText}>צדקו יחדיו</span> <br /> בית מדרש <br />{" "}
      לאיחוד התלמודים
    </div>
  );

  return (
    <div style={styles.container}>
      <img style={styles.img} src="hero1.png" alt="Hero Image" />
      {deskTopTitle}
    </div>
  );
};

export default HeroHomePage;
