import React, { useContext, useEffect, useState } from "react";
import TalmudMemuzagPrevewBox from "./TalmudMemuzagPrevewBox";
import { AppContext } from "../../App";
import colors from "../../styles/colors";

const TalmudMemuzagCollection = ({ filter }) => {
  const { isMobile, parsedMemuzagData } = useContext(AppContext);
  const [filteredLessons, setFilteredLessons] = useState([]);

  // פונקציה להסרת ניקוד

  // עדכון השיעורים המסוננים בכל פעם שהפילטר משתנה
  useEffect(() => {
    const filtered = parsedMemuzagData.filter((lesson) => {
      const matchesTalmud =
        filter.selectedTalmud === "הכל" ||
        lesson.talmud === filter.selectedTalmud;

      const matchesMasechet =
        filter.selectedMasechet === "הכל" ||
        lesson.masecet === filter.selectedMasechet;

      const matchesPerek =
        filter.selectedPerek === "הכל" || lesson.perek === filter.selectedPerek;

      const matchesDaf =
        filter.selectedDaf === "הכל" || lesson.daf === filter.selectedDaf;

      return matchesTalmud && matchesMasechet && matchesPerek && matchesDaf;
    });

    setFilteredLessons(filtered);
  }, [filter, parsedMemuzagData]);

  // styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: isMobile ? "100%" : "90%",
      maxWidth: 1200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
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
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}>שיעורים </div>
      </div>
      <div style={styles.lessonsContainer}>
        {filteredLessons.map((post) => (
          <TalmudMemuzagPrevewBox key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TalmudMemuzagCollection;
