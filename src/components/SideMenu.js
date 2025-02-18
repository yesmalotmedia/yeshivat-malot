import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import Button from "../pages/bogrim/Button";

export default function SideMenu({
  sections,
  activeSection,
  setActiveSection,
}) {
  const { bgColors, responsive } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.innerHeight / 2);

  const isMobile = responsive(false, false, true);

  // מעדכן את המיקום של הכפתור בהתאם לגלילה
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.3)",
      display: isOpen ? "block" : "none",
      zIndex: 999,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width: "30%",
      maxWidth: 250,
      padding: 50,
      marginTop: responsive(50, 50, 50),
      borderRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      gap: 45,
      position: responsive("static", "static", "fixed"),
      right: isOpen ? "0px" : "-30%",
      top: "50%",
      transform: responsive("", "", "translateY(-50%)"),
      transition: "right  0.3s ease-in-out",
      zIndex: responsive(0, 0, 1000),
    },
    toggleBtn: {
      position: "fixed",
      right: isOpen ? "200px" : "10px",
      top: `${scrollPosition}px`, // מיקום דינמי בהתאם לגלילה
      transform: "translateY(-50%)",
      transition: "top 1.5s ease-in-out, right 0.3s ease-in-out", // תנועה חלקה
      background: bgColors.lightAzure,
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      cursor: "pointer",
      zIndex: 1100,
      animation:
        "wiggle 1.5s infinite ease-in-out, sideWiggle 3s infinite ease-in-out",
    },
  };

  const handleOutsideClick = (e) => {
    if (!e?.target?.closest(".side-menu")) {
      setIsOpen(false);
    }
  };

  const handleClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div style={styles.overlay} onMouseDown={handleOutsideClick} />
      )}
      {!isOpen && isMobile && (
        <div style={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
          {">"}
        </div>
      )}
      <div className="side-menu" style={styles.sideBtnContainer}>
        {sections.map((section) => (
          <div key={section.id} onClick={() => handleClick(section.id)}>
            <Button
              title={section.title}
              imgSrc={section.imgSrc}
              isActive={activeSection === section.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
