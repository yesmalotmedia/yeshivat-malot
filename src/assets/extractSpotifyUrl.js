function extractSpotifyUrl(iframeString) {
  // Regular expression to find the src attribute of the iframe
  const pattern = /src="([^"]+)"/;
  const match = iframeString?.match(pattern);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // or handle the case where the URL is not found
  }
}

export default extractSpotifyUrl;
