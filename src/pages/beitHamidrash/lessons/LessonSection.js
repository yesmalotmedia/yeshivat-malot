import React, { useContext } from "react";
import { AppContext } from "../../../App";
import AudioPlayer from "../../../components/AudioPlayer/AudioPlayer";
import playerVars from "../../../components/AudioPlayer/PlayerVars";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import getCategoryNameById from "../../../assets/getCategoryNameById";
import extractYoutubeCoverByVideoId from "../../../assets/extractYoutubeCoverByVideoId";
import LoaderAnimation from "../../../components/elements/LoaderAnimation";
import Form from "../../contact/Form";
import MobileFilter from "../MobileFilter";

export default function LessonSection({ lesson, setLesson }) {
  const { colors, responsive, displayedVideos, useCategoryNameById, isMobile } =
    useContext(AppContext);
  console.log(lesson);

  const mainCategory = useCategoryNameById(lesson?.categories[3]);
  const subCategory = useCategoryNameById(lesson?.categories[2]);
  if (!displayedVideos) {
    console.error("Videos not available in context");
    return (
      <LoaderAnimation isLoading={!displayedVideos} color={colors.orange} />
    );
  }

  const isVideo = lesson?.contentType.includes("video");
  const isAudio = lesson?.contentType.includes("audio");
  const isText = lesson?.contentType.includes("text");
  console.log(lesson);

  if (!lesson) {
    console.error(`No video found with id: ${lesson}`);
    return <LoaderAnimation isLoading={!lesson} color={colors.orange} />;
  }

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
      {/* {isMobile && <MobileFilter setLesson={setLesson} />} */}
      <div style={styles.headerSection}>
        <p style={styles.breadcrumb}>
          <span>{subCategory}</span> / <span>{mainCategory}</span>
        </p>
        <h2 style={styles.nameOfRav}>{lesson.rabbiName}</h2>
        <h1 style={styles.nameOfShiur}>{lesson.title}</h1>
      </div>

      <div style={styles.videoSection}>
        <div style={styles.timeAndTimeContainer}>
          <span style={styles.dateAndTimeText}>{lesson.date}</span>
        </div>
        <div style={styles.dedicate}>{lesson.dedicatedTo}</div>
        {<YouTubeVideo2 url={lesson.url} index={lesson.key} />}
      </div>

      {
        <div style={styles.audioContainer}>
          <div style={styles.playerContainer}>
            <div style={styles.topText}>
              <p style={styles.title}>{lesson.title}</p>
              <p style={styles.date}>{lesson.date}</p>
            </div>
            <AudioPlayer
              key={lesson.url}
              audioUrl={lesson.url}
              shouldPlay={false}
              playerVars={playerVars}
            />
          </div>
          <div style={styles.thumbContainer}>
            <img
              style={styles.audioThumbnail}
              src={extractYoutubeCoverByVideoId(lesson.url)}
              alt="Audio Thumbnail"
            />
          </div>
        </div>
      }

      {isText && (
        <div style={styles.descriptionContainer}>
          <div
            style={styles.description}
            dangerouslySetInnerHTML={{ __html: lesson.article }}
          />
          <h2 style={styles.nameOfRav}></h2>
          <br />
        </div>
      )}
    </div>
  );
}
