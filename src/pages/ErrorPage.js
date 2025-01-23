import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ErrorPage() {
  const styles = {
    container: {
      position: "relative",
      top: 150,
      textAlign: "center",
      marginBottom: 150,
      width: "40vw",
      height: "60vh",
      marginInline: "auto",
      borderRadius: 30,
      background: "#EEF9ED",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
      color: "red",
    },

    message: {
      paddingTop: 40,
      direction: "rtl",
    },
    errorImg: {
      height: 150,
      margin: "50px 0",
    },
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        <img style={styles.errorImg} src="/error.png" alt="error image"></img>

        <h3 style={styles.message}>
          מצטער!! הדף לא נמצא. <br />
          אנא בדוק היטב את הכתובת או שהקישור נמחק
        </h3>
      </div>

      <Footer />
    </>
  );
}
