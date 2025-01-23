import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";

// Function to decode HTML entities
const decodeHtmlEntities = (str) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};

// Function to strip HTML tags using a temporary DOM element
const stripHtmlTags = (htmlString) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.textContent || tempDiv.innerText || "";
};

function convertDateFormat(dateStr) {
  // Split the input date string by '-'
  const parts = dateStr.split("-");

  // Rearrange the parts to match the desired format "DD-MM-YYYY"
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  return formattedDate;
}

const ExtractTalmudMemuzagData = (data) => {
  return data
    .map((post) => ({
      talmud: post?.acf?.talmud,
      masecet: post?.acf?.masecet,
      id: post?.id,
      perek: post?.acf?.perek,
      daf: post?.acf?.daf,
      page: post?.acf?.page,
      body: post?.acf?.body,
    }))
    .sort((a, b) => (a.daf > b.daf ? 1 : -1)); // Sorts data by 'daf' in ascending order
};

export default ExtractTalmudMemuzagData;
