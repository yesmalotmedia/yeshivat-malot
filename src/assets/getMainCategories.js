function getMainCategories(categories, mainParentId) {
  // Create a map of categories by their id for quick lookup
  console.log(categories);

  const categoryMap = {};
  categories.forEach((category) => {
    categoryMap[category.id] = { ...category, children: [] };
  });

  // Organize categories into a tree structure, only for children of the mainParentId
  const mainCategories = [];
  categories.forEach((category) => {
    if (category.parent === mainParentId) {
      // If it's a direct child of mainParentId (3), add it to mainCategories
      mainCategories.push(categoryMap[category.id]);
      console.log(category.parent, mainParentId);
    } else if (categoryMap[category.parent]) {
      // Add as a child to the parent category

      categoryMap[category.parent].children.push(categoryMap[category.id]);
    }
  });

  return mainCategories;
}
export default getMainCategories;
