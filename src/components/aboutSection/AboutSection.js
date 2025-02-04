import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";
import aboutUsSectionData from "../../data/aboutUsSectionData";

const AboutSection = () => {
  const { colors, bgColors, pagesList, responsive, description } =
    useContext(AppContext);

  const bgImg = responsive(
    "aboutSectionImg.png",
    "mobile-bg-img-homepage-1.png",
    "mobile-bg-img-homepage-1.png"
  );

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
      color: colors.white,
      fontSize: responsive("3rem", "2.5rem", "2rem"),
      position: "absolute",
      fontWeight: 500,
      textAlign: "center",
      maxWidth: 400,
      marginTop: -5,

      top: responsive("380px", "-150px", "250px"),
    },
    description: {
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: responsive(50, 30, 20),
      padding: "5vw",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1.4vw", "1.3rem", "1rem"),
      lineHeight: 1.5,
      maxWidth: 750,
      zIndex: 3,
      textAlign: "justify",
      marginTop: responsive(0, 0, -350),
      marginLeft: responsive("15vw", 0, 0),
      marginRight: window.innerWidth > 1500 ? 300 : 0,
      transform: "translate(-300px ,-10px)",
      minWidth: responsive("50%", "80%", "90%"),
      maxWidth: responsive("50%", "80%", "90%"),
      // width: "50%",
    },
    bgImg: {
      position: "absolute",
      top: responsive(0, 130, 0),
      zIndex: 0,
      transform: responsive(
        "translateY(-20vw)",
        "translateY(-100vw)",
        "translateY(-90vw)"
      ),
      width: "100%",
      height: responsive("auto", "1000px", "100vh"),
    },
  };

  // const title = <div style={styles.title}>אודות הישיבה</div>;

  const bookImg = (
    <img src={"book-img.png"} style={styles.bookIcon} alt="book-img" />
  );

  return (
    <div style={styles.container}>
      {/* <div style={styles.titleSection}>
        {bookImg}
        <br />
        {title}
      </div> */}

      <div style={styles.description}>{aboutUsSectionData}</div>

      <img style={styles.bgImg} src={bgImg} alt="bg-img" />
    </div>
  );
};

export default AboutSection;
