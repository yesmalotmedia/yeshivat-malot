import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";

const DailyText = () => {
  // context
  const { colors, responsive, dailyTextsData } = useContext(AppContext);

  // states
  const [currentText, setCurrentText] = useState(0);
  const screenWidth = window.innerWidth;

  // styles
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: 600,
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: screenWidth < 1400 ? "translateY(-150px)" : "translateY(50px)",
    },
    textContainer: { padding: responsive(300, 60, 20) },
    text: {
      marginTop: 50,
      color: colors.darkBlue,
      fontSize: responsive("1.9rem", "1.7rem", "1.4rem"),
      fontWeight: 600,
      animation: "fadeInOut 10s infinite",
      textAlign: "center",
    },
    textSource: {
      textAlign: "center",
      color: colors.darkBlue,
      fontWeight: 300,
      fontSize: responsive("1.9rem", "1.7rem", "1.4rem"),
      animation: "fadeInOut 10s infinite",
    },
    bgImg: {
      width: responsive("70%", "70%", "100%"),
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: -10,
    },
  };

  // functions
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % dailyTextsData.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [dailyTextsData.length]);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <img style={styles.bgImg} src="bg-book.png" alt="bg-book" />
      <div style={styles.textContainer}>
        <div style={styles.text}>{dailyTextsData[currentText].text}</div>
        <div style={styles.textSource}>
          {dailyTextsData[currentText].source}
        </div>
      </div>
    </div>
  );
};

export default DailyText;
