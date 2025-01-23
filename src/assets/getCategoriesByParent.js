const getCategoriesByParent = (categories, parent) => {
  const filteredCategories = categories.filter((cat) => cat.parent == parent);
  return filteredCategories;
};

export default getCategoriesByParent;
