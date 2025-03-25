import React, { useContext } from "react";
import { AppContext } from "../../App";

function ModalBg({ setIsModalBg, onClick }) {
  //context
  const {
    pagesList,
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
  } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(34, 34, 34, 0.5)",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 800,
    },
  };
  return <div onClick={onClick} style={styles.container}></div>;
}

export default ModalBg;
