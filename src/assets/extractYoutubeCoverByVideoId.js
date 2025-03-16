export default function extractYoutubeCoverByVideoId(url) {
  if (!url) return "/default-cover.png"; // ברירת מחדל אם אין URL

  const match =
    url.match(/[?&]v=([^&#]+)/) ||
    url.match(/youtu\.be\/([^/?]+)/) ||
    url.match(/embed\/([^/?]+)/);
  const videoId = match ? match[1] : null;

  if (!videoId) return "/default-cover.png"; // אם אין מזהה וידאו - החזר תמונת ברירת מחדל

  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
