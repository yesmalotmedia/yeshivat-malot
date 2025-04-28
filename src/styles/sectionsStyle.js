import { useContext } from "react";
import { AppContext } from "../App";
import { title } from "framer-motion/m";

const useSideMenuSection = () => {
  const { responsive, colors } = useContext(AppContext);

  return {
    container: {
      display: "flex",
      marginInline: "auto",
      width: responsive("85%", "90%", "100%"),
      alignItems: "flex-start",
      justifyContent: responsive("", "center", "center"),
      gap: 50,
      position: responsive("static", "static", "relative"),
      minHeight: 1000,
      padding: responsive(80, 20, "20px 0"),
    },
    leftSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "",
      justifyContent: "",
      width: "85%",
      gap: 20,
      margin: "auto",
      marginTop: 50,
      color: colors.darkBlue,
    },
    title: {
      textAlign: "center",
      marginTop: 10,
      color: colors.darkBlue,
      fontSize: responsive("3vw", "5vw", "8vw"),
    },
    descriptionStyle: {},
  };
};

export default useSideMenuSection;
