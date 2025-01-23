import React, { useContext } from "react";
import { AppContext } from "../../App";

function TanksMessage({ msg, color }) {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    successMassage: {
      padding: 10,
      fontSize: isMobile ? "4vmin" : "30px",
      color,
      textAlign: "center",
    },
  };
  return <div style={styles.successMassage}> {msg} </div>;
}

export default TanksMessage;
