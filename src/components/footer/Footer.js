import React, { useContext } from "react";
import { AppContext } from "../../App";

import FooterMenu from "./FooterMenu";
import LogoAndSocialIcon from "./LogoAndSocialIcon";
import FooterMenuData from "./FooterMenuData";
import Subscribe from "../elements/Subscribe";

const Footer = () => {
  const { colors, responsive } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      minWidth: "100%",
      backgroundImage: responsive(
        'url("/footerImg.png")',
        'url("/mobileFooterImg.png")',
        'url("/mobileFooterImg.png")'
      ),
      backgroundSize: "100% 100%",
      color: colors.yellow,
      zIndex: 20,
      position: "relative",
    },
    footerItemWrapper: {
      paddingTop: responsive("18vw", "20vh", "30vh"),
      marginBottom: "7vw",
      maxWidth: "80%",
      display: "flex",
      justifyContent: "center",
      gap: "0",
      alignContent: "stretch",
      alignItems: responsive("", "center", ""),
      marginInline: "auto",
      position: "relative",
      flexDirection: responsive("row", "column-reverse", "column-reverse"),
    },
    footerMenuWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "38vmax",
    },
    footerMenu: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      width: responsive(500, "100%", "10%"),
    },
    footerMenuItem: {
      flex: "1 1 calc(25% - 10px)",
      boxSizing: "border-box",
    },
    dedicate: {
      textAlign: "center",
      color: "#93F5FF",
      fontWeight: 500,
      marginTop: "40px",
      fontSize: responsive("1.4rem", "1.1rem", "1rem"),
    },
    copyRight: {
      textAlign: "center",
      marginTop: "30px",
      padding: "30px",
      position: "relative",
      backgroundColor: colors.white,
      color: colors.darkBlue,
    },
    subscribe: {
      color: colors.yellow,
      fontSize: "1.5vw",
      textAlign: "center",
      position: "relative",
      top: -4,
      width: responsive("", "100%", "100%"),
    },
    icon: {
      position: "relative",
      display: "flex",
      alignItems: responsive("", "center", "center"),
      justifyContent: responsive("", "center", "center"),
      top: 8,
    },
    text: {
      paddingBottom: 10,
      fontSize: responsive("2rem", "1.8rem", "2rem"),
    },
  };
  const show = responsive(true, false, false);
  return (
    <div style={styles.container}>
      <div style={styles.footerItemWrapper}>
        {show && (
          <div style={styles.icon}>
            <LogoAndSocialIcon />
          </div>
        )}

        <div style={styles.footerMenu}>
          <FooterMenu data={FooterMenuData} />
        </div>

        <div style={styles.subscribe}>
          <h2 style={styles.text}>
            {" "}
            מעוניינים לקבל עדכונים על שיעורים ואירועים בישיבה?{" "}
          </h2>
          <Subscribe />
        </div>
      </div>
      {/* <div style={styles.dedicate}>
        הקדשה? <br />
        <span style={{ fontWeight: 700 }}>הקדשה? </span>
      </div> */}
      {!show && (
        <div style={styles.icon}>
          <LogoAndSocialIcon />
        </div>
      )}
      <div style={styles.copyRight}>
        © כל הזכויות שמורות לישיבת מעלות | האתר נבנה ב-❤ ע"י{" "}
        <a
          href="mailto:media@yesmalot.co.il"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          bms סטודיו לפיתוח תוכנה ובניית אתרים{" "}
        </a>
        | עיצוב - closeApp
      </div>
    </div>
  );
};

export default Footer;
