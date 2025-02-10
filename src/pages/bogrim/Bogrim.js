import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Button from "./Button";
import aboutData from "../../data/aboutData";
import RenderContents from "./RenderContents";
import LastLessons from "../../components/lastLessons/LastLessons";
import NoticeBoard from "./NoticeBoard";

export default function Bogrim() {
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

  const sections = [
    {
      id: "1",
      title: "שומרים על קשר",
      paragraph: "",
      imgSrc: "/bogrim-icon1.png",
    },
    { id: "2", title: "עלון לבוגרים", imgSrc: "/bogrim-icon2.png" },
    { id: "3", title: "לוח מודעות", imgSrc: "/bogrim-icon3.png" },
  ];

  const getActiveSectionData = () => {
    return aboutData.find((section) => section.dataId === activeSection);
  };

  return (
    <>
      <HeroSection
        title={"בוגרים"}
        subTitle={" בוגרי ישיבת מעלות לדורותיה"}
        isSubscribe={false}
        titleColor={colors.white}
        height={responsive("60vmin", "60vmin", "60vmin")}
        marginTop={responsive("30px", "50px", "120px")}
        backgroundImage={"/publishingHero.png"}
      />
      <div style={styles.container}>
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
        <div style={styles.description}>
          {/* <RenderContents sectionData={getActiveSectionData()} /> */}
          <NoticeBoard />
        </div>
      </div>
    </>
  );
}
