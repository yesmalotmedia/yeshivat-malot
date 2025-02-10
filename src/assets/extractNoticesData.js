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
  return data.map((item) => ({
    id: item?.id,
    content: item?.title?.rendered,
    date: item?.date?.split("T")[0], // Extract only the date part
    heDate: item?.meta?.heDate,
    title: decodeHtmlEntities(item?.title?.rendered), // Decode HTML entities in the title
    rabbiName: getRabbieNameById(item.rabbies[0]),
    thumbnail: extractYoutubeCoverByVideoId(extractYoutubeUrl(item?.acf?.url)),
    contentType: item.acf.contentType,
    url: extractYoutubeUrl(item?.acf?.url),
    article: item.acf.articleContent,
    dedicatedTo: item.acf.dedicatedTo,
    audioUrl: item.acf.audioUrl,
    categories: item.categories,
    combinedValues: [
      item?.date?.split("T")[0],
      item?.meta?.heDate,
      decodeHtmlEntities(item?.title?.rendered),
      getRabbieNameById(item.rabbies[0]),
      ...item.categories,
    ],
  }));
};

export default extractNoticesData;
