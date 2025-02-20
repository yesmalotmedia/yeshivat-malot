import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import Notice from "./Notice";

export default function NoticeBoard({ title, titleStyle }) {
  const { colors, responsive, parsedNoticesData } = useContext(AppContext);
  const [visibleNotices, setVisibleNotices] = useState([]);

  useEffect(() => {
    if (!parsedNoticesData || parsedNoticesData.length === 0) return;

    // ממיינים ולוקחים 18 אחרונים
    const latestNotices = [...parsedNoticesData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 18);

    let index = 0;

    // פונקציה להחלפת 6 הודעות בכל מחזור
    const updateNotices = () => {
      setVisibleNotices(latestNotices.slice(index, index + 6));
      index = (index + 6) % latestNotices.length; // מחזוריות בין 18 ההודעות
    };

    updateNotices(); // הפעלה ראשונית

    const interval = setInterval(updateNotices, 5000); // מחליף כל 5 שניות

    return () => clearInterval(interval); // ניקוי ה-interval ברינדור מחדש
  }, [parsedNoticesData]);

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      backgroundImage: "url('/noticeBoardBg.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: responsive("40vw", "45vw", "60vw"),
      justifyContent: "center",
      alignItems: "center",
      gap: 0,
    },
    title: titleStyle,
  };

  return (
    <>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.container}>
        {visibleNotices.map((notice) => (
          <Notice
            key={notice.id}
            content={
              <span dangerouslySetInnerHTML={{ __html: notice.content }} />
            }
            type={notice.type}
          />
        ))}
      </div>
    </>
  );
}
