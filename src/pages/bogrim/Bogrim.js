import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import SideMenu from "../../components/SideMenu";
import BooksCollection from "../publishing/BooksCollection";
import NoticeBoard from "./NoticeBoard";
import { motion, AnimatePresence } from "framer-motion";
import KeepInTouch from "./KeepInTouch";

export default function Bogrim() {
  const { colors, responsive } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("1");

  const styles = {
    container: {
      display: "flex",
      marginInline: "auto",
      width: responsive("85%", "90%", "100%"),
      alignItems: "flex-start",
      justifyContent: responsive("", "center", "center"),
      gap: 50,
      position: responsive("static", "static", "relative"),
    },
    title: {
      textAlign: "center",
      marginTop: 10,
      color: colors.darkBlue,
      fontSize: responsive("3vw", "5vw", "8vw"),
    },
  };

  const sections = [
    {
      id: "1",
      title: "שומרים על קשר",
      imgSrc: "/bogrim-icon1.png",
      component: <KeepInTouch titleStyle={styles.title} />,
    },
    {
      id: "2",
      title: "עלון לבוגרים",
      imgSrc: "/bogrim-icon2.png",
      component: <BooksCollection titleStyle={styles.title} />,
    },
    {
      id: "3",
      title: "לוח מודעות",
      imgSrc: "/bogrim-icon3.png",
      component: <NoticeBoard titleStyle={styles.title} />,
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
        title={"בוגרים"}
        subTitle={" בוגרי ישיבת מעלות לדורותיה"}
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
            initial={{ opacity: 0, y: 10 }} // אנימציה בהתחלה
            animate={{ opacity: 1, y: 0 }} // אנימציה בכניסה
            exit={{ opacity: 0, y: -10 }} // אנימציה ביציאה
            transition={{ duration: 0.1 }} // משך המעבר
          >
            {activeComponent}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
