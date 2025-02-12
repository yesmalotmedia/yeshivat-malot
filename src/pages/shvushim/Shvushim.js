import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import SideMenu from "../../components/SideMenu";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";
import Introduction from "./Introduction";
import Fqa from "./Fqa";
import Team from "./Team";

export default function Shvushim() {
  const { colors, responsive } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("1");

  const styles = {
    container: {
      display: "flex",
      marginInline: "auto",
      width: responsive("", "90%", "100%"),
      flexDirection: responsive("", "column", "column"),
      alignItems: responsive("flex-start", "center", "center"),
      justifyContent: responsive("", "center", "center"),
      gap: 50,
    },
    title: {
      textAlign: "center",
      marginTop: 10,
      color: colors.darkBlue,
      fontSize: "3.5vw",
    },
  };

  const sections = [
    {
      id: "1",
      title: "ברוכים הבאים",
      imgSrc: "/bogrim-icon2.png",
      component: <Welcome titleStyle={styles.title} />,
    },
    {
      id: "2",
      title: "ישיבת מעלות, נעים להכיר",
      imgSrc: "/introductionIcon.png",
      component: <Introduction titleStyle={styles.title} />,
    },
    {
      id: "3",
      title: "טיפים ושאלות נפוצות",
      imgSrc: "/faqIcon.png",
      component: <Fqa titleStyle={styles.title} />,
    },
    {
      id: "4",
      title: "צוות הישיבה",
      imgSrc: "/teamIcon.png",
      component: <Team titleStyle={styles.title} />,
    },
  ];

  const activeSectionData = sections.find(
    (section) => section.id === activeSection
  );
  const activeComponent = activeSectionData
    ? React.cloneElement(activeSectionData.component, {
        title: activeSectionData.title,
      })
    : null;
  return (
    <>
      <HeroSection
        title={'שבושי"ם'}
        subTitle={'כל מה שצריך לדעת על שבו"ש בישיבת מעלות '}
        isSubscribe={false}
        titleColor={colors.white}
        height={responsive("60vmin", "60vmin", "60vmin")}
        marginTop={responsive("30px", "50px", "120px")}
        backgroundImage={"/publishingHero.png"}
      />
      <div style={styles.container}>
        <SideMenu
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* אנימציית מעבר חלקה */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // גורם לריענון האנימציה עם שינוי המקטע
            initial={{ opacity: 0, y: 2 }} // אנימציה בהתחלה
            animate={{ opacity: 1, y: 0 }} // אנימציה בכניסה
            exit={{ opacity: 0, y: -2 }} // אנימציה ביציאה
            transition={{ duration: 0.3 }} // משך המעבר
          >
            {activeComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
