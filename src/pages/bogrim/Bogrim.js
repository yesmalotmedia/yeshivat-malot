import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import SideMenu from "../../components/SideMenu";
import BooksCollection from "../publishing/BooksCollection";
import NoticeBoard from "./NoticeBoard";
import { motion, AnimatePresence } from "framer-motion";
import KeepInTouch from "./KeepInTouch";
import Events from "./Events";

export default function Bogrim() {
  const { colors, responsive, useSideMenuSection } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("1");
  const { container, leftSection, title } = useSideMenuSection();

  const styles = {
    container: container,
    title,
  };

  const sections = [
    {
      id: "1",
      title: "שומרים על קשר",
      imgSrc: "/bogrim-icon1.png",
      component: (
        <KeepInTouch titleStyle={styles.title} leftSection={leftSection} />
      ),
    },
    {
      id: "2",
      title: "מפגשים ואירועים",
      imgSrc: "/events.png",
      component: <Events titleStyle={styles.title} leftSection={leftSection} />,
    },
    {
      id: "3",
      title: "עלון לבוגרים",
      imgSrc: "/bogrim-icon2.png",
      component: (
        <BooksCollection titleStyle={styles.title} leftSection={leftSection} />
      ),
    },
    {
      id: "4",
      title: "לוח מודעות",
      imgSrc: "/bogrim-icon3.png",
      component: (
        <NoticeBoard titleStyle={styles.title} leftSection={leftSection} />
      ),
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
        backgroundImage={"/bogrimHero.png"}
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
