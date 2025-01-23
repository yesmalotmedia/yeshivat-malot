import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";
import Subscribe from "./Subscribe";

const HeroSection = ({
  backgroundImage,
  title,
  subTitle,
  titleColor,
  btnTitle,
  isButton,
  isSubscribe,
  height,
  marginTop,
}) => {
  // Context
  const { colors, bgColors, responsive, animations } = useContext(AppContext);
  // state to control animation trigger
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Styles
  const styles = {
    heroSection: {
      backgroundImage: `url("${backgroundImage}")`,
      backgroundPosition: "center",
      backgroundSize: isVisible ? "110% 110%" : "100% 100%",
      transition: "background-size 3s ease-out", // Smooth zoom transition
      backgroundRepeat: "no-repeat",
      width: "100%",
      height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 30,
    },
    headerText: {
      marginTop,
    },
    title: {
      fontWeight: 600,
      fontSize: responsive("2.6rem", "2.4rem", "2.2rem"),
      textAlign: "center",
      color: titleColor,
      opacity: isVisible ? 1 : 0, // Apply the fade effect
      transition: "opacity 1.5s ease-out, transform 1.5s ease-out", // Animation transition settings
    },
    subTitle: {
      fontWeight: 600,
      fontSize: responsive("2rem", "1.8rem", "1.2rem"),
      textAlign: "center",
      color: colors.orange,
      transform: isVisible ? "translateY(0)" : "translateY(20px)", // Apply the slide-up effect
      transition: "opacity 1.5s ease-out, transform 1.5s ease-out", // Animation transition settings
    },
    button: {
      paddingTop: 30,
    },
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.headerText}>
        <h2 style={styles.title}>{title}</h2>
        <h4 style={styles.subTitle}>{subTitle}</h4>
      </div>
      <div style={styles.button}>
        {isButton && (
          <a
            href="https://www.trumot.net/Form/1564?media=wa"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure for external links
            style={{ textDecoration: "none" }} // Remove underline
          >
            <Button
              color={colors.white}
              title={btnTitle}
              bgColor={bgColors.orangeGradient}
              hoveredBgColor={bgColors.azureGradient}
              width={responsive("290px", "280px", "250px")}
              height={responsive("50px", "50px", "40px")}
              borderRadius={30}
              arrow={true}
              fontSize={responsive("2rem", "1.8rem", "1.6rem")}
              fontWeight={600}
            />
          </a>
        )}
        {isSubscribe && <Subscribe />}
      </div>
    </div>
  );
};

export default HeroSection;
