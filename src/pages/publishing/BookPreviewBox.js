import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function BookPreviewBox({
  image,
  title,
  author,
  price,
  discountPrice,
  pdfFile,
  dataType,
}) {
  const { colors, bgColors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  const isBook = dataType === "books";
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: responsive(400, 400, 450),
      width: responsive(300, 340, 300),
      border: `1px solid ${colors.azure}`,
      borderRadius: 20,
      textAlign: "center",
      padding: "10px",
      cursor: "pointer",
      boxShadow: isHovered
        ? "rgba(50, 50, 105, 0.3) 0px 4px 10px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px"
        : "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
      transition: "box-shadow 0.3s ease",
    },
    bookimageContainer: {
      overflow: "hidden",
      borderRadius: 20,
      position: "relative",
    },
    bookimage: {
      height: responsive("90%", "100%", "80%"),
      objectFit: "cover",
      transition: "transform 0.3s ease",
      transform: isHovered ? "scale(1.1)" : "scale(1)",
    },
    title: {
      fontSize: responsive("1.2rem", "1.2rem", "1.2rem"),
      color: colors.darkBlue,
      fontWeight: 600,
    },
    author: {
      fontSize: responsive("1.1rem", "1.1rem", "1.1rem"),
      color: colors.darkBlue,
      padding: "10px 0",
      fontWeight: 500,
    },
    priceContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    price: {
      color: colors.darkBlue,
      fontWeight: 600,
      marginBottom: "5px",
      fontSize: responsive("1.2rem", "1.2rem", "1.2rem"),
    },
    originalPrice: {
      color: "red",
      textDecoration: "line-through",
      fontSize: responsive("1rem", "1rem", "1rem"),
    },
    discountPrice: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1.2rem", "1.2rem", "1.3rem"),
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
      gap: 10,
    },
  };

  //function

  const handleClick = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div
      style={styles.mainContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div style={styles.bookimageContainer}>
        <img
          style={styles.bookimage}
          src={image ? image : "/maalon-default-cover.png"}
          alt="Book Cover"
        />
      </div>
      <p style={styles.title}>{title}</p>
      <p style={styles.author}>{author}</p>
      <div style={styles.priceContainer}>
        {discountPrice ? (
          <>
            <p style={styles.originalPrice}>{price} שח </p>
            <p style={styles.discountPrice}>{discountPrice} שח </p>
          </>
        ) : (
          isBook && <p style={styles.price}>{price} שח </p>
        )}
      </div>
      <div style={styles.btnContainer}>
        <Button
          background={bgColors.darkBlue}
          btnImg={isBook ? "/addToCart.png" : "/download.png"}
          btnText={isBook ? "לרכישה" : "להורדה"}
          onClick={handleClick}
        />
        {/* <Button
          onClick={handleClick}
          background={bgColors.yellow}
          btnImg={"/download.png"}
          btnText={"להורדה"}
        /> */}
      </div>
    </div>
  );
}
