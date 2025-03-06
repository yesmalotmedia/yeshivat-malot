import getCategoryNameById from "./getCategoryNameById";

const extractQueryPosts = (lessons, search, categories) => {
  //   if (!Array.isArray(lessons) || !search || !Array.isArray(categories))
  //     return [];

  const searchLower = search.toLowerCase();

  return lessons.filter((lesson) =>
    lesson.categories?.some((categoryId) => {
      const categoryName = getCategoryNameById(categoryId, categories);

      return (
        categoryName &&
        categoryName !== "קטגוריה" &&
        categoryName.toLowerCase().includes(searchLower)
      );
    })
  );
};

export default extractQueryPosts;
