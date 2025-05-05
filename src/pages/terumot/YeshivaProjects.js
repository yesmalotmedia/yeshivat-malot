import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";

export default function YeshivaProjects({ title, titleStyle, leftSection }) {
  const { colors, shadow } = useContext(AppContext);

  const styles = {
    container: {
      ...leftSection,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      ...titleStyle,
      textAlign: "center",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      width: "100%",
      boxSizing: "border-box",
      padding: "16px 0",
    },
    card: {
      backgroundColor: "transparent",
      width: "300px",
      height: "350px",
      perspective: "1000px",
      margin: "10px",
    },
    cardInner: (flipped) => ({
      position: "relative",
      width: "100%",
      height: "100%",
      transition: "transform 0.8s",
      transformStyle: "preserve-3d",
      transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    }),
    side: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      borderRadius: "12px",
      padding: "16px",
      boxSizing: "border-box",
      textAlign: "center",
      overflow: "hidden",
      boxShadow: shadow.boxShadow1,
    },
    front: {
      backgroundColor: "#ffffff",
    },
    back: {
      backgroundColor: "#f8f8f8",
      transform: "rotateY(180deg)",
      overflowY: "auto",
    },
    image: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "12px",
      objectPosition: "top",
    },
    button: {
      marginTop: "12px",
      padding: "10px 24px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: bgColors.darkBlue,
      color: "white",
      cursor: "pointer",
    },
  };

  const contentData = [
    {
      title: "תרומה כללית",
      subTitle: "שותפות בקיום עולם התורה והחסד של הישיבה",
      description:
        "התרומה הכללית מאפשרת לנו להמשיך בפעילות היומיומית של הישיבה – לימוד תורה, שיעורים, הפצת יהדות, תמיכה בתלמידים ובמשפחותיהם, תחזוקת המבנים, הפקת אירועים ועוד. כל שותפות שלכם מחזקת אותנו ומעניקה לנו רוח גבית להמשיך ולהתפתח.",
      image: "/terumot-general.jpg",
    },
    {
      title: "מבקשי פניך",
      subTitle: "בית מדרש לתשובה מאהבה",
      description:
        "תוכנית ייחודית לגברים שחזרו בתשובה, המציעה ליווי רוחני ואישי, סדרי לימוד מותאמים, שיעורים מרתקים ואווירה מחבקת ומצמיחה. אצלנו הם מוצאים בית. כל תרומה עוזרת לנו להמשיך לקלוט וללוות עוד ועוד נשמות טהורות במסע חייהן.",
      image: "/terumot-mevakshey.png",
    },
    {
      title: "פרויקט בני המנשה",
      subTitle: "חיזוק השורשים, קירוב הלבבות",
      description:
        "מאות עולים מהודו – בני שבט מנשה – נקלטים בארץ בחסדי שמיים. אנו מסייעים להם למצוא קהילה, חינוך, תעסוקה ושייכות. שירים עתיקים ושורשיים שרים הם על ירושלים – ואנחנו עוזרים להם להפוך את החלום למציאות. בזכותכם – הם מרגישים בבית.",
      image: "/trumot-bneimenashe.png",
    },
    {
      title: "מטר מרובע בבית המדרש",
      subTitle: "לבנות מקום תורה – פיזית ורוחנית",
      description:
        "כל מטר מרובע נוסף בבית המדרש שלנו הוא עוד מקום לנשמה להתמלא. רוצים להיות שותפים ממש בבנייה הפיזית של קודש הקודשים שלנו? זו ההזדמנות שלכם לקחת חלק אמיתי ובלתי נשכח.",
      image: "/terumot-betmidrash.jpg",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.grid}>
        {contentData.map((e, index) => (
          <div style={styles.card} key={index}>
            <div style={styles.cardInner(flippedIndex === index)}>
              <div style={{ ...styles.side, ...styles.front }}>
                <img src={e.image} alt={e.title} style={styles.image} />
                <h3>{e.title}</h3>
                {e.subTitle && <h5>{e.subTitle}</h5>}
                <br />

                <button
                  style={styles.button}
                  onClick={(event) => {
                    event.stopPropagation();
                    setFlippedIndex(index); // רק הכפתור פותח
                  }}
                >
                  קרא עוד
                </button>
              </div>
              <div style={{ ...styles.side, ...styles.back }}>
                <h2>{e.title}</h2>
                {e.subTitle && <h4>{e.subTitle}</h4>}
                <br />

                <p>{e.description}</p>
                <br />

                <button
                  style={{ ...styles.button, marginTop: "8px" }}
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open(
                      "https://www.matara.pro/nedarimplus/online/?mosad=7005986",
                      "_blank"
                    );
                  }}
                >
                  אני רוצה להיות שותף בפרויקט
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
