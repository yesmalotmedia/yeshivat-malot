import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";
import colors from "../../styles/colors";
import bgColors from "../../styles/bg-colors";
import getCategoryNameById from "../../assets/getCategoryNameById";
import { useNavigate } from "react-router-dom";

function YouTubeVideo({ url, index, title, category }) {
  const navigate = useNavigate();

  //context
  const { colors, isMobile, lessonsType, setlessonsType } =
    useContext(AppContext);

  const styles = {
    container: {
      width: isMobile ? "100%" : "30%",

      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroundColor: bgColors.white,
      padding: 20,

      margin: isMobile ? "10px 0" : 10,
      borderRadius: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    subContainer: {
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      width: "100%",
      margin: "auto",
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
    },
    img: {},
    title: {
      fontSize: 22,
      color: colors.darkBlue,
      fontWeight: 600,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <iframe
          width={"100%"}
          height={"85%"}
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={styles.title}>{title}</div>
      </div>

      <Button
        color={colors.white}
        bgColor={index === 2 ? bgColors.azureGradient : bgColors.orangeGradient}
        hoveredBgColor={bgColors.darkBlueGradient}
        title={`לכל שיעורי ${getCategoryNameById(category)}`}
        fontSize={20}
        fontWeight={500}
        borderRadius={50}
        width={"90%"}
        arrow={true}
      />
    </div>
  );
}

export default YouTubeVideo;
