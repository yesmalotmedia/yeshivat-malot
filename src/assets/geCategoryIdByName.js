// const getCategoryIdByName = (name) => {
//   let id;

//   switch (name) {
//     case "בית מדרש":
//       id = 3;
//       break;
//     case "דף יומי בירושלמי":
//       id = 5;
//       break;
//     case "התלמוד הממוזג":
//       id = 10;
//       break;
//     case "כללי":
//       id = 1;
//       break;
//     case "כללים":
//       id = 18;
//       break;
//     case "מה חדש":
//       id = 4;
//       break;
//     case "מסכת ברכות":
//       id = 12;
//       break;
//     case "פרסומי הוצאה לאור":
//       id = 11;
//       break;
//     case "עיון":
//       id = 19;
//       break;
//     case "מועדים":
//       id = 20;
//       break;
//     case "כל השיעורים":
//       id = 22;
//       break;
//     case "ברכות":
//       id = 28;
//       break;
//     case "גיטין":
//       id = 86;
//       break;
//     case "יומא":
//       id = 87;
//       break;
//     case "חגיגה":
//       id = 31;
//       break;
//     case "חנוכה":
//       id = 79;
//       break;
//     case "טו בשבט":
//       id = 105;
//       break;
//     case "יום ירושלים":
//       id = 91;
//       break;
//     case "יום כיפור":
//       id = 88;
//       break;
//     case "בבא בתרא":
//       id = 81;
//       break;
//     case "בבא קמא":
//       id = 85;
//       break;
//     case "ביצה":
//       id = 107;
//       break;
//     case "במדבר":
//       id = 92;
//       break;
//     case "נשא":
//       id = 93;
//       break;
//     case "סוטה":
//       id = 27;
//       break;
//     case "פסח":
//       id = 77;
//       break;
//     case "פסחים":
//       id = 78;
//       break;
//     case "פורים":
//       id = 63;
//       break;
//     case "ראש השנה":
//       id = 55;
//       break;
//     case "שבועות":
//       id = 62;
//       break;
//     case "שבת":
//       id = 32;
//       break;
//     case "שלושת השבועות":
//       id = 61;
//       break;
//     case "שלח":
//       id = 94;
//       break;
//     case "קידושין":
//       id = 44;
//       break;
//     case "סנהדרין":
//       id = 59;
//       break;
//     default:
//       id = -1; // Return -1 if the name doesn't match any category
//   }

//   return id;
// };

// export default getCategoryIdByName;
const getCategoryIdByName = (name, categories) => {
  const category = categories.find((cat) => cat.name === name);
  return category ? category.id : -1; // ערך ברירת מחדל אם לא נמצא
};
