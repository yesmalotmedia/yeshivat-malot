import React, { useContext } from "react";
import { AppContext } from "../../App";
import Gallery from "../../components/elements/Gallery";

const RenderContents = ({ title, paragraph, thumbnail }) => {
  const { colors, responsive } = useContext(AppContext);

  const styles = {
    container: {
      marginBottom: 200,
    },
    title: {
      color: colors.darkBlue,
      fontSize: responsive("2rem", "2rem", "2rem"),
      marginBottom: 25,
    },
    paragraph: {
      textAlign: "justify",
      fontSize: responsive("1.3rem", "1.4rem", "1.1rem"),
      lineHeight: responsive("1.9rem", "1.8rem", "1.7rem"),
      marginBottom: 15,
    },
    img: {
      width: responsive("60vw", "100%", "100%"),
      height: responsive("40vh", "40vh", "30vh"),
      borderRadius: 20,
      margin: "30px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>

      <p style={styles.paragraph}>{paragraph}</p>

      <img style={styles.img} src={thumbnail} alt="Thumbnail" />

      {/* <Gallery data={sectionData} /> */}
    </div>
  );
};

export default RenderContents;
