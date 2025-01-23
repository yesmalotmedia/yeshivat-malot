import React, { useContext } from "react";
import { AppContext } from "../../../App";
import AudioPlayer from "../../../components/AudioPlayer/AudioPlayer";
import playerVars from "../../../components/AudioPlayer/PlayerVars";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import getCategoryNameById from "../../../assets/getCategoryNameById";
import extractYoutubeCoverByVideoId from "../../../assets/extractYoutubeCoverByVideoId";
import LoaderAnimation from "../../../components/elements/LoaderAnimation";
import Form from "../../contact/Form";

export default function LessonSection({ videoId }) {
  const { colors, responsive, videos, useCategoryNameById } =
    useContext(AppContext);
  const video = videos?.find((video) => video?.id == videoId);
  const mainCategory = useCategoryNameById(video?.categories[0]);
  const subCategory = useCategoryNameById(video?.categories[1]);
  if (!videos) {
    console.error("Videos not available in context");
    return <LoaderAnimation isLoading={!videos} color={colors.orange} />;
  }

  const isVideo = video?.contentType.includes("video");
  const isAudio = video?.contentType.includes("audio");
  const isText = video?.contentType.includes("text");

  if (!video) {
    console.error(`No video found with id: ${videoId}`);
    return <LoaderAnimation isLoading={!video} color={colors.orange} />;
  }

  // const mainCategory = getCategoryNameById(video.categories[0]);
  // const subCategory = getCategoryNameById(video.categories[1]);

  const styles = {
    container: {
      textAlign: "right",
      width: "100%",
    },
    headerSection: {
      width: "100%",
    },
    breadcrumb: {
      color: colors.grey,
      fontWeight: 500,
      paddingBottom: 20,
    },
    nameOfRav: {
      color: colors.azure,
    },
    nameOfShiur: {
      color: colors.darkBlue,
      padding: "7px 0",
    },
    timeAndTimeContainer: {
      width: responsive("100%", "100%", "100%"),
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    icon: {
      height: 20,
      width: 20,
    },
    dateAndTimeText: {
      width: "100%",
      padding: "0 10px",
      fontWeight: 400,
      color: colors.grey,
    },
    descriptionContainer: {
      marginTop: 20,
      width: responsive("100%", "70%", "90%"),
      marginInline: "auto",
    },
    description: {
      textAlign: "justify",
      lineHeight: "1.9rem",
      width: "100%",
    },
    audioContainer: {
      border: "1px solid #ccc",
      borderRadius: 20,
      marginTop: 20,
      display: "flex",
      flexDirection: responsive("row", "column-reverse", "column-reverse"),
      alignItems: "center",
      justifyContent: responsive("flex-end", "center", "center"),
      width: "100%",
    },
    playerContainer: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 20px",
    },
    thumbContainer: {
      marginTop: responsive(0, 10, 10),
      marginLeft: responsive(20, 0, 0),
      height: 120,
      width: 120,
      borderRadius: 20,
      overflow: "hidden",
    },
    audioThumbnail: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    topText: {
      marginRight: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: responsive("flex-start", "center", "center"),
      justifyContent: responsive("flex-start", "center", "center"),
      marginBottom: 10,
    },
    title: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: responsive("flex-start", "center", "center"),
      justifyContent: responsive("flex-start", "center", "center"),
    },
    date: {
      color: colors.grey,
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <p style={styles.breadcrumb}>
          <span>{mainCategory}</span> / <span>{subCategory}</span>
        </p>
        <h2 style={styles.nameOfRav}>{video.rabbiName}</h2>
        <h1 style={styles.nameOfShiur}>{video.title}</h1>
      </div>

      <div style={styles.videoSection}>
        <div style={styles.timeAndTimeContainer}>
          <span style={styles.dateAndTimeText}>{video.date}</span>
          <img style={styles.icon} src="/time.png" alt="time icon" />
          <span style={styles.dateAndTimeText}> זמן קריאה: 8 דק’ </span>
        </div>
        <div style={styles.dedicate}>{video.dedicatedTo}</div>
        {isVideo && <YouTubeVideo2 url={video.url} index={video.key} />}
      </div>

      {isAudio && (
        <div style={styles.audioContainer}>
          <div style={styles.playerContainer}>
            <div style={styles.topText}>
              <p style={styles.title}>{video.title}</p>
              <p style={styles.date}>{video.date}</p>
            </div>
            <AudioPlayer
              key={video.url}
              audioUrl={video.url}
              shouldPlay={false}
              playerVars={playerVars}
            />
          </div>
          <div style={styles.thumbContainer}>
            <img
              style={styles.audioThumbnail}
              src={extractYoutubeCoverByVideoId(video.url)}
              alt="Audio Thumbnail"
            />
          </div>
        </div>
      )}

      {isText && (
        <div style={styles.descriptionContainer}>
          <div
            style={styles.description}
            dangerouslySetInnerHTML={{ __html: video.article }}
          />
          <h2 style={styles.nameOfRav}></h2>
          <br />

          <Form
            title={"מעוניינים להגיב על השיעור? שלחו לנו הודעה"}
            lesson_name={video.title}
          />
        </div>
      )}
    </div>
  );
}
