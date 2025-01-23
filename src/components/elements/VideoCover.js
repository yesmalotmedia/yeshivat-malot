import React from "react";

const VideoCover = ({ videoUrl }) => {
  // Function to extract video ID from URL or embed code
  const getVideoId = (url) => {
    // Extract video ID from various YouTube URL formats
    const match = url?.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // Construct thumbnail URL using video ID
  const videoId = getVideoId(videoUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return thumbnailUrl ? (
    <img src={thumbnailUrl} alt="Video Cover" />
  ) : (
    <div>No video cover available</div>
  );
};

export default VideoCover;
