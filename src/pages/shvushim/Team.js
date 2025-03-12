import React, { useContext } from "react";
import { AppContext } from "../../App";
import description from "../../data/description";
import { object } from "framer-motion/m";
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
      width: index === 0 ? "25%" : responsive("90%", "100%", "100%"),
      // minWidth: responsive(180, 130, 158),
      textAlign: "center",
      backgroundColor: colors.white,
      boxShadow: shadow.boxShadow1,
      padding: 0,
      borderRadius: 10,
      // margin: index === 0 ? responsive(`0 120px`, `0 120px`, `0 110px`) : 0,
      margin: "auto",
    }),
    teamItemWraper: (index) => ({
      width: index === 0 ? "90vw" : "25%",
      height: "auto",
    }),
    img: {
      width: "100%",
      height: "100%",
      maxHeight: 250,
      borderRadius: "10px 10px 0 0 ",
      objectFit: "cover",
      objectPosition: "25% 30%",
    },
    name: {
      fontSize: responsive("1.3vw", "20px", "20px"),
      fontWeight: "bold",
    },
    description: {
      fontSize: responsive("1.3vw", "17px", "17px"),
    },
    detailsWraper: {
      padding: 9,
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
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.teamContainer}>
        {contentData.map((e, index) => (
          <div style={styles.teamItemWraper(index)}>
            <div key={index} style={styles.item(index)}>
              <img src={e.img} alt={e.name} style={styles.img} />
              <div style={styles.detailsWraper}>
                <div style={styles.name}>{e.name}</div>
                <div style={styles.description}>{e.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
