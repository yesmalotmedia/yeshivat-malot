import extractYoutubeUrl from "./extractYoutubeUrl";
import extractYoutubeCoverByVideoId from "./extractYoutubeCoverByVideoId";

// פונקציה לפענוח ישויות HTML
const decodeHtmlEntities = (str) => {
  if (!str) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

// שליפת שם הרב מתוך ה-iframe
const extractRabbiName = (youtubeIframe) => {
  const match = youtubeIframe?.match(/title="[^"]*הרב ([^"]+)"/);
  return match ? `הרב ${match[1]}` : null;
};

// פונקציה לשיטוח נתונים
const flattenData = (data) => {
  return Array.isArray(data) ? data.flat(Infinity) : [];
};

// פונקציה להמרת תאריך לפורמט YYYY-MM-DD
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
};

// עיבוד הנתונים לפורמט הרצוי
const ExtractPostsData = (data) => {
  console.log(data);

  const flatData = flattenData(data);
  if (!Array.isArray(flatData) || flatData.length === 0) return [];

  return flatData.map((item) => {
    const youtubeUrl = extractYoutubeUrl(item?.acf_fields?.youtube);
    const thumbnail =
      extractYoutubeCoverByVideoId(youtubeUrl) || item?.thumbnail || "";
    const dateParts = item?.date?.split(" – ") || [];
    const formattedDate = formatDate(dateParts[1]); // המרת תאריך לפורמט YYYY-MM-DD
    return {
      id: item?.id,
      date: formattedDate, // תאריך בפורמט המתאים למיון
      heDate: dateParts[0] || "", // תאריך עברי בלבד
      title: decodeHtmlEntities(item?.title || ""),
      rabbiName: extractRabbiName(item?.acf_fields?.youtube),
      thumbnail,
      contentType: item?.acf_fields?.video
        ? "video"
        : item?.acf_fields?.audio
          ? "audio"
          : "text",
      url: youtubeUrl,
      article: item?.content || "",
      dedicatedTo: item?.dedicatedTo || "",
      audioUrl: item?.acf_fields?.audio || "",
      categories: item?.categories || [],
    };
  });
};

export default ExtractPostsData;
