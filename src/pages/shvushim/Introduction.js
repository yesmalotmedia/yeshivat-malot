import React, { useContext } from "react";
import { AppContext } from "../../App";
import { col } from "framer-motion/m";
import description from "../../data/description";

export default function Introduction({
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
      title: "ברוכים הבאים",
      description:
        "מחפשים להתחבר לתורה מתוך חיבור לעם ולארץ? רוצים ללמוד תורה מתוך שמחה?  ברוכים הבאים לישיבת מעלות!\n\n" +
        'הישיבה פתוחה לבחורים שמעוניינים להגיע לשבוע ישיבה – תלמידי י"ב ותלמידי י"א בעיקר בתקופת הקיץ.\n' +
        "לפני שמגיעים, חשוב לעדכן את משרדי הישיבה – בין אם אתם מגיעים דרך התיכון ובין אם ביוזמה פרטית.\n\n" +
        'לתיאום שבוע ישיבה, ניתן לפנות לאחד מאחראי השבושי"ם .\n\n' +
        "בהגעתכם לישיבה, גשו למשרדים או חפשו את אחראי שבוע הישיבה בבית המדרש – ונשמח לקדם את פניכם בלב פתוח ובפנים מאירות.",
    },
    {
      title: 'אחראי שבושי"ם',
      description: "בניהו שטמלר – 058-4551905 \nמתן שטיינהרט – 058-7315948  ",
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
