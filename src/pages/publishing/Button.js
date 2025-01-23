import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Button({ btnText, btnImg, background, onClick }) {
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const styles = {
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      outline: "none",
      border: "none",
      borderRadius: 20,
      background,
      cursor: "pointer",
      width: "100%",
      transition: "background-color 0.3s, transform 0.1s ease-out",
      boxShadow: isHovered
        ? "rgba(0, 0, 0, 0.1) 0px 2px 5px 0px"
        : "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
    },
    text: {
      color: colors.white,
      fontWeight: 500,
      fontSize: responsive("0.9rem", "1.2rem", "1.2rem"),
      padding: 2,
    },
    img: {
      paddingRight: 4,
      height: responsive("20px", "1.2rem", "1.2rem"),
    },
  };

  return (
    <>
      <button
        style={styles.btn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={onClick}
      >
        <span style={styles.text}>{btnText}</span>
        <img style={styles.img} src={btnImg} alt={btnText} />
      </button>
    </>
  );
}
