import React, { useContext } from "react";
import { AppContext } from "../../App";

const Button = ({ imgSrc, title, isActive }) => {
  const { colors, responsive } = useContext(AppContext);
  
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      cursor: 'pointer',
    },
    ImgContainer: {
      position: "relative",
      height: responsive("9vmax", "12vmax", "12vmax"),
      width: responsive("9vmax", "12vmax", "12vmax"),
      borderRadius: "50%",
      border: `4px solid ${ colors.darkBlue}`,
      borderWidth: isActive ? "6px" : "4px", 
      background: "#FFF2E7",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: '10px',
      
    },
    img: {
      width: responsive("6vmax", "8vmax", "8vmax"),
    },
    title: {
      position: "absolute",
      bottom: "-20px",
      fontWeight: 600,
      color: colors.darkBlue,
      fontSize: responsive("1.3rem", "1.2rem", "1rem"),
      whiteSpace: "nowrap",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.ImgContainer}>
        <img style={styles.img} src={imgSrc} alt="selectIcon" />
      </div>
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default Button;