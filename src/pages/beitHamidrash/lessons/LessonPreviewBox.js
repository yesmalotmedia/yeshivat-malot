import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import { Link } from "react-router-dom";
import VideoCoverImage from "../../../components/elements/VideoCoverImage";

export default function LessonPreviewBox({ video }) {
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imgWidth, setImgWidth] = useState(0);
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
      width: responsive(260, 400, "70vw"),
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
      fontSize: `max(${responsive("1.2vw", "1.6rem", "1.3rem")}, 1.2rem)`,
      paddingTop: 5,
    },
    subTitle: {
      fontSize: `max(${responsive("1.3vw", "1.5rem", "1.3rem")}, 1.1rem)`,
      paddingBottom: 10,
      fontWeight: 400,
    },

    date: {
      fontSize: responsive("0.8rem", "1.2rem", "1rem"),
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
      color: colors.grey,
      alignItems: "center",
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
          />
        }
        <div style={styles.description}>
          <div style={{ width: "90%" }}>
            <h2 style={styles.title}> {video.title}</h2>
            <h2 style={styles.subTitle}> {video.rabbiName}</h2>
          </div>

          <div>
            {" "}
            <h3 style={styles.date}>{video.date}</h3>
            <h3 style={styles.date}>{video.heDate}</h3>
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
