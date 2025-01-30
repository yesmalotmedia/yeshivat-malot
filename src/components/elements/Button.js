import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const Button = ({
  color,
  hoveredColor,
  bgColor,
  hoveredBgColor,
  title,
  fontWeight,
  fontSize,
  borderRadius,
  width,
  arrow,
  height,
  onClick,
  padding,
  margin,
  arrowColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { colors, isMobile, responsive } = useContext(AppContext);

  const styles = {
    button: {
      width: width || 280,
      height: height || 50,
      padding: padding || 10,
      margin,
      backgroundColor: bgColor, // Adjusted to use backgroundColor for simplicity
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: borderRadius || 5,
      cursor: "pointer",
      transition: "all 0.5s ease", // Smooth transition for hover effects
      boxShadow: isHovered
        ? "rgba(149, 157, 165, 0.77) 0px 3px 27px" // Correct boxShadow definition
        : "rgba(0, 0, 0, 0.05) 0px 4px 8px", // Default shadow
    },
    text: {
      color: color,
      width: "90%",
      textAlign: "center",
      fontSize: isHovered ? 17 : 16,
      fontWeight,
      transition: "all 0.5s ease", // Smooth transition for hover effects
    },
    img: {
      width: responsive("6%", "3%", "5%"),
    },
  };

  return (
    <div
      style={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={styles.text}>{title}</div>
      {arrow && (
        <img
          style={styles.img}
          src={
            arrowColor === "white"
              ? "/arrow-to-left.png"
              : "/arrowLeft-blue.png"
          }
          alt="arrow"
        />
      )}
    </div>
  );
};

export default Button;
