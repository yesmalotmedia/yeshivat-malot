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

const ExtractNewsData = (data) => {
  return data.map((post) => ({
    thumbnail: [post?.acf?.image],
    postId: post?.id,
    id: post?.id,
    date: convertDateFormat(post?.date?.split("T")[0]), // Extract only the date part
    title: decodeHtmlEntities(post.title.rendered), // Decode HTML entities in the title
    article: post?.content?.rendered,
  }));
};

export default ExtractNewsData;
