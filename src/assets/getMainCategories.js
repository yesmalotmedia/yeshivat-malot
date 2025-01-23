function getMainCategories(categories, mainParentId) {
  // Create a map of categories by their id for quick lookup
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
    } else if (categoryMap[category.parent]) {
      // Add as a child to the parent category
      categoryMap[category.parent].children.push(categoryMap[category.id]);
    }
  });

  return mainCategories;
}
export default getMainCategories;

// function getMainCategories(categories, mainParentId) {
//   // Create a map of categories by their id for quick lookup
//   const categoryMap = {};
//   categories.forEach((category) => {
//     categoryMap[category.id] = { ...category, children: [] };
//   });

//   // Organize categories into a tree structure, including grandchildren
//   const mainCategories = [];

//   categories.forEach((category) => {
//     if (category.parent === mainParentId) {
//       // Direct child of mainParentId
//       mainCategories.push(categoryMap[category.id]);
//     } else if (categoryMap[category.parent]) {
//       // Add as a child to the parent category
//       const parent = categoryMap[category.parent];
//       parent.children.push(categoryMap[category.id]);
//     }
//   });

//   // Add grandchildren (third generation)
//   categories.forEach((category) => {
//     if (
//       categoryMap[category.parent] &&
//       categoryMap[categoryMap[category.parent].parent]
//     ) {
//       const grandParent = categoryMap[categoryMap[category.parent].parent];
//       const parent = categoryMap[category.parent];
//       const child = categoryMap[category.id];
//       if (!grandParent.children.includes(parent)) {
//         grandParent.children.push(parent); // Ensure the parent is listed under its grandparent
//       }
//       if (!parent.children.includes(child)) {
//         parent.children.push(child); // Ensure the child is under its parent
//       }
//     }
//   });

//   return mainCategories;
// }

// export default getMainCategories;
