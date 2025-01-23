import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function LessonPreviewBox({ post }) {
  const { talmudm, masecet, perek, daf, page, body, id } = post;
  const { colors, isMobile } = useContext(AppContext);
  const styles = {
    container: {
      flex: isMobile ? "1 1 calc(48% - 20px)" : "1 1 calc(30% - 40px)",
      boxSizing: "border-box",
      margin: "10px",
      border: `1px solid ${colors.azure}`,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: 15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: colors.white,
      maxWidth: "300px",
      minHeight: 230,
    },

    masecet: {
      color: colors.darkBlue,
      fontSize: isMobile ? "2.4vmax" : "1.2vw",
      fontWeight: 500,
    },

    location: {
      fontSize: isMobile ? "2.6vmax" : "1.4vw",
      color: colors.darkBlue,
      fontWeight: 700,
    },
    mainImg: {
      width: "60%",
      margin: "0 auto",
    },
    btnImage: {
      height: isMobile ? "3vmax" : "1.5vw",
      width: isMobile ? "3vmax" : "1.5vw",
    },

    btn: {
      display: "flex",
      justifyContent: "center",
      padding: isMobile ? "1vmax 2vmax" : "0.9vw 0.9vw",
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: isMobile ? "2vmax" : "0.9vw",
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: "pointer",
    },
    btnText: {
      fontSize: isMobile ? "2.2vmax" : "1.1vw",
      marginRight: 20,
    },
  };

  //functions

  return (
    <div style={styles.container}>
      <img style={styles.mainImg} src="/talmudMemuzag1.png" />
      <div>
        {" "}
        <div style={styles.masecet}>{masecet}</div>
        <div style={styles.location}>
          {" "}
          {`פרק ${perek} דף ${daf} עמוד ${page} `}
        </div>
      </div>

      <Link style={{ textDecoration: "none" }} to={`/TalmudHaMemuzag/${id}`}>
        <div style={styles.btn}>
          <img style={styles.btnImage} src="/read.png" />
          <div style={styles.btnText}>לעיון</div>
        </div>
      </Link>
    </div>
  );
}
