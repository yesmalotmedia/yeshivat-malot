import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";
import bgColors from "../../styles/bg-colors";

function YouTubeVideo2({ url }) {
  // Context
  console.log(url);

  const { colors } = useContext(AppContext);

  const styles = {
    container: {
      maxWidth: "100%",
      padding: 20,
      margin: "10px 0",
      borderRadius: "5px",
      backgroundColor: bgColors.white,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    videoWrapper: {
      position: "relative",
      width: "100%",
      paddingTop: "56.25%", // 16:9 aspect ratio
      height: 0,
      overflow: "hidden",
      borderRadius: "5px",
    },

    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },

    title: {
      fontSize: 22,
      color: colors.darkBlue,
      fontWeight: 600,
      textAlign: "center",
      marginTop: 10,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <iframe
          style={styles.iframe}
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeVideo2;
