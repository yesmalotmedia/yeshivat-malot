import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";
import extractYoutubeCoverByVideoId from "./extractYoutubeCoverByVideoId";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

const extractNoticesData = (data) => {
  console.log(data);

  return data.map((item) => ({
    id: item?.id,
    content: item?.title?.rendered,
    type: item?.acf?.type,
    date: item?.date?.split("T")[0], // Extract only the date part
    heDate: item?.meta?.heDate,
  }));
};

export default extractNoticesData;
