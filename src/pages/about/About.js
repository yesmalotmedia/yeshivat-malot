import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Button from "./Button";
import aboutData from "../../data/aboutData";
import RenderContents from "./RenderContents";
import LastLessons from "../../components/lastLessons/LastLessons";

export default function About() {
  const { colors, bgColors, responsive } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("aboutUs");

  const styles = {
    container: {
      display: "flex",
      marginInline: "auto",
      width: responsive("", "90%", "100%"),
      flexDirection: responsive("", "column", "column"),
      alignItems: responsive("flex-start", "center", "center"),
      justifyContent: responsive("", "center", "center"),
      gap: 80,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width: responsive("20%", "90%", "90%"),
      height: responsive("100vh", "200px", "140px"),
      marginTop: responsive(-45, -45, 50),
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display: "flex",
      alignItems: "center",
      flexDirection: responsive("column", "row", "row"),
      justifyContent: "center",
      padding: responsive("0 0 35px 0 ", "0 0 20px 0 ", "0 0 20px 0 "),
      gap: 45,
    },
    description: {
      width: responsive("60vw", "90%", "90%"),
    },
  };

  const getActiveSectionData = () => {
    return aboutData.find((section) => section.dataId === activeSection);
  };

  return (
    <>
      <HeroSection
        title={"אודותינו"}
        subTitle={"הכירו את בית המדרש לאיחוד התלמודים"}
        isSubscribe={false}
        titleColor={colors.darkBlue}
        height={responsive("60vmin", "60vmin", "60vmin")}
        marginTop={responsive("30px", "50px", "120px")}
      />
      <div style={styles.container}>
        <div style={styles.sideBtnContainer}>
          <div style={styles.link} onClick={() => setActiveSection("aboutUs")}>
            <Button
              title={"מי אנחנו"}
              imgSrc={"/SideBtn-1.png"}
              isActive={activeSection === "aboutUs"}
            />
          </div>
          <div style={styles.link} onClick={() => setActiveSection("team")}>
            <Button
              title={"צוות בית המדרש"}
              imgSrc={"/SideBtn-2.png"}
              isActive={activeSection === "team"}
            />
          </div>
        </div>
        <div style={styles.description}>
          <RenderContents sectionData={getActiveSectionData()} />
        </div>
      </div>
      <LastLessons />
    </>
  );
}
