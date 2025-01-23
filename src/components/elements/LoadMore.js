import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LoaderAnimation from "./LoaderAnimation";

const LoadMore = ({ onClick }) => {
  const { colors, } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

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

  const styles = {
    readMore: {
      height:40, 
      width: 200, 
      borderRadius: 30,
      border: `2px solid ${colors.orange}`,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: "1.6rem",
      cursor: "pointer",
      margin: "20px auto",
      boxShadow: isHovered
        ? 'rgba(241, 143, 22, 0.6) 0px 0px 0px 4px, rgba(6, 24, 44, 0.85) 0px 6px 8px -1px, rgba(255, 255, 255, 0.1) 0px 2px 0px inset'
        : 'rgba(241, 143, 22, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
      transition: 'height 0.3s ease, width 0.3s ease, box-shadow 0.3s ease',
    },
    loader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      margin: "20px auto",
    },
  };

  return (
    <>
      <LoaderAnimation isLoading={isLoading} color={colors.orange} />
      {!isLoading && (
        <div
          style={styles.readMore}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <p> טען עוד </p>
        </div>
      )}
    </>
  );
};

export default LoadMore;