import React, { useContext } from "react";
import { AppContext } from "../../App";
import Subscribe from "../../components/elements/Subscribe";

export default function ContactDetails({ title, lesson_name }) {
  const { colors, isMobile, responsive } = useContext(AppContext);

  const styles = {
    container: {
      width: responsive("35%", "80vmin", "90vmin"),
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 20,
      marginInline: "auto",
      height: "100%",
      padding: "50px 5px",
    },
    text: {
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: 18,
      padding: 10,
      lineHeight: 0.5,
      width: "100%",
    },
    headerText: {
      color: colors.darkBlue,
      fontWeight: 700, // עבה יותר מכותרות רגילות
      fontSize: 20, // גדול יותר מהטקסט הרגיל
      padding: 12,
    },
  };

  const contactDetails = [
    { text: "משרדי הישיבה", isHeader: true },
    { text: "טל: 04-9979708", isHeader: false },
    { text: "", isHeader: false },
    { text: "מיכאל גרין- עוזר ראש הישיבה", isHeader: true },
    { text: "טל: 058-774-1435", isHeader: false },
    { text: "", isHeader: false },
    { text: "כתובת", isHeader: true },
    { text: "רחוב פקיעין 1 , מעלות", isHeader: false },
  ];

  return (
    <div style={styles.container}>
      {contactDetails.map((detail, index) => (
        <div
          key={index}
          style={detail.isHeader ? styles.headerText : styles.text}
        >
          {detail.text}
        </div>
      ))}
      <br></br>
      <div style={{ width: "85%", height: 100, margin: "auto" }}>
        <Subscribe
          targetUrl={"https://chat.whatsapp.com/CoQxcKpjsBPALM93g24Y3k"}
          title={"עדכונים - ישיבת מעלות"}
        />
        
      </div>
    </div>
  );
}
