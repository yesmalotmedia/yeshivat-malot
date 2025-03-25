import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";
import extractYoutubeCoverByVideoId from "./extractYoutubeCoverByVideoId";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  if (!str) return ""; // מוודא שהתוכן לא undefined או null
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

const extractNoticesData = (data) => {
  return data.map((item) => ({
    id: item?.id,
    content: decodeHtmlEntities(item?.title?.rendered), // 🛠️ פענוח HTML כאן
    type: item?.acf?.type,
    date: item?.date?.split("T")[0], // Extract only the date part
    heDate: item?.meta?.heDate,
  }));
};

export default extractNoticesData;
