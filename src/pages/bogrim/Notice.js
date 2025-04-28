import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Notice({ content, type, onClick, isPopup }) {
  const { colors, responsive } = useContext(AppContext);

  // הטיית המודעה באופן אקראי בין -3 ל-3 מעלות
  const rotation = Math.random() * 6 - 3;
  const styles = {
    container: {
      backgroundColor: type === "ברכות" ? colors.yellow : colors.white,
      color: type === "ברכות" ? colors.darkBlue : colors.darkBlue,
      padding: 12,
      width: isPopup ? "100%" : "25%", // שלוש בשורה
      height: isPopup ? "100%" : "38%",
      borderRadius: "0 0 0 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: isPopup
        ? responsive("2vw", "1.5vw", "4vw")
        : responsive("1.3vw", "1.5vw", "2.8vw"),
      boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
      margin: responsive(10, 7, 4),
      transform: `rotate(${rotation}deg)`, // הטייה אקראית קלה
      transition: "transform 0.3s ease-in-out", // מעברים חלקים
      positon: "relative",
      cursor: !isPopup ? "pointer" : "",
    },
    noticePin: {
      position: "absolute",
      top: 10,
      right: 10,
      width: "12%",
    },
  };
  const MAX_WORDS = 10; // מספר המילים המקסימלי במודעה
  const extractText = (htmlString) => {
    if (!htmlString) return ""; // אם ריק או לא מוגדר
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };

  const truncateText = (htmlString, maxWords) => {
    const text = extractText(htmlString);
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "... קרא עוד";
    }
    return text;
  };

  return (
    <div style={styles.container} onClick={onClick}>
      {/* <span
        dangerouslySetInnerHTML={{ __html: truncateText(content, MAX_WORDS) }}
      /> */}
      {isPopup ? content : truncateText(content, MAX_WORDS)}
      <img style={styles.noticePin} src="/noticePin.png" alt="noticePin" />
    </div>
  );
}
