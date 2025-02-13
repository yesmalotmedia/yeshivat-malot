import React, { useContext } from "react";
import { AppContext } from "../../App";
import description from "../../data/description";
import { object } from "framer-motion/m";

export default function Team({ title, titleStyle }) {
  const { colors, shadow } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "85%",
      gap: 20,
      margin: "auto",
      marginTop: 50,
      color: colors.darkBlue,
    },
    title: titleStyle,
    teamContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 30,
      width: "100%",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "24%",
      textAlign: "center",
      backgroundColor: colors.white,
      boxShadow: shadow.boxShadow1,
      padding: 0,
      borderRadius: 10,
    },
    img: {
      width: "100%",
      height: "100%",
      maxHeight: 250,
      borderRadius: "10px 10px 0 0 ",
      objectFit: "cover",
      objectPosition: "25% 30%",
    },
    name: {
      fontSize: "1.3vw",
      fontWeight: "bold",
    },
    description: {
      fontSize: "1.4vw",
    },
    detailsWraper: {
      padding: 9,
    },
  };

  const contentData = [
    {
      name: "הרב יהושע ויצמן",
      description: "ראש הישיבה",
      img: "/gallery3.png",
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
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.teamContainer}>
        {contentData.map((e, index) => (
          <div key={index} style={styles.item}>
            <img src={e.img} alt={e.name} style={styles.img} />
            <div style={styles.detailsWraper}>
              <div style={styles.name}>{e.name}</div>
              <div style={styles.description}>{e.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
