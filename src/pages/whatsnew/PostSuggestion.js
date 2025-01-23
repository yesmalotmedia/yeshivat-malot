import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function PostSuggestion({
  currentPostId,
  UrlPageName,
  tarikImg,
  numPosts = 4,
}) {
  const { colors, bgColors, responsive, parsedNewsData } =
    useContext(AppContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentIndex = parsedNewsData.findIndex(
    (post) => post.id === currentPostId
  );

  const circularIndex = (index, length) => {
    return (index + length) % length;
  };

  const displayPosts = [];
  for (let i = 1; i <= numPosts; i++) {
    const index = circularIndex(currentIndex + i, parsedNewsData.length);
    displayPosts.push(parsedNewsData[index]);
  }

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      background: bgColors.lightAzure,
      justifyContent: "center",
      padding: 10,
      borderRadius: 20,

    },
    suggestionBox: (isHovered) => ({
      width: responsive("26vw", "35vw", "80vw"),
      height: 300,
      margin: responsive("10px 10px", "10px 10px", "10px 0"),
      borderRadius: 20,
      boxShadow: isHovered
        ? "rgba(0, 0, 139, 0.6) 0px 8px 24px"
        : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      cursor: "pointer",
      transition: "box-shadow 0.3s ease-in-out",
      background: "#fff",
    }),
    link: {
      textDecoration: "none",
    },
    thumbnail: {
      width: "100%",
      height: "200px",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1rem", "1rem", "1rem"),
      lineHeight: responsive("1.2rem", "1.3rem", "1.5rem"),
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      padding: 8,
    },
    tarikImg: {
      height: responsive("18px", "18px", "15px"),
      paddingLeft: 10,
    },
    dateHe: {
      color: "gray",
      paddingRight: 10,
    },
    dateEn: {
      color: "gray",
      paddingLeft: 10,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      marginRight: 10,
      fontSize: responsive("1rem", "1rem", "0.8rem"),
    },
  };

  return (
    <div style={styles.container}>
      {displayPosts.map((post, index) => (
        <Link
          style={styles.link}
          key={index}
          to={`/${UrlPageName}/${post?.id}`}
        >
          <div
            style={styles.suggestionBox(index === hoveredIndex)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(index)}
            onTouchEnd={() => setHoveredIndex(null)}
          >
            <img
              style={styles.thumbnail}
              src={post?.thumbnail}
              alt="Thumbnail"
            />
            <p style={styles.title}>{post?.title}</p>
            <div style={styles.tarikContainer}>
              <img style={styles.tarikImg} src={tarikImg} alt="Tarik" />
              <span style={styles.dateEn}>{post?.date}</span> 
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
