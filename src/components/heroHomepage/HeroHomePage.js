import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const HeroHomePage = () => {
  const { colors, isMobile, responsive } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: responsive("calc(100vh + 130px)", "calc(100vh + 120px)", "700px"),
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "80%",
      objectFit: "cover",
      objectPosition: "58%",
      zIndex: -100,
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
      transition: "transform 2.5s ease-out",
      transform: isVisible ? "scale(1.05)" : "scale(1)",
    },
    text: {
      position: "absolute",
      bottom: responsive("30%", "40%", "60%"),
      right: responsive(110, 70, 40),
      top: responsive(250, 200, 170),
      color: colors.white,
      fontSize: responsive(120, 100, 90),
      fontWeight: 700,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
      lineHeight: 0.5,
    },
    smallText: {
      fontSize: responsive(90, 75, 70),
      fontWeight: 600,
    },
  };

  const deskTopTitle = (
    <div className="hero-main-title" style={styles.text}>
      <span className="hero-main-title-small" style={styles.smallText}>
        ישיבת
      </span>
      <br />
      <br />
      מעלות
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
