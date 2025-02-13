import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import HeroSection from "../components/elements/HeroSection";
import aboutData from "../data/aboutData";
import LastLessons from "../components/lastLessons/LastLessons";
import Button from "../pages/bogrim/Button";

export default function SideMenu({
  sections,
  activeSection,
  setActiveSection,
}) {
  const { colors, bgColors, responsive } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      marginInline: "auto",
      width: responsive("", "90%", "100%"),
      flexDirection: responsive("", "column", "column"),
      alignItems: responsive("flex-start", "center", "center"),
      justifyContent: responsive("", "center", "center"),
      gap: 80,
      flex: 1,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width: responsive("20%", "90%", "90%"),
      padding: 50,
      marginTop: responsive(50, 50, 50),
      borderRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display: "flex",
      alignItems: "center",
      flexDirection: responsive("column", "row", "row"),
      justifyContent: "center",
      gap: 45,
    },
    description: {
      width: responsive("60vw", "90%", "90%"),
    },
  };

  return (
    <div style={styles.sideBtnContainer}>
      {sections.map((section) => (
        <div
          key={section.id}
          style={styles.link}
          onClick={() => setActiveSection(section.id)}
        >
          <Button
            title={section.title}
            imgSrc={section.imgSrc}
            isActive={activeSection === section.id}
          />
        </div>
      ))}
    </div>
  );
}
