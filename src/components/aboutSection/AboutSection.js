import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";
import aboutUsSectionData from "../../data/aboutUsSectionData";

const AboutSection = () => {
  const { colors, bgColors, pagesList, responsive, description } =
    useContext(AppContext);

  const bgImg = responsive(
    "aboutSectionImg.png",
    "aboutSectionImg.png",
    "aboutSectionImg.png"
  );

  const mobileMarginTop = Math.max(-window.innerWidth * 0.42, -210); // לדוגמה -42vw אבל לא יותר מ־180px למטה

  const styles = {
    container: {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: responsive("row", "column", "column"),
      justifyContent: "center",
      zIndex: -1,
      alignItems: "center",
      gap: "10vw",
    },
    titleSection: {
      position: "relative",
      zIndex: 2,
      width: responsive("30%", "40%", "70%"),
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      whiteSpace: responsive("nowrap", "", ""),
      height: "600px",
      top: responsive("calc( 12vw - 300px)", "3vw", "-150px"),
    },
    bookIcon: {
      width: responsive("180px", "150px", "50%"),
      marginRight: 0,
      marginTop: -100,
      position: "absolute",
      top: responsive("380px", "-160px", "250px"),
    },
    title: {
      fontSize: responsive("3rem", "1.7rem", "1.7rem"),
      fontWeight: 700,
      textAlign: "center",
      margin: "auto",

      top: responsive("380px", "-150px", "250px"),
    },

    description: {
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: responsive(50, 30, 20),
      padding: responsive("5vw", "6wv", "8vw"),
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: responsive("1.5vw", "1.3rem", "0.9rem"),
      lineHeight: 1.5,
      maxWidth: 750,
      zIndex: 3,
      textAlign: "justify",
      marginTop: responsive(0, -250, `${mobileMarginTop}px`),
      marginLeft: responsive("15vw", 0, 0),
      marginRight: window.innerWidth > 1500 ? 300 : 0,
      marginBottom: responsive(0, 0, 50),
      transform: responsive(
        "translate(-300px ,-10px)",
        "",
        "translate(0 ,100px)"
      ),
      minWidth: responsive("50%", "80%", "80%"),
      maxWidth: responsive("50%", "80%", "80%"),
      // width: "50%",
    },
    bgImg: {
      position: "absolute",
      top: responsive(0, "20vw", "12vw"),
      zIndex: 0,
      transform: responsive(
        "translateY(-20vw)",
        "translateY(-100vw)",
        "translateY(-90vw)"
      ),
      width: "100%",
      height: responsive("auto", "70vw", "75vw"),
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.description}>
        <div style={styles.title}>חזון הישיבה</div>
        {aboutUsSectionData}
      </div>

      <img style={styles.bgImg} src={bgImg} alt="bg-img" />
    </div>
  );
};

export default AboutSection;
