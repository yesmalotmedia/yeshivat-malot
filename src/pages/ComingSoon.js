import React, { useContext } from "react";
import { AppContext } from "../App";

function ComingSoon(props) {
  const { colors, isMobile, responsive, parsedPublishData } =
    useContext(AppContext);

  const styles = {
    mainContainer: {
      width: "90%",
      marginTop: 100,
      height: "200px",

      display: "flex",
      justifyContent: "center",
    },
    title: {
      color: colors.darkBlue,
    },
  };
  return (
    <div style={styles.mainContainer}>
      <div style={styles.title}>העמוד בבניה יש למה לצפות :)</div>
    </div>
  );
}

export default ComingSoon;
