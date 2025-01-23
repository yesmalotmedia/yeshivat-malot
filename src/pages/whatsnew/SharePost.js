import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function SharePost() {
  const {responsive} = useContext(AppContext)
  const styles = {
    container: {
      textAlign: "left",
    },
    img: {
      height: responsive(40,50,30),
      margin: "20px 10px 60px 0",
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <img style={styles.img} src="/envelope.png" alt="Share via Email" />
      <img
        style={styles.img}
        src="/footerImages/whatsapp.png"
        alt="Share via WhatsApp"
      />
    </div>
  );
}
