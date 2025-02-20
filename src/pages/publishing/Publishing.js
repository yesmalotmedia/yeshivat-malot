import React, { useContext } from "react";
import HeroSection from "../../components/elements/HeroSection";
import BooksCollection from "./BooksCollection";

import { AppContext } from "../../App";
import Filters from "./Filters";
import ComingSoon from "../ComingSoon";

export default function Publishing() {
  const { colors, isMobile, responsive, parsedPublishData } =
    useContext(AppContext);
  console.log(parsedPublishData);

  const styles = {
    mainContainer: {
      width: "90%",
      marginTop: 30,
      marginInline: "auto",
    },
    preview: {
      display: "flex",
      gap: "20px",
    },
    filterBtn: {
      margin: "60px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <>
      <HeroSection
        title={"הוצאה לאור "}
        backgroundImage={"/publishingHero.png"}
        subTitle={"מאמרים חוברות וספרים שיצאו "}
        titleColor={colors.white}
        height={responsive("60vmin", "60vmin", "85vmin")}
        marginTop={responsive("50px", "90px", "90px")}
      />
      <div style={styles.mainContainer}>
        <div style={styles.filterBtn}>{/* <Filters /> */}</div>
        <div style={styles.preview}>
          <BooksCollection />
        </div>
        {/* <ComingSoon /> */}
      </div>
    </>
  );
}
