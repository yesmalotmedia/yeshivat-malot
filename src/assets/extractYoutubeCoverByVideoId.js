export default function extractYoutubeCoverByVideoId(url) {
  // Extract the YouTube video ID from the embed code
  const match = url?.match(/embed\/([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;

  // Construct the thumbnail URL using the video ID
  return videoId 
    ? `https://img.youtube.com/vi/${videoId}/0.jpg` 
    : 'https://img.youtube.com/vi/default.jpg'; // Provide a fallback image if needed
}
