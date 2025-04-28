import React, { useContext } from "react";
import { AppContext } from "../../App";
import { transform } from "framer-motion";

function Popup({ children }) {
  //context
  const {
    pagesList,
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
    responsive,
  } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      width: responsive("25vw", "40vw", "70vw"),
      height: responsive("25vw", "40vw", "70vw"),
      backgroundColor: colors.white,
      color: colors.white,
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
    },
  };
  return <div style={styles.container}>{children}</div>;
}

export default Popup;
