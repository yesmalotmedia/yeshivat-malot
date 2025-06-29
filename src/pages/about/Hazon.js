import React, { useContext } from "react";
import { AppContext } from "../../App";
import { col } from "framer-motion/m";
import description from "../../data/description";

export default function Hazon({
  title,
  titleStyle,
  leftSection,
  descriptionStyle,
}) {
  const { colors } = useContext(AppContext);

  const styles = {
    container: leftSection,
    title: titleStyle,
    description: descriptionStyle,
  };

  const contentData = [
    {
      title: "חזון הישיבה ",
    description:
  "ייעוד הישיבה לגדל ולקדש שמו יתברך לאור תורת ארץ ישראל.\n\n" +
  "הישיבה תנחיל לצִבור התלמידים ולבאים בשעריה את הצורך החיוני לעסוק בעבודת המידות, בבניית השקפת עולם אמונית וביצירת קשר קבוע ועוצמתי לתורה ולמצוותיה.\n" +
  "כל אלו ייעשו בישיבה, עם בניית רצון, אחריות וכלים לחיים בדרך זו, לאורך ימים ושנים טובות.\n\n" +
  "מהישיבה תופיע תורה גדולה הקשובה לדור ויונקת מאוירא דארץ ישראל ומנשמת התורה.\n" +
  "דרכה של הישיבה תצמיח \"תלמידי חכמים שבארץ ישראל, המנעימים זה לזה\".\n\n" +
  "הישיבה תהיה שותפה באחריות לכלל האומה, ותיטע אותה בלב תלמידיה.\n" +
  "אחריות זו כוללת נשיאה בעול עם הציבור, בכל אורחות החיים, בלימוד תורה ובשירות הצבאי,\n" +
  "וחשיפת ערכי אהבת האומה, ארצה ותורתה, השוכנים בלב הציבור."

    },
    
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>

      {contentData.map((e, index) => (
        <div key={index}>
          <h3>{e.title}</h3>
          <div style={styles.description}>
            {e.title === 'אחראי שבושי"ם'
              ? e.description.split("\n").map((line, i) => {
                  const [name, phoneRaw] = line.split(" – ");
                  const phone = phoneRaw.replace(/[^0-9]/g, "");
                  const phoneForLink = "972" + phone.replace(/^0/, "");
                  const firstName = name.split(" ")[0];
                  const message = encodeURIComponent(
                    `שלום ${firstName}, אני מעוניין להגיע לשבו"ש לישיבה. דברו איתי בבקשה.`
                  );
                  const link = `https://wa.me/${phoneForLink}?text=${message}`;

                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                        marginBottom: "0.5em",
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="וואטסאפ"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <span>
                        {name} –{" "}
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {phoneRaw}
                        </a>
                      </span>
                    </div>
                  );
                })
              : e.description
                  .split("\n")
                  .map((line, i) => <div key={i}>{line}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
}
