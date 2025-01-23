import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Filters() {
  const { colors } = useContext(AppContext);
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const styles = {
    container: {
      display: "flex",
      overflowX: "auto",
      padding: "10px 0",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",
      WebkitOverflowScrolling: "touch",
      maxWidth: "100%",
      marginBottom: "-15px", // Compensate for scrollbar space
    },
    innerContainer: {
      display: "flex",
      paddingBottom: "15px", // Padding to hide scrollbar
    },
    btn: {
      border: "none",
      padding: "10px 20px",
      margin: "0 10px",
      background: colors.white,
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      cursor: "pointer",
      borderRadius: 5,
      flexShrink: 0,
      whiteSpace: "nowrap",
      minWidth: "100px",
      textAlign: "center",
    },
    text: {
      fontSize: "1rem",
      padding: "0 10px",
      fontWeight: 500,
    },
    active: {
      background: colors.darkBlue,
      color: colors.white,
    },
    hideScrollbar: {
      scrollbarWidth: "none" /* Firefox */,
      "-ms-overflow-style": "none" /* IE and Edge */,
      "&::-webkit-scrollbar": {
        display: "none" /* Chrome, Safari, and Opera */,
      },
    },
  };

  return (
    <div style={{ ...styles.container, ...styles.hideScrollbar }}>
      <div style={styles.innerContainer}>
        <button
          style={{
            ...styles.btn,
            ...(activeButton === "all" && styles.active),
          }}
          onClick={() => handleButtonClick("all")}
        >
          <span
            style={{
              ...styles.text,
              ...(activeButton === "all" && styles.active),
            }}
          >
            הכל
          </span>
        </button>
        <button
          style={{
            ...styles.btn,
            ...(activeButton === "button1" && styles.active),
          }}
          onClick={() => handleButtonClick("button1")}
        >
          <span
            style={{
              ...styles.text,
              ...(activeButton === "button1" && styles.active),
            }}
          >
            הרב ????? ?????
          </span>
        </button>
        <button
          style={{
            ...styles.btn,
            ...(activeButton === "button2" && styles.active),
          }}
          onClick={() => handleButtonClick("button2")}
        >
          <span
            style={{
              ...styles.text,
              ...(activeButton === "button2" && styles.active),
            }}
          >
            הרב ????? ?????
          </span>
        </button>
        <button
          style={{
            ...styles.btn,
            ...(activeButton === "button3" && styles.active),
          }}
          onClick={() => handleButtonClick("button3")}
        >
          <span
            style={{
              ...styles.text,
              ...(activeButton === "button3" && styles.active),
            }}
          >
            ספרים לרכישה
          </span>
        </button>
        <button
          style={{
            ...styles.btn,
            ...(activeButton === "button4" && styles.active),
          }}
          onClick={() => handleButtonClick("button4")}
        >
          <span
            style={{
              ...styles.text,
              ...(activeButton === "button4" && styles.active),
            }}
          >
            ספרים בחינם
          </span>
        </button>
      </div>
    </div>
  );
}
