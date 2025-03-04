function getMainCategories(categories, mainParentId) {
  // Create a map of categories by their ID for quick lookup

  const categoryMap = {};
  categories.forEach((category) => {
    categoryMap[category.id] = { ...category, children: [] };
  });

  // Organize categories into a tree structure
  const mainCategories = [];
  categories.forEach((category) => {
    if (category.parent === mainParentId) {
      // If it's a direct child of mainParentId, add to mainCategories
      mainCategories.push(categoryMap[category.id]);
    } else if (categoryMap[category.parent]) {
      // Add as a child to its parent
      categoryMap[category.parent].children.push(categoryMap[category.id]);
    }
  });

  return mainCategories;
}

export default getMainCategories;
