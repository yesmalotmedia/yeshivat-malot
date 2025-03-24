import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Team({ title, titleStyle, leftSection }) {
  const { colors, shadow, responsive } = useContext(AppContext);

  const styles = {
    container: leftSection,
    title: titleStyle,
    teamContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: responsive(10, 10, 10),
      width: "100%",
    },
    item: (index) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: index === 0 ? "50%" : responsive("28%", "30%", "30%"),
      textAlign: "center",
      backgroundColor: colors.white,
      boxShadow: shadow.boxShadow1,
      padding: 0,
      borderRadius: 10,
      margin: "auto",
      maxWidth: 300,
    }),
    teamItemWrapper: (index) => ({
      width: "100%",
      maxWidth: 600,
      display: index === 0 ? "flex" : "inline-block",
      justifyContent: "center",
    }),
    img: (index) => ({
      width: "100%",
      height: "100%",
      maxHeight: index === 0 ? "40vh" : "30vh",
      borderRadius: "10px 10px 0 0 ",
      objectFit: "cover",
      objectPosition: "25% 30%",
    }),
    name: {
      fontSize: responsive("1.3vw", "20px", "80%"),
      fontWeight: "bold",
    },
    description: {
      fontSize: responsive("1.3vw", "17px", "70%"),
    },
    detailsWrapper: {
      padding: 4,
    },
  };

  const contentData = [
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/profileHaravWaitsman.png",
    },
    // ... שאר המערך
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.teamItemWrapper(0)}>
        <div style={styles.item(0)}>
          <img
            src={contentData[0].img}
            alt={contentData[0].name}
            style={styles.img(0)}
          />
          <div style={styles.detailsWrapper}>
            <div style={styles.name}>{contentData[0].name}</div>
            <div style={styles.description}>{contentData[0].description}</div>
          </div>
        </div>
      </div>
      <div style={styles.teamContainer}>
        {contentData.slice(1).map((e, index) => (
          <div key={index + 1} style={styles.item(index + 1)}>
            <img src={e.img} alt={e.name} style={styles.img(index + 1)} />
            <div style={styles.detailsWrapper}>
              <div style={styles.name}>{e.name}</div>
              <div style={styles.description}>{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
