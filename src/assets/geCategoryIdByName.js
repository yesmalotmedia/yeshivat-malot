const getCategoryIdByName = (name, categories) => {
  if (!categories || !Array.isArray(categories)) return -1; // בדיקה שהמערך תקין
  const cleanName = name.trim(); // מנקה רווחים משני הצדדים
  const category = categories.find(
    (cat) =>
      cat.name
        .trim()
        .localeCompare(cleanName, undefined, { sensitivity: "base" }) === 0
  );
  return category ? category.id : -1;
};

export default getCategoryIdByName;
