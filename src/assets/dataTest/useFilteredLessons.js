import { useMemo } from "react";
import { useCategoryIdByName } from "../useCategories"; // ייבוא ההוק

function useFilteredLessons(data, filter) {
  const categoryIdByName = useCategoryIdByName; // שימוש בהוק כמוסבר

  // חישוב קטגוריות מחוץ ל-useMemo
  const categoryId = filter.category ? categoryIdByName(filter.category) : null;
  const freeQueryCategoryId = filter.freeQuery
    ? categoryIdByName(filter.freeQuery.trim())
    : null;

  return useMemo(() => {
    let filteredLessons = data;
    const { freeQuery, rabbiName } = filter;

    // סינון לפי קטגוריה
    if (filter.category && filter.category !== "כל השיעורים") {
      filteredLessons = filteredLessons?.filter((video) =>
        video.categories.includes(categoryId)
      );
    }

    // סינון לפי שם הרב
    if (rabbiName && rabbiName !== "כל הרבנים" && rabbiName.trim() !== "") {
      filteredLessons = filteredLessons.filter((video) =>
        video.rabbiName.includes(rabbiName.trim())
      );
    }

    // חיפוש חופשי
    if (freeQuery?.trim() !== "" && freeQuery !== undefined) {
      filteredLessons = filteredLessons.filter(
        (video) =>
          video.rabbiName.includes(freeQuery.trim()) ||
          video.title.includes(freeQuery.trim()) ||
          (freeQueryCategoryId &&
            video.categories.includes(freeQueryCategoryId))
      );
    }

    // סינון לפי סוגי תוכן
    const selectedTypes = [];
    if (filter?.type?.audio) selectedTypes.push("audio");
    if (filter?.type?.video) selectedTypes.push("video");
    if (filter?.type?.text) selectedTypes.push("text");

    if (selectedTypes.length > 0) {
      filteredLessons = filteredLessons.filter((lesson) =>
        selectedTypes.some((type) => lesson.contentType.includes(type))
      );
    }

    // מיון השיעורים לפי שם
    filteredLessons?.sort((a, b) => a.title.localeCompare(b.title));

    return filteredLessons;
  }, [data, filter, categoryId, freeQueryCategoryId]); // עדכון התלויות
}

export default useFilteredLessons;
