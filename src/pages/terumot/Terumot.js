import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import SideMenu from "../../components/SideMenu";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "../shvushim/Welcome";
import Introduction from "../shvushim/Introduction";
import Fqa from "../shvushim/Fqa";
import Team from "../shvushim/Team";

export default function Terumot() {
  const { colors, responsive, useSideMenuSection } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("1");
  const { container, leftSection, title } = useSideMenuSection();

  const styles = {
    container,
    title,
    contentWrapper: {
      flex: "2", // שני שלישים מהרוחב
      // minWidth: "500px",
    },
  };

  const sections = [
    {
      id: "1",
      title: "ברוכים הבאים",
      imgSrc: "/bogrim-icon2.png",
      component: (
        <Welcome titleStyle={styles.title} leftSection={leftSection} />
      ),
    },
    {
      id: "2",
      title: "נעים להכיר",
      imgSrc: "/introductionIcon.png",
      component: (
        <Introduction titleStyle={styles.title} leftSection={leftSection} />
      ),
    },
    {
      id: "3",
      title: "טיפים ושאלות",
      imgSrc: "/faqIcon.png",
      component: <Fqa titleStyle={styles.title} leftSection={leftSection} />,
    },
    {
      id: "4",
      title: "צוות הישיבה",
      imgSrc: "/teamIcon.png",
      component: <Team titleStyle={styles.title} leftSection={leftSection} />,
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
        title={"תרומות"}
        subTitle={"בואו להיות שותפים"}
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

        {/* <div style={styles.contentWrapper}> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // מרענן את האנימציה בעת החלפת מקטע
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {activeComponent}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* </div> */}
    </>
  );
}
