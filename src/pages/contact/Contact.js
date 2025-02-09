import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Socials from "./Socials";
import Form from "./Form";
import ContactDetails from "./ContactDetails";

export default function Contact() {
  const { colors, responsive } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      flexDirection: responsive("row", "column-reverse", "column-reverse"),
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "80%",
      gap: 1,
      margin: "auto",
      height: 450,
      transform: "translateY(-50px)",
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
        <ContactDetails />
        <Form />
      </div>
    </>
  );
}
