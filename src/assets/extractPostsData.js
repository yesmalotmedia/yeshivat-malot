// import React, { useContext, useState } from "react";
// import useFetch from "./useFetch";
// import extractYoutubeUrl from "./extractYoutubeUrl";
// import getRabbieNameById from "./getRabbieNameById";
// import extractSpotifyUrl from "./extractSpotifyUrl";
// import extractYoutubeCoverByVideoId from "./extractYoutubeCoverByVideoId";

// // Function to decode HTML entities
// const decodeHtmlEntities = (str) => {
//   var txt = document.createElement("textarea");
//   txt.innerHTML = str;
//   return txt.value;
// };

// const ExtractPostsData = (data) => {
//   console.log(data);

//   return data.map((item) => ({
//     id: item?.id,
//     date: item?.date?.split("T")[0], // Extract only the date part
//     heDate: item?.meta?.heDate,
//     title: decodeHtmlEntities(item?.title?.rendered), // Decode HTML entities in the title
//     rabbiName: getRabbieNameById(item?.rabbies[0]),
//     thumbnail: extractYoutubeCoverByVideoId(extractYoutubeUrl(item?.acf?.url)),
//     contentType: item.acf.contentType,
//     url: extractYoutubeUrl(item?.acf?.url),
//     article: item.acf.articleContent,
//     dedicatedTo: item.acf.dedicatedTo,
//     audioUrl: item.acf.audioUrl,
//     categories: item.categories,
//     combinedValues: [
//       item?.date?.split("T")[0],
//       item?.meta?.heDate,
//       decodeHtmlEntities(item?.title?.rendered),
//       getRabbieNameById(item.rabbies[0]),
//       ...item.categories,
//     ],
//   }));
// };

// export default ExtractPostsData;
import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";
import extractYoutubeCoverByVideoId from "./extractYoutubeCoverByVideoId";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};
function extractRabbiName(youtubeIframe) {
  const match = youtubeIframe?.match(/title="[^"]*הרב ([^"]+)"/);
  return match ? `הרב ${match[1]}` : null;
}
const ExtractPostsData = (data) => {
  if (!Array.isArray(data)) return [];
  console.log(data);

  return data.map((item) => ({
    id: item?.id,
    date: item?.date?.split("T")[0], // תאריך בלבד
    heDate: item?.acf?.he_date || "", // תאריך עברי
    title: decodeHtmlEntities(item?.title?.rendered || ""), // ניקוי HTML מהכותרת
    rabbiName: extractRabbiName(item?.acf?.youtube),
    thumbnail: extractYoutubeCoverByVideoId(
      extractYoutubeUrl(item?.acf?.youtube)
    ),
    contentType: item?.acf?.video
      ? "video"
      : item?.acf?.audio
        ? "audio"
        : "text",
    url: extractYoutubeUrl(item?.acf?.youtube),
    article: item?.content?.rendered || "", // גוף המאמר
    dedicatedTo: item?.acf?.dedicatedTo || "",
    audioUrl: item?.acf?.audio || "",
    categories: item?.categories || [],
    combinedValues: [
      item?.date?.split("T")[0],
      item?.acf?.he_date || "",
      decodeHtmlEntities(item?.title?.rendered || ""),
      getRabbieNameById(item?.author),
      ...(item?.categories || []),
    ],
  }));
};

export default ExtractPostsData;
