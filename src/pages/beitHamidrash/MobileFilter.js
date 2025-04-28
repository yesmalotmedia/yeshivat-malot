import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import SideBarSearch from "./sideBarSearch/SideBarSearch";

export default function MobileFilter({ setLesson }) {
  const {
    responsive,
    colors,
    bgColors,
    isMobile,
    lessonsType,
    setlessonsType,
    selectedTopic,
    setSelectedTopic,
    selectedRabbi,
    setSelectedRabbi,
  } = useContext(AppContext);

  const [isToggle, setIsToggle] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => {
      const nextState = !prev;
      if (nextState) {
        document.body.classList.add("no-scroll");
        openFullscreen();
      } else {
        document.body.classList.remove("no-scroll");
        closeFullscreen();
      }
      return nextState;
    });
  };

  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  };

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement && elem.requestFullscreen) {
      elem
        .requestFullscreen()
        .catch((err) => console.error("Failed to open fullscreen:", err));
    }
  };

  const closeFullscreen = () => {
    const isInFullscreen =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;

    if (isInFullscreen) {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .catch((err) => console.error("Failed to exit fullscreen:", err));
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const styles = {
    container: {
      width: isMobile ? "100%" : "90%",
      display: "flex",
      flexDirection: "column",
      marginBottom: 20,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    btn: {
      border: `1px solid ${colors.darkBlue}`,
      height: 40,
      width: isMobile ? "100%" : 120,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "space-between",
      padding: "0 10px",
      fontSize: 17,
      fontWeight: 500,
      background: bgColors.lightAzure,
      color: colors.darkBlue,
      cursor: "pointer",
    },
    filterDropdown: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: colors.white,
      transition: "transform 0.5s ease-in-out",
      transform: isToggle ? "translateY(0)" : "translateY(100%)",
      zIndex: 1000,
    },
    filterTop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      padding: "0 20px",
      borderBottom: `1px solid ${colors.darkBlue}`,
      background: bgColors.white,
    },
    closeBtn: {
      fontSize: "8vw",
      cursor: "pointer",
      color: "grey",
    },
    sinunBtn: {
      background: "none",
      border: "none",
      fontSize: 20,
      fontWeight: 600,
      color: colors.darkBlue,
    },
    filterDate: {
      position: "absolute",
      top: 70,
      width: "100%",
      height: 300,
      background: "red", // אפשר לשנות בהמשך
    },
  };

  return (
    <>
      <div style={styles.filterDropdown}>
        <div style={styles.filterTop}>
          <button style={styles.sinunBtn}>סינון</button>
          <span style={styles.closeBtn} onClick={handleToggle}>
            ×
          </span>
        </div>

        <SideBarSearch
          setLesson={setLesson}
          handleToggle={handleToggle}
          lessonsType={lessonsType}
          setlessonsType={setlessonsType}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          selectedRabbi={selectedRabbi}
          setSelectedRabbi={setSelectedRabbi}
        />
      </div>

      {isDropdown && <div style={styles.filterDate}></div>}

      <div style={styles.container}>
        <div style={styles.btnContainer}>
          <div style={styles.btn} onClick={handleToggle}>
            <img src="/filter.svg" alt="Filter" style={{ marginRight: 10 }} />
            חפש שיעור
          </div>
        </div>
      </div>
    </>
  );
}
