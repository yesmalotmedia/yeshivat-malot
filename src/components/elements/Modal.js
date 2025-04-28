import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function Modal() {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility
  const [isShrink, setIsShrink] = useState(false); // State to manage shrink

  const styles = {
    form: {
      background: isShrink ? colors.darkBlue : colors.darkBlue,
      width: isShrink ? (isMobile ? 70 : 100) : isMobile ? "40vmax" : 500,
      height: isShrink ? (isMobile ? 70 : 100) : isMobile ? "340px" : "",
      display: "flex",
      flexDirection: "column",
      padding: 30,
      position: "fixed",
      left: isShrink ? (isMobile ? 40 : 70) : isMobile ? "50%" : 300,
      transform: "translateX(-50%)",
      bottom: isShrink ? (isMobile ? 8 : 40) : isMobile ? 100 : 200,
      borderRadius: isShrink ? "50%" : 30,
      zIndex: 999,
      opacity: isVisible ? 1 : 0,
      transition: "all 0.3s",
      outline: ` ${colors.darkBlue} 2px solid`,
      border: "white 1px solid ",
    },

    label: {
      fontSize: isShrink ? (isMobile ? 14 : 16) : 30, // "בואו להיות" קטן יותר
      fontWeight: 400,
      color: colors.white,
      cursor: isShrink ? "pointer" : "auto",
      textAlign: "center",
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%", // מרכז אנכית
      flexDirection: "column", // מסדר את התוכן בשתי שורות
      whiteSpace: "nowrap", // מונע ירידת שורה
      lineHeight: 1,
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
      top: 15,
      right: 15,
      color: colors.white,
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
            בואו להיות{" "}
            <span style={{ fontSize: isShrink ? 18 : 37, fontWeight: "bold" }}>
              שותפים
            </span>
          </label>
          {!isShrink && (
            <div style={styles.inputContainer}>
              <input style={styles.input} type="text" placeholder=" שם " />
              <input style={styles.input} type="text" placeholder=" טלפון " />
            </div>
          )}
          {!isShrink && (
            <Button
              bgColor={bgColors.yellow}
              color={colors.darkBlue}
              borderRadius={30}
              fontWeight={600}
              fontSize={20}
              title=" חזרו אלי "
              hoveredBgColor={bgColors.azureGradient}
              width={"100%"}
            />
          )}
        </form>
      )}
    </>
  );
}
