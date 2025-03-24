import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";
import { Link } from "react-router-dom";
import shadow from "../../styles/shadows";
import { transform } from "framer-motion";
function VideoCoverImage({
  url,
  videoId,
  title,
  rabbiName,
  thumbnail,
  imgWidth,
}) {
  // State
  const [isHovered, setIsHovered] = useState(false);
  // Context
  const { colors, responsive, isMobile } = useContext(AppContext);

  // // Function to extract YouTube video ID from the URL
  // const getYouTubeVideoId = (url) => {
  //   try {
  //     const urlParts = url?.split("/");
  //     const lastPart = urlParts[urlParts?.length - 1];
  //     const idWithParams = lastPart.split("?")[0];
  //     return idWithParams;
  //   } catch (error) {
  //     console.error("Error extracting YouTube video ID:", error);
  //     return null;
  //   }
  // };

  // const youTubeVideoId = getYouTubeVideoId(url);

  let thumbnailUrl = imgWidth == 120 ? "/default-cover.png" : thumbnail;

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
      borderRadius: "20px 20px 0 0 ",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
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

          {/* <div style={styles.title}>{title}</div> */}
        </div>
      </Link>
    </div>
  );
}

export default VideoCoverImage;
