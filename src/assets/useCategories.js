import { useContext } from "react";
import { AppContext } from "../App";

export const useCategoryNameById = (id) => {
  const { categories } = useContext(AppContext);
  console.log(id, categories);

  const category = categories.find((cat) => cat.id == id);
  console.log(category);

  return category ? category.name : "קטגוריה"; // ערך ברירת מחדל אם לא נמצא
};

export const useCategoryIdByName = (name) => {
  const { categories } = useContext(AppContext);
  const category = categories.find((cat) => cat.name === name);
  return category ? category.id : -1; // ערך ברירת מחדל אם לא נמצא
};
