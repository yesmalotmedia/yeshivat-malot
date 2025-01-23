import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Socials from "./Socials";
import Form from "./Form";

export default function Contact() {
  const { colors, responsive } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      flexDirection: responsive("row", "column-reverse", "column-reverse"),
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    socialContainer: {
      width: responsive("70vmin", "70vmin", "90vmin"),
      margin: responsive("50px 30px 0 0", "50px -100px 0 0", "50px 10px 0 0"),
    },
    formContainer: {
      marginTop: "-10vmin",
      width: "100%",
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage={"contactHero.png"}
        title={"נשמח לדבר איתכם"}
        subTitle={" השאירו פרטים ונחזור אליכם בהקדם "}
        titleColor={colors.white}
        height={responsive("60vmin", "60vmin", "85vmin")}
        marginTop={responsive("50px", "90px", "90px")}
      />
      <div style={styles.container}>
        <div style={styles.socialContainer}>
          <Socials />
        </div>
        <div style={styles.formContainer}>
          <Form />
        </div>
      </div>
    </>
  );
}
