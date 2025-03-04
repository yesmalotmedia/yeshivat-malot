import React, { useEffect, useRef, useState, useContext } from "react";
import { AppContext } from "../../App";
import AudioControls from "./AudioControls"; // Import the new component

// Function to extract video ID from YouTube URL or return ID if already provided
const getVideoIdFromUrl = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : url; // If it's a URL, return the video ID, otherwise return the input
};

const AudioPlayer = ({ audioUrl, shouldPlay, playerVars = {} }) => {
  const { isMobile, responsive } = useContext(AppContext);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const styles = {
    PlayerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    HiddenVideo: {
      width: 0,
      height: 0,
      overflow: "hidden",
    },
  };
  useEffect(() => {
    const videoId = getVideoIdFromUrl(audioUrl); // Extract the video ID

    const onPlayerReady = () => {
      setIsPlayerReady(true);
      setDuration(playerRef.current.getDuration());
      if (shouldPlay) {
        handlePlayPause();
      }
    };

    const onPlayerStateChange = (event) => {
      switch (event.data) {
        case window.YT.PlayerState.PLAYING:
          setIsPlaying(true);
          setIsLoading(false);
          break;
        case window.YT.PlayerState.PAUSED:
        case window.YT.PlayerState.ENDED:
          setIsPlaying(false);
          break;
        default:
          break;
      }
    };

    const onPlayerError = () => {
      setIsPlaying(false);
      setIsLoading(false);
      alert("Error loading audio.");
    };

    const createPlayer = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoId, // Use extracted video ID here
        playerVars: {
          autoplay: 0,
          controls: 0,
          ...playerVars,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        if (playerRef.current) {
          const current = playerRef.current.getCurrentTime();
          setCurrentTime(current);
          setProgress((current / duration) * 100);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    if (isPlayerReady && playerRef.current) {
      if (!isPlaying) {
        setIsLoading(true);
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    }
  };

  const handleSliderChange = (e) => {
    if (isPlayerReady && playerRef.current) {
      const newTime = (e.target.value / 100) * duration;
      playerRef.current.seekTo(newTime);
      setProgress(e.target.value);
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);

    if (isPlayerReady && playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }

    if (newVolume == 0) {
      setIsMuted(true);
      if (isPlayerReady && playerRef.current) {
        playerRef.current.mute();
      }
    } else {
      setIsMuted(false);
      if (isPlayerReady && playerRef.current) {
        playerRef.current.unMute();
      }
    }
  };

  const handleMuteUnmute = () => {
    if (isPlayerReady && playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div style={styles.PlayerContainer}>
      <div style={styles.HiddenVideo}>
        <div id="youtube-player" />
      </div>
      <AudioControls
        isPlaying={isPlaying}
        isLoading={isLoading}
        progress={progress}
        duration={duration}
        currentTime={currentTime}
        volume={volume}
        isMuted={isMuted}
        onPlayPause={handlePlayPause}
        onSliderChange={handleSliderChange}
        onVolumeChange={handleVolumeChange}
        onMuteUnmute={handleMuteUnmute}
      />
    </div>
  );
};

export default AudioPlayer;
