import React, { useContext } from "react";
import { AppContext } from "../../App";
import Notice from "./Notice";

export default function NoticeBoard({ title, titleStyle }) {
  const { colors } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      backgroundImage: "url('/noticeBoardBg.png')",
      backgroundSize: "90%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: "60vw",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
    },
    title: titleStyle,
  };

  const notices = [
    {
      id: 1,
      content: "מזל טוב! שיהיה המון אושר ושפע ברכה!",
      noticeType: "congratulations",
    },
    {
      id: 2,
      content: "איחולים חמים לרגל האירוע המשמח! שתזכו לשפע ברכות!",
      noticeType: "congratulations",
    },
    {
      id: 3,
      content: "משתתפים בצערכם. שלא תדעו עוד צער.",
      noticeType: "condolences",
    },
    {
      id: 4,
      content: "תהא נשמתו צרורה בצרור החיים. המקום ינחם אתכם.",
      noticeType: "condolences",
    },
    {
      id: 5,
      content: "שולחים חיבוק חם וניחומים. יהי זכרו ברוך.",
      noticeType: "condolences",
    },
    {
      id: 6,
      content: "מזל טוב לרגל השמחה! שתזכו לרוב נחת ואור!",
      noticeType: "congratulations",
    },
    {
      id: 1,
      content: "מזל טוב! שיהיה המון אושר ושפע ברכה!",
      noticeType: "congratulations",
    },
    {
      id: 2,
      content: "איחולים חמים לרגל האירוע המשמח! שתזכו לשפע ברכות!",
      noticeType: "congratulations",
    },
    {
      id: 3,
      content: "משתתפים בצערכם. שלא תדעו עוד צער.",
      noticeType: "condolences",
    },
    {
      id: 4,
      content: "תהא נשמתו צרורה בצרור החיים. המקום ינחם אתכם.",
      noticeType: "condolences",
    },
    {
      id: 5,
      content: "שולחים חיבוק חם וניחומים. יהי זכרו ברוך.",
      noticeType: "condolences",
    },
    {
      id: 6,
      content: "מזל טוב לרגל השמחה! שתזכו לרוב נחת ואור!",
      noticeType: "congratulations",
    },
  ];

  return (
    <>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.container}>
        {notices.slice(-6).map((notice) => (
          <Notice
            key={notice.id}
            content={notice.content}
            noticeType={notice.noticeType}
          />
        ))}
      </div>
    </>
  );
}
