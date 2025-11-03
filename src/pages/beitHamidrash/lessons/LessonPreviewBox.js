import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import { Link } from "react-router-dom";
import VideoCoverImage from "../../../components/elements/VideoCoverImage";
import { useCategoryNameById } from "../../../assets/useCategories";

export default function LessonPreviewBox({ video }) {
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
  console.log(video.categories);

  useEffect(() => {
    if (video.thumbnail) {
      const img = new Image();
      img.src = video.thumbnail;
      img.onload = () => {
        setImgWidth(img.width);
      };
    }
  }, [video.thumbnail]);

  const styles = {
    container: {
      boxSizing: "border-box",
      // margin: "10px",
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      // display: "flex",
      // height: responsive(320, 400, "70vw"),
      minHeight: 320,
      maxHeight: 330,
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: colors.white,
      width: responsive(260, "30vw", "45vw"),
      minWidth: 280,
      transform: isHovered ? "translateY(-10px)" : "translateY(0)", // Move up on hover
      transition: "transform 0.3s ease-out", // Smooth transition
      cursor: "pointer",
      position: "relative",
    },
    thumbnail: {
      height: "50%",
      width: "100%",
      border: `3px solid ${colors.darkBlue}`,
      boxSizing: "border-box",
      borderRadius: 10,
      margin: "auto",
    },
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: colors.darkBlue,
      padding: 10,
    },
    title: {
      fontSize: "1rem",
      lineHeight: 1.3,
      fontWeight: "bold",
      overflowWrap: "break-word",
    },
    subTitle: {
      fontSize: responsive("1.1rem", "1.1rem", "1rem"),
      fontWeight: 400,
      lineHeight: 1.4,
    },
    categories: {
      fontSize: responsive("0.9rem", "1rem", "0.8rem"),
      fontWeight: 400,
      lineHeight: 1.4,
    },
    date: {
      fontSize: responsive("0.9rem", "1rem", "0.9rem"),
      fontWeight: 400,
    },

    bottomSection: {
      textAlign: "right",
      color: colors.darkBlue,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      gap: 10,
      position: "absolute",
      bottom: 15,
      left: "50%",
    },
    btn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: responsive("0.5vw 0.9vw", "1vmax 2vmax", "1vmax 2vmax"),
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: responsive("0.9vw", "1rem", "2vmax"),
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    icon: {
      height: responsive("1.5vw", "3vmax", "3vmax"),
      width: responsive("1.5vw", "3vmax", "3vmax"),
    },
    dateContainer: {
      display: "flex",
      paddingTop: 5,
      position: "absolute",
      bottom: 14,
      left: 12,
      color: colors.grey,
      alignItems: "center",
      width: "90%",
      justifyContent: "space-between",
    },
    btn: {
      border: "none",
      textDecoration: "none",
    },
  };

  //functions
  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <h2>{video.title}</h2>
    //   <div>{video.id}</div>
    //   <br></br>
    // </div>

    <Link style={styles.btn} to={`/BeitHamidrash/${video.id}`}>
      <div
        style={styles.container}
        onMouseEnter={() => setIsHovered(true)} // Trigger hover state
        onMouseLeave={() => setIsHovered(false)} // Reset hover state
      >
        {/* <YouTubeVideo2 url={video.url} index={video.key} /> */}
        {
          <VideoCoverImage
            url={video.url}
            index={video.key}
            videoId={video.id}
            title={video.title}
            rabbiName={video.rabbiName}
            thumbnail={video.thumbnail}
            imgWidth={imgWidth}
            isShort={video.isShort}
          />
        }
        <div style={styles.description}>
          <div style={{ width: "90%" }}>
            <h2 style={styles.title}> {video.title}</h2>
            <h2 style={styles.subTitle}> {video.rabbiName}</h2>
            <h2 style={styles.categories}>
              {video?.categories
                ?.slice(1, 4) // קטגוריות 1 עד 3
                .filter(Boolean) // מסנן null/undefined
                .map((cat) => cat.name)
                .join(" / ")}
            </h2>
          </div>

          <div style={styles.dateContainer}>
            {" "}
            <div style={styles.date}>{video.date}</div>
            <div style={styles.date}>{video.heDate}</div>
          </div>
        </div>
        {/* <div style={styles.bottomSection}>
          <div style={styles.btnContainer}>
            {video.contentType.includes("video") && (
              <img style={styles.icon} src="watch.png" alt="watch"></img>
            )}
            {video.contentType.includes("audio") && (
              <img style={styles.icon} src="listen.png" alt="listen"></img>
            )}
            {video.contentType.includes("text") && (
              <img style={styles.icon} src="read.png" alt="read"></img>
            )}
          </div>
        </div> */}
      </div>
    </Link>
  );
}
