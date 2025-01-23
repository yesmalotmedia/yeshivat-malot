import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";
import LoaderAnimation from "./LoaderAnimation";
import TanksMessage from "./TanksMessage";

const Subscribe = () => {
  const form = useRef();
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const styles = {
    form: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      outline: "none",
      border: "none",
      height: responsive("3vmax", "4.7vmax", "4vmax"),
      width: responsive("30vmax", "80vmin", "80vmin"),
      padding: responsive(
        "15px 15px 15px 120px",
        "15px 15px 15px 120px",
        "20px 15px 20px 105px"
      ),
      fontSize: responsive(20, "3.6vmin", "3.6vmin"),
      fontWeight: 500,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    btn: {
      position: "absolute",
      left: 0,
      top: 0,
      outline: "none",
      border: "none",
      height: "100%",
      padding: "0 20px",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      background: isHovered ? colors.azure : colors.orange,
      color: colors.white,
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    arrow: {
      height: responsive("1vw", "13px", "13px"),
      marginRight: "10px",
      position: "relative",
      top: responsive(1, 0, -1),
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_oktpopo",
        "template_6tsbbvb",
        form.current,
        "6nT-r6G4qY9-xawTb"
      )
      .then(
        (result) => {
          setIsSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div style={styles.subscribe}>
      {isSuccess ? (
        <TanksMessage msg={"תודה שנרשמת"} color={colors.orange} />
      ) : isLoading ? (
        <LoaderAnimation isLoading={isLoading} color={colors.orange} />
      ) : (
        <form style={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            style={styles.input}
            type="email"
            name="user_email"
            placeholder="נא למלא את כתובת המייל"
            required
          ></input>
          <button style={styles.btn} type="submit">
            <img
              style={styles.arrow}
              src="/arrow-to-left.png"
              alt="arrow"
            ></img>
          </button>
        </form>
      )}
    </div>
  );
};

export default Subscribe;
