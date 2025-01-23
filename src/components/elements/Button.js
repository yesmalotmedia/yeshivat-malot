import React, { useState } from "react";

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
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    button: {
      width: width || 280,
      height: height || 50,
      padding: padding || 10,
      margin,
      backgroundColor: isHovered ? hoveredBgColor : bgColor, // Adjusted to use backgroundColor for simplicity
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
      color: isHovered ? hoveredColor : color,
      width: "90%",
      textAlign: "center",
      fontSize: fontSize || 35,
      fontWeight,
    },
    img: {
      width: "8%",
    },
  };
  console.log(hoveredColor);

  return (
    <div
      style={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={styles.text}>{title}</div>
      {arrow && <img style={styles.img} src="/arrow-to-left.png" alt="arrow" />}
    </div>
  );
};

export default Button;
