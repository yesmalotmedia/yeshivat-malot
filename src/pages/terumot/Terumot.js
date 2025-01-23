import React, { useContext } from "react";
import HeroSection from "../../components/elements/HeroSection";
import { AppContext } from "./../../App";
import terumotData from "../../data/terumotData";

export default function Terumot() {
  const { colors, responsive } = useContext(AppContext);

  const styles = {
    mainContainer: {
      marginInline: "auto",
      width: responsive("60%", "80%", "90%"),
    },
    title: {
      color: colors.darkBlue,
      fontSize: responsive("2.5rem", "2rem", "1.6rem"),
      marginTop: 40,
    },
    description: {
      fontSize: responsive("1.3rem", "1.2rem", "1.2rem"),
      lineHeight: responsive("2rem", "2rem", "1.7rem"),
      textAlign: "justify",
      marginTop: 30,
    },
    imgContainer: {
      marginTop: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: "100%",
      flexWrap: "wrap",
    },
    btn: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    img: {
      height: responsive("13vmax", "16vmax", "13vmax"),
      width: responsive("13vmax", "16vmax", "13vmax"),
      transition: "transform 0.3s ease-in-out",
    },
    text: {
      position: "absolute",
      fontSize: responsive("1.2vmax", "1.7vmax", "2vmax"),
      fontWeight: 700,
      color: colors.white,
      zIndex: 30,
      textShadow: "0px 0px 6px #000",
      textAlign: "center",
    },
  };

  const data = terumotData[0];

  // Event handlers for hover and touch effects
  const handleMouseEnter = (e) => {
    e.currentTarget.firstChild.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.firstChild.style.transform = "scale(1)";
  };

  const handleTouchStart = (e) => {
    e.currentTarget.firstChild.style.transform = "scale(1.1)";
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.firstChild.style.transform = "scale(1)";
  };

  return (
    <>
      <HeroSection
        title={"מוזמנים להיות חלק"}
        backgroundImage={"/heroTrumot.png"}
        subTitle={" ולהקדיש שיעור לזכות וברכה "}
        isSubscribe={false}
        titleColor={colors.white}
        height={responsive("60vmin", "60vmin", "80vmin")}
        marginTop={responsive(90, 95, 120)}
        isButton={true}
        btnTitle={"לתרומה מהירה"}
      />
      <div style={styles.mainContainer}>
        <h2 style={styles.title}>{data.title}</h2>
        <p style={styles.description}>{data.description}</p>
        <h2 style={styles.title}>{data.btnTitle}</h2>
        <div style={styles.imgContainer}>
          {data.options.map((option, index) => (
            <a
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div
                style={styles.btn}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  style={styles.img}
                  src={option.image}
                  alt={`image-${index}`}
                />
                <span style={styles.text}>{option.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
