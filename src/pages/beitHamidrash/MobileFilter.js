import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import SideBarSearch from "./sideBarSearch/SideBarSearch";

export default function MobileFilter() {
  const {
    responsive,
    colors,
    bgColors,
    isMobile,
    videos,
    categories,
    loadingCategories,
    lessonsType,
    setlessonsType,
    setlessonsFilter,
    lessonsFilter,
    loadingPosts,
    selectedTopic,
    setSelectedTopic,
    selectedRabbi,
    setSelectedRabbi,
  } = useContext(AppContext);
  const [isToggle, setIsToggle] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (!isToggle) {
      document.body.classList.add("no-scroll");
      openFullscreen();
    } else {
      document.body.classList.remove("no-scroll");
      closeFullscreen();
    }
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const openFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      // IE/Edge
      elem.msRequestFullscreen();
    }
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE/Edge
      document.msExitFullscreen();
    }
  };

  const styles = {
    container: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      marginBottom: 20,
    },
    btncontainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    filter: {
      color: colors.azure,
      fontSize: 18,
      fontWeight: 500,
      textAlign: "left",
      paddingLeft: 60,
    },
    btn: {
      border: `1px solid ${colors.darkBlue}`,
      height: 40,
      width: 120,
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
      fontSize: 17,
      fontWeight: 500,
      cursor: "pointer",
    },
    btnWithGrayText: {
      color: "grey",
    },
    btnWithBckground: {
      background: bgColors.lightAzure,
      color: colors.darkBlue,
    },
    filterDropdown: {
      position: "fixed",
      bottom: 0,
      top: 0,
      width: "100%",
      height: "100vh",
      transition: "transform 0.5s ease-in-out",
      transform: isToggle ? "translateY(0)" : "translateY(100%)",
      zIndex: 1000,
    },
    filterTop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 50,
      background: colors.white,
      padding: "15px 40px 15px 40px",
    },
    closeBtn: {
      fontSize: "10vw",
      cursor: "pointer",
      color: "grey",
    },
    sinunBtn: {
      border: "none",
      background: "none",
      color: colors.darkBlue,
      fontSize: 18,
      fontWeight: 600,
    },
    filterDate: {
      position: "absolute",
      marginTop: 70,
      width: "100%",
      height: 300,
      background: "red",
    },
  };

  return (
    <>
      <style>
        {`
          .no-scroll {
            overflow: hidden;
          }
        `}
      </style>

      <div style={styles.filterDropdown}>
        <div style={styles.filterTop}>
          <button style={styles.sinunBtn}>סינון</button>
          <span style={styles.closeBtn} onClick={handleToggle}>
            ×
          </span>
        </div>

        <SideBarSearch
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
        <div style={styles.btncontainer}>
          <div
            style={{ ...styles.btnWithBckground, ...styles.btn }}
            onClick={handleToggle}
          >
            <img src="/filter.svg" alt="Filter" /> חפש שיעור
          </div>
        </div>
      </div>
    </>
  );
}
