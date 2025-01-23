const getVideoData = (data) => {
  const formattedData = [];
  data.map((video) => formattedData.push(video.acf.youtube));
  return formattedData;
};
export default getVideoData;
