// פונקציה לשיטוח נתונים
const flattenData = (data) => {
  return Array.isArray(data) ? data.flat(Infinity) : [];
};

const ExtractMaalonData = (data) => {
  // אם data הוא אובייקט – שנה אותו למערך
  const normalizedData = Array.isArray(data) ? data : [data];

  // שיטוח הנתונים
  const flatData = flattenData(normalizedData);
  if (!Array.isArray(flatData) || flatData.length === 0) return [];

  return flatData.map((post) => {
    const dateParts = post?.date?.split(" – ") || [];

    return {
      id: post.id,
      number: post?.acf?.number,
      title: post?.acf?.title,
      pdfFile: post?.acf?.pdf?.url,
      heDate: dateParts[0] || "", // תאריך עברי בלבד
      date: dateParts[1] || "", // תאריך לועזי אם קיים
    };
  });
};

export default ExtractMaalonData;
