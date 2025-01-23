import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "../elements/Button";
import colors from "../../styles/colors";
import bgColors from "../../styles/bg-colors";
const LessonPrevew = () => {
  // context
  const { colors, isMobile } = useContext(AppContext);

  // states
  // styles

  const styles = {
    container: {
      boxShadow: "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      borderRadius: "50px",
      width: "30%",
    },
    subContainer: {
      boxShadow: "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
      width: "90%",
      margin: "auto",
    },
    img: {},
    title: { color: colors.darkBlue, fontWeight: 500 },
  };

  // functions

  return (
    <div style={styles.container}>
      <div style={styles.subContainer}>
        <img />
        <div style={styles.title}></div>
      </div>
      <Button
        color={colors.white}
        bgColor={bgColors.orangeGradient}
        title={"לכל השיעורים האחרונים"}
      />
    </div>
  );
};

export default LessonPrevew;
