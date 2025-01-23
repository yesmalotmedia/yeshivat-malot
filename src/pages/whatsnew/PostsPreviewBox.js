import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function PostsPreviewBox({
  title,
  date,
  thumbnail,
  article,
  postId,
}) {
  const { colors, responsive, parsedNewsData } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  const styles = {
    mainSection: {
      gap: responsive("15px", "10px", "0"),
      width: responsive("60%", "80%", "90%"),
      marginInline: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
      marginTop: 30,
      cursor: "pointer",
    },
    textSection: {
      borderTopRightRadius: responsive("20px", "10px", "8px"),
      borderBottomRightRadius: responsive("20px", "10px", "8px"),
      height: responsive("300px", "210px", "170px"),
      width: responsive("50%", "60%", "60%"),
      background: colors.white,
      boxShadow: hover
        ? "rgba(0, 0, 0, 0.3) 0px 6px 15px"
        : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: "5px 10px",
      fontSize: "1vmax",
    },
    image: {
      objectFit: "fill",
      height: responsive("300px", "210px", "170px"),
      width: responsive("50%", "40%", "40%"),
      borderTopLeftRadius: responsive("20px", "10px", "8px"),
      borderBottomLeftRadius: responsive("20px", "10px", "8px"),
      boxShadow: hover
        ? "rgba(0, 0, 0, 0.3) 0px 6px 15px"
        : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    textTitle: {
      color: colors.darkBlue,
      fontSize: responsive("1.4rem", "1.2rem", "1.1rem"),
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "1.5vmax 0 1vmax 0",
      color: colors.grey,
    },
    tarikImg: {
      height: responsive("17px", "14px", "13px"),
      marginLeft: 10,
    },
    tarik: {
      fontSize: responsive("1rem", "0.9rem", "0.7rem"),
    },
    article: {
      marginBottom: "0.6vw",
      fontSize: responsive("1rem", "0.9rem", "0.8rem"),
      lineHeight: responsive("1.5rem", "1.3rem", "1rem"),
      maxHeight: responsive("160px", "80px", "50px"),
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: responsive(6, 4, 3),
      wordWrap: "break-word",
      overflowWrap: "break-word",
    },

    btn: {
      marginTop: responsive("0", "10px", "10px"),
      color: colors.orange,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: responsive("1.3rem", "1rem", "1rem"),
      cursor: "pointer",
      width: "auto",
      textDecoration: "none",
    },
    btnImg: {
      height: responsive("1rem", "0.8rem", "0.8rem"),
      paddingRight: "15px",
    },
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleTouchStart = () => setHover(true);

  return (
    <div
      style={styles.mainSection}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseLeave}
    >
      <div style={styles.textSection}>
        <h2 style={styles.textTitle}> {title} </h2>
        <div style={styles.tarikContainer}>
          <img style={styles.tarikImg} src="tarik.png" alt="date icon" />
          <p style={styles.tarik}>
            <span>{date}</span>
          </p>
        </div>
        <div
          style={styles.article}
          dangerouslySetInnerHTML={{ __html: article }}
        />
        <Link style={styles.btn} to={`/WhatsNew/${postId}`}>
          <span>להמשך קריאה</span>
          <img
            style={styles.btnImg}
            src="arrowLeft-orange.png"
            alt="arrow icon"
          />
        </Link>
      </div>
      <img style={styles.image} src={thumbnail} alt="thumbnail" />
    </div>
  );
}
