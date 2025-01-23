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
        'url("/footerImages/Union.png")',
        'url("/mobileFooterImg.png")',
        'url("/mobileFooterImg.png")'
      ),
      backgroundSize: "100% 100%",
      color: colors.white,
      zIndex: 20,
      position: "relative",
    },
    footerItemWrapper: {
      paddingTop: responsive("50vh", "20vh", "30vh"),
      maxWidth: "80%",
      display: "flex",
      justifyContent: "center",
      gap: "6%",
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
      width: responsive(600, "100%", "10%"),
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
    },
    subscribe: {
      color: colors.orange,
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
      fontSize: responsive("2.4rem", "3rem", "2rem"),
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
        {!show && (
          <div style={styles.icon}>
            <LogoAndSocialIcon />
          </div>
        )}
        <div style={styles.subscribe}>
          <h2 style={styles.text}>רוצים לקבל התראה במייל על תוכן חדש? </h2>
          <Subscribe />
        </div>
      </div>
      <div style={styles.dedicate}>
        האתר הוקם לזכרו של יואל בר-און ז"ל
        <br />
        <span style={{ fontWeight: 700 }}>גדל בהושעיה, למד בישיבת מעלות</span>
      </div>
      <div style={styles.copyRight}>
        © כל הזכויות שמורות לצדקו יחדיו - בית מדרש לאיחוד התלמודים | האתר נבנה
        ב-❤ ע"י bms סטודיו לפיתוח תוכנה ובניית אתרים | עיצוב - closeApp
      </div>
    </div>
  );
};

export default Footer;
