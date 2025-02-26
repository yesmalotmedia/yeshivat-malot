import React, { useContext, useEffect, useState } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import { AppContext } from "../../../App";
import MobileFilter from "../MobileFilter";
import usefilterLessons from "../../../assets/dataTest/useFilteredLessons";
import LoadMore from "../../../components/elements/LoadMore";
import { useInView } from "react-intersection-observer";
import LoaderAnimation from "../../../components/elements/LoaderAnimation";
import useStopScrollBeforeFooter from "../../../assets/useStopScrollBeforeFooter";
const LessonsCollection = ({ lessonsType, setlessonsType }) => {
  const { isMobile, videos, lessonsFilter, postsFetchNextPage, postsStatus } =
    useContext(AppContext);

  const [visiblePostCount, setVisiblePostCount] = useState(10);
  const [isFetching, setIsFetching] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // קריאה מתבצעת כאשר 50% מהכפתור בתוך התצוגה
    triggerOnce: false, // נוודא שזה קורה בכל פעם שהמשתמש מגיע לסוף
  });

  // חישוב השיעורים המסוננים
  const filteredLessons = usefilterLessons(videos, lessonsFilter);
  filteredLessons?.sort((a, b) => new Date(b.date) - new Date(a.date));
  useEffect(() => {
    if (inView && !isFetching) {
      setIsFetching(true); // למנוע קריאות כפולות
      postsFetchNextPage().finally(() => {
        setTimeout(() => setIsFetching(false), 500); // המתנה קטנה לפני ביטול הסטטוס
        window.scrollBy({ top: 0 }); // גלילה חלקה מעט למעלה
      });
    }
  }, [inView]);

  // useStopScrollBeforeFooter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          padding: "0 1%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: colors.darkBlue,
            fontWeight: 700,
            fontSize: 22,
            marginBottom: 10,
          }}
        >
          {lessonsFilter.category}
        </div>
      </div>
      {isMobile && <MobileFilter />}
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredLessons?.map((video) => (
          <LessonPreviewBox key={video.id} video={video} />
        ))}
      </div>
      <div style={{ margin: "20px 0" }}>
        {isFetching ? (
          <LoaderAnimation isLoading={isFetching} color={colors.orange} />
        ) : (
          // <div></div>
          <LoadMore onClick={() => postsFetchNextPage()} />
        )}
      </div>
    </div>
  );
};

export default LessonsCollection;
