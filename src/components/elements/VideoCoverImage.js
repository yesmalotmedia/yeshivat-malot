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
  isShort,
}) {
  // State
  const [isHovered, setIsHovered] = useState(false);
  // Context
  const { colors, responsive, isMobile } = useContext(AppContext);

  const shortThumbnailByRabbi = {
    "הרב מנשה וינר": "/shortHaravViner.png",
    "הרב מאיר בזק": "/shortHaravBazak.png",
    "הרב מיכאל אזרד": "/shortHaravAzrad.png",
  };

  const matchedThumbnail =
    isShort && rabbiName && shortThumbnailByRabbi[rabbiName]
      ? shortThumbnailByRabbi[rabbiName]
      : null;

  const thumbnailUrl =
    matchedThumbnail || (imgWidth === 120 ? "/default-cover.png" : thumbnail);

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
