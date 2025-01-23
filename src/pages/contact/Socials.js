import React, { useContext } from "react";
import { AppContext } from "../../App";
export default function Socials() {
  const { colors, responsive } = useContext(AppContext);
  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      marginBottom: 20,
      cursor: "pointer",
    },
    img: {
      height: responsive("50px", "50px", "40px"),
    },
    label: {
      paddingRight: 30,
      color: colors.darkBlue,
      fontSize: 20,
    },
  };

  //functions
  const handleCallClick = () => {
    window.location.href = "tel:+972526146659"; // Correct phone number format
  };
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/972526146659"; // WhatsApp link format
  };
  const handleYoutubeClick = () => {
    window.location.href = "https://www.youtube.com/@tsadkoyahdav"; // WhatsApp link format
  };
  return (
    <>
      <div style={styles.wrapper} onClick={handleCallClick}>
        <img style={styles.img} src="footerImages/call.png" alt="Call" />
        <p style={styles.label}>052-6146659</p>
      </div>
      <div style={styles.wrapper} onClick={handleWhatsAppClick}>
        <img
          style={styles.img}
          src="footerImages/whatsapp.png"
          alt="WhatsApp"
        />
        <p style={styles.label}>052-6146659</p>
      </div>
      {/* <div style={styles.wrapper}>
        <img style={styles.img} src="footerImages/facebook.png"></img>
        <p style={styles.label}> </p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="footerImages/instagram.png"></img>
        <p style={styles.label}> </p>
      </div> */}
      <div style={styles.wrapper} onClick={handleYoutubeClick}>
        <img style={styles.img} src="footerImages/youtube.png"></img>
        <p style={styles.label}>שיעורי צדקו יחדיו ביוטיוב</p>
      </div>
    </>
  );
}
