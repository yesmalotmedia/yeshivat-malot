// import React, { useContext } from "react";
// import HeroSection from "../../components/elements/HeroSection";
// import BooksCollection from "./BooksCollection";

// import { AppContext } from "../../App";
// import Filters from "./Filters";
// import ComingSoon from "../ComingSoon";

// export default function Publishing() {
//   const { colors, isMobile, responsive, parsedPublishData } =
//     useContext(AppContext);
//   console.log(parsedPublishData);

//   const styles = {
//     mainContainer: {
//       width: "90%",
//       marginTop: 30,
//       marginInline: "auto",
//     },
//     preview: {
//       display: "flex",
//       gap: "20px",
//     },
//     filterBtn: {
//       margin: "60px 0",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   };
//   return (
//     <>
//       <HeroSection
//         title={"הוצאה לאור "}
//         backgroundImage={"/publishingHero.png"}
//         subTitle={"מאמרים חוברות וספרים שיצאו "}
//         titleColor={colors.white}
//         height={responsive("60vmin", "60vmin", "85vmin")}
//         marginTop={responsive("50px", "90px", "90px")}
//       />
//       <div style={styles.mainContainer}>
//         <div style={styles.filterBtn}>{/* <Filters /> */}</div>
//         <div style={styles.preview}>
//           <BooksCollection />
//         </div>
//         {/* <ComingSoon /> */}
//       </div>
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import SideMenu from "../../components/SideMenu";
import BooksCollection from "../publishing/BooksCollection";
import { motion, AnimatePresence } from "framer-motion";

export default function Publishing() {
  const { colors, responsive, useSideMenuSection } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("1");
  const { container, leftSection } = useSideMenuSection();

  const styles = {
    container: container,

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
      title: " ספרי ראש הישיבה",
      imgSrc: "/bogrim-icon2.png",
      component: (
        <BooksCollection
          titleStyle={styles.title}
          isRoshYeshiva={true}
          dataType={"books"}
        />
      ),
    },
    {
      id: "2",
      title: "ספרי רבני הישיבה",
      imgSrc: "/bogrim-icon2.png",
      component: (
        <BooksCollection
          titleStyle={styles.title}
          isRoshYeshiva={false}
          dataType={"books"}
        />
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
        title={"הוצאה לאור"}
        subTitle={'ספרי ראש הישיבה והרמי"ם'}
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
