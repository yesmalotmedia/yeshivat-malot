import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Nav from "./Nav";
import Logo from "../elements/Logo";
import Button from "../elements/Button";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header() {
  const {
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
    responsive,
  } = useContext(AppContext);

  const location = useLocation();
  const isTerumotPage = location.pathname === "/terumot";
  const isShvushimFormPage = location.pathname === "/ShvushimForm";
  const isNewStudentFormPage = location.pathname === "/NewStudentForm";
  // סטייט חדש לנראות ההודעה
  const [showFirstRunAlert, setShowFirstRunAlert] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setShowFirstRunAlert(true); // קרוב לטופ – תראה
      } else {
        setShowFirstRunAlert(false); // מתחת ל-50 פיקסלים – תסתיר
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    container: {
      height: responsive(100, 80, 80),
      width: "100%",
      background: bgColors.white,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
      position: "fixed",
      padding: responsive(10, 7, 7),
    },
    logo: {
      height: responsive("180px", "120px", "120px"),
      width: responsive("180px", "120px", "120px"),
      zIndex: 100,
      cursor: "pointer",
      transform: responsive(
        "translate(-28px, 40px)",
        "translate(-5px, 15px)",
        "translate(-5px, 15px)"
      ),
    },
    vector: {
      position: "absolute",
      right: 0,
      top: -20,
      width: responsive("250px", "140px", "140px"),
      height: responsive("200px", "130px", "130px"),
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
      top: 100,
      left: "50%",
      width: responsive("70%", "55%", "100%"),
      textAlign: "center",
      transform: "translateX(-50%)",
      color: colors.white,
      zIndex: 100,
      fontSize: responsive(15, 15, 13),
      transition: "opacity 0.3s ease",
      opacity: showFirstRunAlert ? 1 : 0,
      pointerEvents: showFirstRunAlert ? "auto" : "none",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.humburgerAndLink}>
          {!isTerumotPage && !isShvushimFormPage && !isNewStudentFormPage && (
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
              alt="hamburgerBtn"
            />
          )}
        </div>

        {isMobile ? <MobileNav /> : <Nav />}
        <Logo style={styles.logo} />
        <img style={styles.vector} src="/logo-vector.png" alt="logo-vector" />
      </div>

      <div style={styles.firstRunAlert}>
        האתר בתקופת הרצה – תגובות, הצעות שאלות?
        <br />
        <a
          href="https://wa.me/972559378556?text=שלום, בקשר לאתר החדש..."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: "5px",
            color: "white",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          עדכנו אותנו בוואטסאפ
        </a>
      </div>
    </>
  );
}

export default Header;
