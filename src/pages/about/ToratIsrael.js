import React, { useContext } from "react";
import { AppContext } from "../../App";
import { col } from "framer-motion/m";
import description from "../../data/description";

export default function ToratIsrael({
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
    title: "דורנו והצורך בתורה גדולה",
    description:
      "עם ישראל קם לתחייה מבור הגלות וחזר לארצו. אין בעל הנס מכיר בנסו – הקב\"ה מלביש את גודל השעה בלבושים וכיסויים, עטיפות וקליפות, שיסיחו את דעתנו, בכדי שלא נסתנוור מהאור העצום, הבלתי-נתפס – אורה של הגאולה.\n\n" +
      "הגאולה לא הגיעה בדרך בה שיערנו שתגיע. במובנים מסוימים, במקביל לתהליך הגאולה, חלה בעם ישראל נסיגה בשמירת התורה, ואך מפליא הוא שהנהגת התנועה הציונית הייתה דווקא חילונית ברובה.\n\n" +
      "מרן הרב אברהם יצחק הכהן קוק זצ\"ל, ראה במבטו העמוק והחודר, את התהליכים שהתרחשו במאה שעברה. הוא אבחן שנטישת התורה שהתחוללה בקרב הצעירים – נטישה לעבר תנועת ההשכלה, נטישה אל הקומוניזם, או, להבדיל, נטישה אל הלאומיות הציונית, כולן תנועות אידיאליסטיות – איננה תוצאה של רפיון רוח. להיפך: הדור, דור הגאולה, דור גדול הוא, והוא מבקש דברים גדולים ונשגבים.\n\n" +
      "ומכאן מגיעה המסקנה: התורה בדלותה, כפי שהיא הופיעה בדורות האחרונים של הגלות, לא מילאה את הצמאון של הדור הגדול הזה, המבקש תורה גדולה, את תורת הגאולה. על כן, דווקא הנוער האידיאליסטי, מבקש הגדולות, הלך לרעות בשדות זרים.\n\n" +
      "התרופה למכה אנושה זו, אומר הרב קוק, היא אחת: \"לעולם לא נוכל להתעלם מהתרופה הכללית הכוללת את הכל, ושעזיבתה היא שגרמה לנו את נפילתנו, והוא הדבר מה שאני בעניי ובמר נפשי רגיל לקרא, לשנות ולשלש מאות ואלפים פעמים: עזבנו את נשמת התורה!\"\n\n" +
      "על לומדי התורה מוטלת אחריות עצומה: להופיע תורה גדולה, המתאימה להנהגה האלוקית של הדור. לחשוף את העומק הגדול של התורה, להראות שתורת ה' עונה על השאלות העמוקות של החיים, ומעניקה להם משמעות."
  },
  {
    title: "פרטים וכללים – הלכה ואגדה",
    description:
      "הגאולה החומרית אמנם הוציאה את רובו של עם ישראל מהגלות בגופו, אך בתחום הרוח עם ישראל טרם השיב את מעמד חייו למקומו הראוי. עלינו מוטלת האחריות להוציא את הגלות מעם ישראל: \"אם התחייה הלאומית לא תחדש לנו הארה בתפילה, הארה בתורה, הארה בדרכי המוסר והקשבת האמונה, איננה עדיין תחייה אמיתית\".\n\n" +
      "התורה בגלות מופיעה בצורה מצומצמת. העיסוק המרכזי במשך שנות הגלות היה בהלכות, בפרטי הדינים הנוגעים לשאלות מצומצמות – מה לעשות במקרה פרטי מסוים, וכיצד לנהוג בזמן אחר. אך בעוד שלשמירת ההלכה ככל פרטיה ודקדוקיה ניתנה חשיבות גדולה, כראוי לה, תחומים אחרים של התורה, בעיקר ענף האגדה, העוסק בעניינים רוחניים, מופשטים וכוללים, כמו אמונה, מחשבה, והשקפה, כל אלה כמעט שנזנחו בקרן זווית.\n\n" +
      "אין זה מקרה שהתורה מופיעה בצורה זו בגלות: \"מיום שחרב בית המקדש אין לו להקב\"ה בעולמו אלא ד' אמות של הלכה\". בגלות עם ישראל הינו אוסף של אנשים פרטיים וקהילות, ללא מרכז אחד וללא הגדרה לאומית – בגלות עם ישראל אינו מופיע בעולם כאומה, ככלל אחד.\n\n" +
      "כך תורת הגלות מופיעה בפרטים רבים של הלכות. בהופעתה המצומצמת של התורה בגלות, פרטי הדינים המעשיים אינם מתקשרים לכלל הגדול ממנו הם נובעים – אך באמת, המצוות כולן, דקדוקיהן ופרטיהן, נובעים מרובד עליון, מרעיונות מופשטים, מיסוד רוחני הכולל בתוכו את הפרטים, ודורש את קיומם.\n\n" +
      "עתה, כאשר עם ישראל התקבץ מארבע כנפות הארץ, ושב לדרוך על במת ההיסטוריה כיישות אחת, ככלל, ביכולתו להופיע תורה מקיפה וכוללת. תורה שהיא כזהב, הנפרט לפרוטות רבות. תורה המסבירה איך כל הפרטים מתאגדים לכלל, כיצד המעשים מתייחסים אל הרעיון.\n\n" +
      "נטישת קיום חלקה המעשי של התורה, לטובת אידיאלים זרים, תקבל את המענה בהבנה כיצד התורה האלוקית מקושרת בכל ענייניה, עולה עד לשמי מרום ברעיונותיה, וחודרת עד תחתיות ארץ בפרטי המעשים היומיומיים."
  },
  {
    title: "נשמת התורה וארץ הנבואה",
    description:
      "הזוהר הקדוש ממשיל את התורה לאדם – לבושו גופו ונשמתו: הלבושים הם סיפורי התורה, גופי תורה אלו ההלכות, ונשמת התורה היא תורת הסוד.\n\n" +
      "כאשר אנו מבקשים להיפגש עם אדם, איננו מסתפקים בהכרת בגדיו, או מראהו החיצוני, ואף לא בהתבוננות בפעולותיו המעשיות – המפגש האמיתי והעמוק הוא עם פנימיותו של האדם, עם נשמתו.\n\n" +
      "כך בלימוד התורה אנו שואפים לחדור מבעד לרובד החיצוני והמעשי, אל העומק הטמון בכל עניין, ולעמוד על האופן שבו פנימיותו מתגלה כלפי חוץ.\n\n" +
      "בארץ ישראל הקדושה מתלבשת בחומר – בצבא, בכלכלה, ובפוליטיקה. הקדושה בארץ מתגלה גם דרך הלבושים החיצוניים. זהו המקום בו אפשר לגלות את הנשמה האלוקית החבויה בהלכה ובמעשה.\n\n" +
      "הרב קוק כותב: \"בארץ ישראל, שהיא מקום הנבואה… אוירא דארץ ישראל מחכים\". ניצוצות הנבואה, תורת הסוד ונשמת התורה – כולם נחשפים דווקא בארץ הנבואה.\n\n" +
      "כאן אפשר לדבוק בקב\"ה, דרך לבושי המציאות. זו הקדושה האמיתית – הפנימית – שמופיעה דרך החיים עצמם."
  },
  {
    title: "לסיכום",
    description:
      "מתוך הבטה אל אור הגאולה, והבנת גודל השעה, אנו משתדלים – בלימוד התורה בכלל, ובלימוד הגמרא בפרט – לחפש את הנשגב, את היסוד הרוחני האלוקי העומד מאחורי הסוגיה.\n\n" +
      "להגיע אל יסוד זה דרך כל פרטי ההלכות והדעות שבגמרא ומפרשיה, ולחשוף כיצד הוא בא לידי ביטוי דרכן.\n\n" +
      "לשאול אודות היחס בין ההלכה למצווה, לעמוד על השורשים הרעיוניים של המחלוקות, ולהבין שאף מאחורי ניסוחי הסוגיה והמבנה שלה – עומדים עניינים עמוקים.\n\n" +
      "כל זאת מתוך שאיפה להידבק בנותן התורה – ברוך הוא."
  }
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
