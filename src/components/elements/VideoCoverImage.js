import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";
import { Link } from "react-router-dom";

function VideoCoverImage({ url, videoId, title, rabbiName }) {
  console.log(title);

  // State
  const [isHovered, setIsHovered] = useState(false);
  // Context
  const { colors, responsive, isMobile } = useContext(AppContext);

  // Function to extract YouTube video ID from the URL
  const getYouTubeVideoId = (url) => {
    try {
      const urlParts = url?.split("/");
      const lastPart = urlParts[urlParts?.length - 1];
      const idWithParams = lastPart.split("?")[0];
      return idWithParams;
    } catch (error) {
      console.error("Error extracting YouTube video ID:", error);
      return null;
    }
  };

  const youTubeVideoId = getYouTubeVideoId(url);

  let thumbnailUrl;

  switch (rabbiName) {
    case "הרב ישי ויצמן":
      thumbnailUrl = "/harav-ishay-lesson.png";
      break;
    case "הרב יהושע ויצמן":
      thumbnailUrl = "/harav-yehoshua-vaitsman-lesson.png";
      break;

    default:
      thumbnailUrl = "/main-youtube-cover.png";
      break;
  }

  const styles = {
    container: {
      width: "100%",
      height: "auto",
      borderRadius: responsive(50, 30, 20),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      position: "relative",
      flexWrap: "wrap",
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },

    title: {
      fontSize: responsive("1rem", "1.6rem", "1rem"),
      lineHeight: 1,
      color: colors.white,
      fontWeight: 600,
      textAlign: "center",
      position: "absolute",
      top: "0",
      right: "0",
      width: "55%",
      height: "40%",
      maxHeight: "60%",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
      padding: 10,
    },
  };

  return (
    <div style={styles.container}>
      <Link style={styles.btn} to={`/BeitHamidrash/${videoId}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <picture>
            {" "}
            <img
              src={thumbnailUrl}
              alt="YouTube Video Thumbnail"
              style={styles.img}
              loading="lazy"
            />
          </picture>

          <div style={styles.title}>{title}</div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCoverImage;
