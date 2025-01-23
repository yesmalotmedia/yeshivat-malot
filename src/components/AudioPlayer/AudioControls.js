import React, { useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { AppContext } from "../../App";


const styles = {
  Controls: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    flexDirection: 'row-reverse',

  },
  Button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: "1px solid #ccc",
  },
  Slider: {
    width: '400px',
    margin: '0 10px',
  },
  VolumeSlider: {
    width: '100px',
    margin: '0 10px',
  },
  TimeDisplay: {
    fontSize: '14px',
    margin: '0 10px',
  },
  Playbtn: {
    height: 30,
    width: 30,
  },
  Volumebtn: {
    height: 20,
    width: 20,
  },
  MobileControls:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",

  },
  TopSection:{
    display: "flex",
    alignItems: "Center",
    marginBottom: 30,
    gap: 10,
  
  },
  BottomSection:{
      display: "flex",
    alignItems: "Center",
    flexDirection: "row-reverse",
   gap: 20,


   
  },
  MobileSlider:{
    width: "280px",

  }
};

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds === Infinity) {
    return '00:00:00';
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const AudioControls = ({
  isPlaying,
  isLoading,
  progress,
  duration,
  currentTime,
  volume,
  isMuted,
  onPlayPause,
  onSliderChange,
  onVolumeChange,
  onMuteUnmute
}) => {
  const { isMobile } = useContext(AppContext);

  return (
    <div>
      {isMobile ? (
       <div style={styles.MobileControls}> 
       <div style={styles.TopSection}>
         <div style={styles.TimeDisplay}>{formatTime(currentTime)}</div>
       <div
         style={{
           ...styles.Button,
           cursor: isLoading ? 'not-allowed' : 'pointer',
         }}
         onClick={onPlayPause}
       >
         {isLoading ? (
           <ClipLoader />
         ) : isPlaying ? (
           <img style={styles.Playbtn} src="../audioPlayer/pause.png" alt="Pause" />
         ) : (
           <img style={styles.Playbtn} src="../audioPlayer/play.png" alt="Play" />
         )}
       </div>
       <div style={styles.TimeDisplay}>{formatTime(duration)}</div>
       </div>
      <div style={styles.BottomSection}>

         <div style={styles.MobileSlider}>
         <input
           type="range"
           min="0"
           max="100"
           value={progress}
           onChange={onSliderChange}
           style={{ width: '100%', direction: "ltr" }}
         />
       </div>
      
       <div onClick={onMuteUnmute}>
         {isMuted ? (
           <img style={styles.Volumebtn} src="../audioPlayer/mute.png" alt="Mute" />
         ) : (
           <img style={styles.Volumebtn} src="../audioPlayer/medium-volume.png" alt="Unmute" />
         )}
       </div>
      </div>
      
     </div>
      ) : (
        <div style={styles.Controls}>
          <div
            style={{
              ...styles.Button,
              cursor: isLoading ? 'not-allowed' : 'pointer',
            }}
            onClick={onPlayPause}
          >
            {isLoading ? (
              <ClipLoader />
            ) : isPlaying ? (
              <img style={styles.Playbtn} src="../audioPlayer/pause.png" alt="Pause" />
            ) : (
              <img style={styles.Playbtn} src="../audioPlayer/play.png" alt="Play" />
            )}
          </div>
          <div style={styles.TimeDisplay}>{formatTime(currentTime)}</div>
          <div style={styles.Slider}>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={onSliderChange}
              style={{ width: '100%', direction: "ltr" }}
            />
          </div>
          <div style={styles.TimeDisplay}>{formatTime(duration)}</div>
          <div style={styles.VolumeSlider}>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={onVolumeChange}
              style={{ width: '100%', direction: "ltr" }}
            />
          </div>
          <div onClick={onMuteUnmute}>
            {isMuted ? (
              <img style={styles.Volumebtn} src="../audioPlayer/mute.png" alt="Mute" />
            ) : (
              <img style={styles.Volumebtn} src="../audioPlayer/medium-volume.png" alt="Unmute" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioControls;
