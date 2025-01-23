// const getCategoryNameById = (id) => {
//   let name;
//   switch (id) {
//     case 1:
//       name = "כללי";
//       break;
//     case 3:
//       name = "בית מדרש";
//       break;
//     case 4:
//       name = "מה חדש";
//       break;
//     case 5:
//       name = "דף יומי בירושלמי";
//       break;
//     case 10:
//       name = "התלמוד הממוזג";
//       break;
//     case 11:
//       name = "פרסומי הוצאה לאור";
//       break;
//     case 12:
//       name = "מסכת ברכות";
//       break;
//     case 18:
//       name = "כללים";
//       break;
//     case 19:
//       name = "עיון";
//       break;
//     case 20:
//       name = "מועדים";
//       break;
//     case 21:
//       name = "פרשת השבוע";
//       break;
//     case 22:
//       name = "כל השיעורים";
//       break;
//     case 23:
//       name = "ברכות";
//       break;
//     case 24:
//       name = "פאה";
//       break;
//     case 25:
//       name = "דמאי";
//       break;
//     case 26:
//       name = "כלאיים";
//       break;
//     case 27:
//       name = "סוטה";
//       break;
//     case 28:
//       name = "ברכות";
//       break;
//     case 29:
//       name = "לג בעומר";
//       break;
//     case 31:
//       name = "חגיגה";
//       break;
//     case 32:
//       name = "שבת";
//       break;
//     case 33:
//       name = "מגילה";
//       break;
//     case 44:
//       name = "קידושין";
//       break;
//     case 49:
//       name = "סוכה";
//       break;
//     case 55:
//       name = "ראש השנה";
//       break;
//     case 56:
//       name = "ראש השנה";
//       break;
//     case 59:
//       name = "סנהדרין";
//       break;
//     case 60:
//       name = "תענית";
//       break;
//     case 61:
//       name = "שלושת השבועות";
//       break;
//     case 62:
//       name = "שבועות";
//       break;
//     case 63:
//       name = "פורים";
//       break;
//     case 64:
//       name = "מנחות";
//       break;
//     case 77:
//       name = "פסח";
//       break;
//     case 78:
//       name = "פסחים";
//       break;
//     case 79:
//       name = "חנוכה";
//       break;
//     case 81:
//       name = "בבא בתרא";
//       break;
//     case 85:
//       name = "בבא קמא";
//       break;
//     case 86:
//       name = "גיטין";
//       break;
//     case 87:
//       name = "יומא";
//       break;
//     case 88:
//       name = "יום כיפור";
//       break;
//     case 91:
//       name = "יום ירושלים";
//       break;
//     case 92:
//       name = "במדבר";
//       break;
//     case 93:
//       name = "נשא";
//       break;
//     case 94:
//       name = "שלח";
//       break;
//     case 105:
//       name = "טו בשבט";
//       break;
//     case 107:
//       name = "ביצה";
//       break;
//     default:
//       name = "קטגוריה";
//   }

//   return name;
// };

// export default getCategoryNameById;
const getCategoryNameById = (id, categories) => {
  const category = categories.find((cat) => cat.id === id);
  return category ? category.name : "קטגוריה"; // ערך ברירת מחדל אם לא נמצא
};
