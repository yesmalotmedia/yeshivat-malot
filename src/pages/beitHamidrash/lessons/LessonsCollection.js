import React, { useContext, useEffect, useState } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";
import { AppContext } from "../../../App";
import MobileFilter from "../MobileFilter";
import usefilterLessons from "../../../assets/dataTest/useFilteredLessons";
import LoadMore from "../../../components/elements/LoadMore";

const LessonsCollection = ({ lessonsType, setlessonsType }) => {
  const {
    isMobile,
    parsedData,
    videos,
    lessonsFilter,
    responsive,
    setlessonsFilter,
  } = useContext(AppContext);
  const [displayedLessons, setDisplayedLessons] = useState([]);
  const [visiblePostCount, setVisiblePostCount] = useState(10);
  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };

  // styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: "100%",
      maxWidth: 1200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      margin: "0 auto",
    },
    titleSection: {
      display: "flex",
      width: "80%",
      padding: "0 1%",
      justifyContent: "space-between",
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 10,
    },
    sortContainer: {
      width: "40%",
      display: "flex",
    },
    label: {
      width: "30%",
      lineHeight: 3,
      color: colors.azure,
      fontWeight: 500,
    },
    loadMoreContainer: {
      margin: "20px 0",
    },
  };

  // חישוב הלקחים הממוינים בעזרת ה-hook
  const filteredLessons = usefilterLessons(videos, lessonsFilter);

  useEffect(() => {
    if (filteredLessons) {
      setDisplayedLessons(filteredLessons.slice(0, visiblePostCount));
    }
  }, [filteredLessons, visiblePostCount]);

  const lessonsBoxesElements = displayedLessons?.map((video) => (
    <LessonPreviewBox key={video.id} video={video} />
  ));

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}>{lessonsFilter.category}</div>
      </div>
      {isMobile && <MobileFilter />}
      <div style={styles.lessonsContainer}>{lessonsBoxesElements}</div>
      <div style={styles.loadMoreContainer}>
        <LoadMore onClick={() => loadMorePosts(10)} />
      </div>
    </div>
  );
};

export default LessonsCollection;
