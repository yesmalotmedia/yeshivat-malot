import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";

const Subscribe = () => {
  const form = useRef();
  const { bgColors, colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    subscribe: {
      position: "relative",
      textAlign: "center",
      overflow: "hidden",
      maxWidth: responsive(450, 300, 300),
      borderRadius: 30,
      margin: "0 auto",
      cursor: "pointer",
    },
    bgImg: {
      display: "block",
      width: "100%",
      height: responsive(180, 120, 120),
      borderRadius: 30,
      animation: "pulse 6s infinite cubic-bezier(0.25, 1, 0.5, 1)", // Smooth zoom effect
      transition:
        "transform 1.5s cubic-bezier(0.15, 1, 0.5, 1), filter 2s ease-in-out",
      filter: isHovered ? "blur(6px)" : "blur(1px)",
      transform: isHovered ? "scale(1.2)" : "scale(1)", // Deeper zoom on hover
    },
    mainImgText: {
      color: colors.white,
      position: "absolute",
      width: "90%",
      top: "40%",
      left: "50%",
      transform: isHovered
        ? "translate(-50%, -50%) scale(1.1)"
        : "translate(-50%, -50%) scale(1)", // Scale effect
      fontSize: responsive(25, 22, 20),
      fontWeight: "300",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      opacity: 1,
      transition: "transform 1.5s ease-in-out", // Smooth scale effect
    },
    imgText: {
      color: colors.white,
      position: "absolute",
      width: "90%",
      top: "60%",
      left: "50%",
      transform: isHovered
        ? "translate(-50%, -50%) scale(1.1)"
        : "translate(-50%, -50%) scale(1)", // Scale effect
      fontSize: responsive(25, 22, 20),
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      opacity: 1,
      transition: "transform 1.5s ease-in-out", // Smooth scale effect
    },
    "@keyframes pulse": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" }, // Deeper zoom during animation
      "100%": { transform: "scale(1)" },
    },
  };

  return (
    <div
      style={styles.subscribe}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img style={styles.bgImg} src="/whatsappBg.png" alt="arrow" />
      <div style={styles.mainImgText}> ישיבת מעלות בוואטסאפ</div>
      <div style={styles.imgText}>הצטרפו לקבוצה השקטה</div>
    </div>
  );
};

export default Subscribe;
