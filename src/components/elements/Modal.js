import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function Modal() {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility
  const [isShrink, setIsShrink] = useState(false); // State to manage shrink

  const styles = {
    form: {
      background: colors.darkBlue,
      width: isShrink ? (isMobile ? 80 : 150) : isMobile ? "40vmax" : 500,
      height: isShrink ? (isMobile ? 80 : 150) : isMobile ? "340px" : "",
      display: "flex",
      flexDirection: "column",
      padding: 30,
      position: "fixed",
      left: isShrink ? (isMobile ? 60 : 100) : isMobile ? "50%" : 300,
      transform: "translateX(-50%)",
      bottom: isShrink ? (isMobile ? 110 : 50) : isMobile ? 20 : 200,
      borderRadius: isShrink ? "50%" : 30,
      zIndex: 999,
      opacity: isVisible ? 1 : 0, // Set opacity based on visibility state
      transition: "all 0.3s", // Add transition effect
      border: "solid white 1px",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 10px 20px 0px",
    },
    label: {
      fontSize: isShrink ? (isMobile ? 12 : 20) : 30,
      fontWeight: 600,
      color: colors.white,
      cursor: isShrink ? "pointer" : "auto",
      textAlign: "center",
      margin: isShrink ? (isMobile ? "-20px -10px 0 0" : "") : "",
    },
    inputContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    input: {
      outline: "none",
      border: "none",
      padding: 10,
      borderRadius: 30,
      width: isMobile ? "auto" : 210,
      marginTop: 20,
      fontSize: 20,
      fontWeight: 600,
    },
    closeButton: {
      position: "absolute",
      top: -30,
      right: 0,
      color: colors.darkBlue,
      border: "none",
      cursor: "pointer",
      padding: 5,
      borderRadius: "50%",
      fontSize: 20,
      fontWeight: 700,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && window.scrollY > 100) {
        setIsVisible(true);
      } else if (!isShrink && isVisible && window.scrollY > 350) {
        setIsShrink(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isShrink]);

  return (
    <>
      {isVisible && ( // Conditionally render the form
        <form style={styles.form}>
          {!isShrink && (
            <div style={styles.closeButton} onClick={() => setIsShrink(true)}>
              X
            </div>
          )}
          <label onClick={() => setIsShrink(false)} style={styles.label}>
            רוצים להקדיש שיעור? להנציח?
          </label>
          {!isShrink && (
            <div style={styles.inputContainer}>
              <input style={styles.input} type="text" placeholder=" שם " />
              <input style={styles.input} type="text" placeholder=" טלפון " />
            </div>
          )}
          {!isShrink && (
            <Button
              bgColor={bgColors.orangeGradient}
              color={colors.white}
              borderRadius={30}
              fontWeight={600}
              fontSize={20}
              title=" חזרו אלי "
              hoveredBgColor={bgColors.azureGradient}
            />
          )}
        </form>
      )}
    </>
  );
}
