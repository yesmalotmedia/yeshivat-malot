import React, { useContext } from "react";
import { AppContext } from "../../App";
import Nav from "./Nav";
import Logo from "../elements/Logo";
import Button from "../elements/Button";
import { Link, useLocation } from "react-router-dom"; // ייבוא useLocation
import MobileNav from "./MobileNav";
import { transform } from "framer-motion";

function Header() {
  const {
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
    responsive,
  } = useContext(AppContext);

  // קבלת הנתיב הנוכחי
  const location = useLocation();
  const isTerumotPage = location.pathname === "/terumot"; // בדיקה אם בעמוד תרומות

  const styles = {
    container: {
      height: responsive(100, 90, 80),
      width: "100%",
      background: bgColors.white,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
      position: "fixed",
      padding: responsive(10, 10, 7),
    },
    logo: {
      height: responsive("180px", "140px", "120px"),
      width: responsive("180px", "140px", "120px"),
      zIndex: 100,
      cursor: "pointer",
      transform: responsive(
        "translate(-28px, 40px)",
        "translate(-13px, 40px)",
        "translate(-5px, 15px)"
      ),
    },
    vector: {
      position: "absolute",
      right: 0,
      top: -20,
      width: responsive("250px", "180px", "140px"),
      height: responsive("200px", "180px", "130px"),
    },
    terumot: {
      textDecoration: "none",
    },
    humburgerAndLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    humburgerIcon: {
      height: 35,
      margin: "0 20px 0 10px",
      cursor: "pointer",
    },
    firstRunAlert: {
      position: "fixed",
      top: 20,
      left: "50%",
      transform: "translateX(-50%)",
      color: "red",
      zIndex: 2000,
      fontSize: 15,
    },
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.firstRunAlert}>
          האתר בהרצה ראשונית - נא לא להפיץ את הקישור
        </div>
        <div style={styles.humburgerAndLink}>
          {!isTerumotPage && ( // הצגת הכפתור רק אם לא בעמוד תרומות
            <Link to={"/terumot"} style={styles.terumot}>
              <Button
                color={colors.darkBlue}
                hoveredColor={colors.white}
                bgColor={bgColors.yellow}
                hoveredBgColor={bgColors.darkBlue}
                title={"לתרומה לישיבה"}
                borderRadius={5}
                fontSize={responsive("1.3rem", "1.1rem", "1rem")}
                fontWeight={600}
                width={responsive(200, 170, 140)}
                height={responsive(50, 40, 35)}
                padding={responsive(0, 0, 0)}
              />
            </Link>
          )}
          {isMobile && (
            <img
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              style={styles.humburgerIcon}
              src="/humburgerMenuIcon.svg"
              alt="habmurgerBtn"
            />
          )}
        </div>

        {isMobile ? <MobileNav /> : <Nav />}
        <Logo style={styles.logo} />
        <img style={styles.vector} src="/logo-vector.png" alt="logo-vector" />
      </div>
    </>
  );
}

export default Header;
