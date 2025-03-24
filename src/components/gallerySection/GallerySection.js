import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function ImageGallery() {
  const { colors, responsive, displayedVideos, useCategoryNameById } =
    useContext(AppContext);
  const commonImageStyle = {
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };
  const images = [
    "/aboutSectionImg1.jpg",
    "/aboutSectionImg2.jpg",
    "/aboutSectionImg3.jpg",
    "/aboutSectionImg4.jpg",
    "/aboutSectionImg5.jpg",
    "/aboutSectionImg6.jpg",
    "/aboutSectionImg7.jpg",
  ];
  const styles = {
    container: {
      margin: "0 auto",
      width: responsive("80%", "80%", "100%"),
    },
    img: {
      width: "100%",
      marginTop: responsive(100, 100, 115),
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.img} src={"/gallerySection.png"} />
    </div>
  );
}
