import React from "react";

const SpotifyPodcast = ({ url }) => {
  return (
    <div>
      <iframe
        style={{ borderRadius: "12px" }}
        src={url}
        width="100%"
        height="100"
        frameBorder="0"
        allowFullScreen
        allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPodcast;
