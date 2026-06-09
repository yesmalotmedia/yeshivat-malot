import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function VideoCoverImage({
  url,
  videoId,
  title,
  rabbiName,
  thumbnail,
  isShort,
}) {
  const [isHovered, setIsHovered] = useState(false);
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

  const thumbnailUrl = matchedThumbnail || thumbnail;

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
      height: "160px", // גובה קבוע
      objectFit: "cover",
      borderRadius: "20px 20px 0 0",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  };

  return (
    <div style={styles.container}>
      <Link style={{ width: "100%" }} to={`/BeitHamidrash/${videoId}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <picture style={{ width: "100%", display: "block" }}>
            <img
              src={thumbnailUrl}
              alt="YouTube Video Thumbnail"
              style={styles.img}
              loading="lazy"
              onError={(e) => {
                const youtubeId = thumbnail?.match(/vi\/([^/]+)\//)?.[1];
                if (
                  youtubeId &&
                  e.target.src !==
                    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                ) {
                  e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }
              }}
            />
          </picture>
        </div>
      </Link>
    </div>
  );
}

export default VideoCoverImage;
