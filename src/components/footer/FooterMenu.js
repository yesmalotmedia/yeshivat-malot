import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function chunkArray(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export default function FooterMenu({ data }) {
  const { colors, responsive } = useContext(AppContext);
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    menuContainer: {
      width: "100%",
    },
    titleContainer: {
      width: "100%",
      textAlign: responsive("", "center", "center"),
      marginBottom: "20px",
    },
    menuColumnContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      width: responsive("100%", "100%", "300px"),
      paddingRight: responsive(0, 130, 0),
    },
    menuColumn: {
      flex: "1 1 26%",
      minWidth: "16%",
    },
    arrow: {
      height: responsive("0.8rem", "1rem", "0.6rem"),
      marginLeft: "10px",
    },
    footerMenu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      paddingTop: "5px",
      fontSize: 20,
      fontWeight: "medium",
    },
    menu: {
      cursor: "pointer",
    },
    MenuTitle: {
      textAlign: "center",
      width: "300px",
      fontSize: responsive("2rem", "2.2rem", "1.4rem"),
    },
    links: (isHovered) => ({
      fontSize: responsive("1.6vw", "1.7rem", "1.1rem"),
      textDecoration: "none",
      color: isHovered ? colors.orange : colors.white,
    }),
  };

  const chunkedData = chunkArray(data, 4);

  return (
    <div style={styles.menuContainer}>
      <div style={styles.titleContainer}></div>
      <div style={styles.menuColumnContainer}>
        {chunkedData.map((chunk, chunkIndex) => (
          <div key={chunkIndex} style={styles.menuColumn}>
            {chunk.map((item, index) => (
              <div key={index} style={styles.footerMenu}>
                <img
                  style={styles.arrow}
                  src="/arrow-to-left.png"
                  alt="Arrow"
                />
                <Link
                  to={item.url}
                  style={styles.links(hoveredLink === item?.url)}
                  onMouseEnter={() => setHoveredLink(item?.url)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
