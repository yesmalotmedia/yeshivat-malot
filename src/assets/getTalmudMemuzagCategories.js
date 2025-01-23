function getTalmudMemuzagCategories(data, filter) {
  const talmuds = new Map();
  const masecets = new Map();
  const perakim = new Map();
  const dapim = new Map();

  // נוודא שלא יהיו ערכים ריקים אם יש שינויים
  const selectedTalmud = filter.selectedTalmud || "הכל";
  const selectedMasechet = filter.selectedMasechet || "הכל";
  const selectedPerek = filter.selectedPerek || "הכל";

  // הוספת "הכל" תמיד בראש הרשימה
  talmuds.set("הכל", { name: "הכל", value: "הכל" });
  talmuds.set("בבלי", { name: "בבלי", value: "בבלי" });
  talmuds.set("ירושלמי", { name: "ירושלמי", value: "ירושלמי" });

  // אם המסכת משתנה, מאפסים את הבחירות של פרק ודף
  if (selectedMasechet !== filter.previousSelectedMasechet) {
    filter.selectedPerek = "הכל";
    filter.selectedDaf = "הכל";
  }

  // עדכון הבחירה הקודמת של המסכת
  filter.previousSelectedMasechet = selectedMasechet;

  // אם התלמוד משתנה, מאפסים את כל הבחירות הקודמות
  if (selectedTalmud !== filter.previousSelectedTalmud) {
    filter.selectedMasechet = "הכל";
    filter.selectedPerek = "הכל";
    filter.selectedDaf = "הכל";
  }

  // עדכון הבחירה הקודמת של התלמוד
  filter.previousSelectedTalmud = selectedTalmud;

  // אם הפרק משתנה, מאפסים את הדפים
  if (selectedPerek !== filter.previousSelectedPerek) {
    filter.selectedDaf = "הכל";
  }

  // עדכון הבחירה הקודמת של הפרק
  filter.previousSelectedPerek = selectedPerek;

  // שלב ראשון: מסננים את המידע על בסיס התלמוד הנבחר
  const filteredDataByTalmud =
    selectedTalmud !== "הכל"
      ? data.filter((item) => item.talmud === selectedTalmud)
      : data;

  // שלב שני: מסננים את המידע על בסיס המסכת הנבחרת
  const filteredDataByMasechet =
    selectedMasechet !== "הכל"
      ? filteredDataByTalmud.filter((item) => item.masecet === selectedMasechet)
      : filteredDataByTalmud;

  // שלב שלישי: מסננים את המידע על בסיס הפרק הנבחר
  const filteredDataByPerek =
    selectedPerek !== "הכל"
      ? filteredDataByMasechet.filter((item) => item.perek === selectedPerek)
      : filteredDataByMasechet;

  // הוספת "הכל" תמיד בראש הרשימה של מסכתות, מוודאים שלא מוסיפים ערכים ריקים
  masecets.set("הכל", { name: "הכל", value: "הכל" });
  filteredDataByTalmud.forEach((item) => {
    if (item.masecet && item.masecet.trim() !== "") {
      masecets.set(item.masecet, { name: item.masecet, value: item.masecet });
    }
  });

  // הוספת "הכל" תמיד בראש הרשימה של פרקים, מוודאים שלא מוסיפים ערכים ריקים
  perakim.set("הכל", { name: "הכל", value: "הכל" });
  filteredDataByMasechet.forEach((item) => {
    if (item.perek && item.perek.trim() !== "") {
      perakim.set(item.perek, { name: item.perek, value: item.perek });
    }
  });

  // הוספת "הכל" תמיד בראש הרשימה של דפים, מוודאים שלא מוסיפים ערכים ריקים
  dapim.set("הכל", { name: "הכל", value: "הכל" });
  filteredDataByPerek.forEach((item) => {
    if (item.daf && item.daf.trim() !== "") {
      dapim.set(item.daf, { name: item.daf, value: item.daf });
    }
  });

  return {
    talmuds: Array.from(talmuds.values()), // תמיד מחזיר את כל התלמודים
    masecets: Array.from(masecets.values()), // מסכתות מתאפסות אם תלמוד שונה
    perakim: Array.from(perakim.values()), // פרקים מתאפסים אם מסכת שונתה
    dapim: Array.from(dapim.values()), // דפים מתאפסים אם פרק שונה
  };
}

export default getTalmudMemuzagCategories;
