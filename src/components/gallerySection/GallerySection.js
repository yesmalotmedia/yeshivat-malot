export default function ImageGallery() {
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
      width: "80%",
    },
    img: {
      width: "100%",
      marginTop: 100,
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.img} src={"/gallerySection.png"} />
    </div>
  );
}
