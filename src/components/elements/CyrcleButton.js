import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const CyrcleButton = ({ imgSrc, title }) => {
  // Context
  const { colors, bgColors, responsive, dailyTextsData } =
    useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  // Styles
  const styles = {
    container: {
      width: responsive("10vw", "91px", "91px"),
      height: responsive("10vw", "91px", "91px"),
      borderRadius: "50%",
      overFlow: "hidden",
      border: "solid 4px " + colors.orange,
      cursor: "pointer",
      transform: isHovered ? "translateY(-10px)" : "translateY(0)", // Move up on hover
      transition: "transform 0.3s ease-out", // Smooth transition
      padding: 18,
      backgroundColor: colors.white,
      position: "relative",
      maxWidth: 100,
      maxHeight: 100,
      margin: 3,
    },
    img: {
      width: "100%",
      color: colors.white,
      marginTop: imgSrc === "/selectedBtns2.png" ? 10 : 0,
    },
    title: {
      fontWeight: 600,
      textAlign: "center",
      color: colors.darkBlue,
      fontSize: responsive("20px", "2vmax", "2vmax"),
      position: "absolute",
      bottom: -65,
      left: "50%",
      transform: "translateX(-50%)",
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)} // Trigger hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      <img style={styles.img} src={imgSrc} alt="selectIcon" />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default CyrcleButton;
