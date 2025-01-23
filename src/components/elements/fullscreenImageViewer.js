import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

function FullscreenImageViewer({ images, currentIndex, onClose }) {
  const { colors } = useContext(AppContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const styles = {
    viewer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    image: {
      maxHeight: "90%",
      maxWidth: "90%",
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      color: colors.white,
      fontSize: "3rem",
      cursor: "pointer",
    },
    prevButton: {
      left: 100,
    },
    nextButton: {
      right: 100,
    },
    closeButton: {
      position: "absolute",
      top: 40,
      right: 60,
      background: "none",
      border: "none",
      color: colors.white,
      fontSize: "3rem",
      cursor: "pointer",
    },
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleViewerClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div style={styles.viewer} onClick={handleViewerClick}>
      <button
        style={{ ...styles.button, ...styles.closeButton }}
        onClick={handleViewerClick}
      >
        &times;
      </button>
      <button
        style={{ ...styles.button, ...styles.prevButton }}
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <img
        src={images[currentImageIndex]}
        style={styles.image}
        alt={`Image ${currentImageIndex}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        style={{ ...styles.button, ...styles.nextButton }}
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
}

export default FullscreenImageViewer;