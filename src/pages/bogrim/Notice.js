import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Notice({ content, noticeType }) {
  const { colors } = useContext(AppContext);

  // הטיית המודעה באופן אקראי בין -3 ל-3 מעלות
  const rotation = Math.random() * 6 - 3;

  const styles = {
    container: {
      backgroundColor:
        noticeType === "congratulations" ? colors.yellow : colors.white,
      color:
        noticeType === "congratulations" ? colors.darkBlue : colors.darkBlue,
      padding: 12,
      width: "25%", // שלוש בשורה
      height: "40%",
      borderRadius: "0 0 0 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.3vw",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
      margin: "10px", // ריווח אחיד
      transform: `rotate(${rotation}deg)`, // הטייה אקראית קלה
      transition: "transform 0.3s ease-in-out", // מעברים חלקים
      positon: "relative",
    },
    noticePin: {
      position: "absolute",
      top: 10,
      right: 10,
      width: "12%",
    },
  };

  return (
    <div style={styles.container}>
      {content}
      <img style={styles.noticePin} src="/noticePin.png" alt="noticePin" />
    </div>
  );
}
