import { act } from "react";
import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

function convertDateFormat(dateStr) {
  // Split the input date string by '-'
  const parts = dateStr.split("-");

  // Rearrange the parts to match the desired format "DD-MM-YYYY"
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}

const ExtractPublishData = (data) => {
  return data.map((post) => ({
    image: post?.acf?.image,
    id: post?.id,
    date: convertDateFormat(post?.date?.split("T")[0]), // Extract only the date part
    title: decodeHtmlEntities(post.title.rendered), // Decode HTML entities in the title
    article: post?.content?.rendered,
    pdfFile: post.acf.pdfFile,
    author: post.acf.author,
    price: post.acf.price,
    discountPrice: post.acf.discountPrice,
  }));
};

export default ExtractPublishData;
