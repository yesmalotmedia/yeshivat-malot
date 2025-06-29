import React, { useContext } from "react";
import { AppContext } from "../../App";
import { col } from "framer-motion/m";
import description from "../../data/description";

export default function Overview({
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
      title: " נעים להכיר ",
   description:
  "העיר מעלות ממוקמת בגליל המערבי, כ־20 ק\"מ מזרחית לנהריה, ופחות משעה נסיעה מחיפה.\n" +
  "מעלות נוסדה בשנת ה'תשי\"ז ע\"י עולים חדשים מצפון אפריקה, כאחת מעיירות הפיתוח בהן שיכנה הממשלה את העולים.\n" +
  "שמה של העיר נקבע בשל מיקומה במעלה הר הרקפות ובגלל שם היישוב הסמוך, מעיליא.\n" +
  "בשנת ה'תשכ\"ג אוחדו תרשיחא ומעלות, והיישוב החדש נקרא מעלות-תרשיחא.\n\n" +
  "בשנת ה'תשל\"ד חדרו מחבלים מלבנון לישראל והגיעו למעלות.\n" +
  "הם ירו בשלושת בני משפחת כהן בבית ברחוב פקיעין (בניין הפנימיות של הישיבה כיום הוא הבניין בו התגוררה המשפחה), והמשיכו לעבר בית הספר הממ\"ד 'נתיב מאיר' שבו שהתה באותה עת קבוצת תלמידים מצפת.\n" +
  "המחבלים השתלטו על בית הספר ולקחו את התלמידים וצוות המורים כבני ערובה לצורך שחרור מחבלים.\n" +
  "בסיום הפיגוע, לאחר פריצת צה\"ל, נהרגו 22 תלמידים ו־5 מבוגרים, ורבים אחרים נפצעו.\n\n" +
  "ישיבת מעלות הוקמה שנה לאחר מכן, בשנת ה'תשל\"ה, כתגובה ציונית לפיגוע החבלני, ונקראה 'ישיבת מעלות יעקב' על שם הרב ד\"ר יעקב הרצוג, בנו של הרב הראשי לישראל ודיפלומט ישראלי.\n\n" +
  "הרעיון להקמת ישיבת ההסדר נהגה על ידי שמעון ראם וברוך הופמן, ובהמשך הצטרפו למהלך מרכז ישיבות בני עקיבא בראשות הרב משה צבי נריה, וראש ישיבת 'נתיב מאיר' הרב אריה בינה.\n" +
  "המחזור הראשון כלל בעיקר בוגרי 'נתיב מאיר', וכן בוגרי ישיבות נחלים ונתניה. בראש הישיבה עמד הרב שמואל דיקמן, ששימש כדיין בחיפה.\n\n" +
  "בשנת ה'תשל\"ט התמנה הרב חיים אליעזר מילר מקריית מוצקין לראשות הישיבה, ובאותה שנה מונה משה ברח\"ד למנהל הישיבה.\n\n" +
  "בשנת ה'תש\"ן התמנה לראשות הישיבה הרב יהושע ויצמן.\n\n" +
  "בשנת ה'תשנ\"א עברה הישיבה לבניינה הנוכחי, ובשנת ה'תשנ\"ו נחנך בצמוד לו בית המדרש החדש המזוהה עם הישיבה.\n\n" +
  "עם השנים הקימה הישיבה מספר שלוחות במקומות שונים, מתוך צורך שהתעורר בשטח.\n\n" +
  "בשנת ה'תשע\"ה מונה חיים דעדוש למנהל הישיבה."


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
