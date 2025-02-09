import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";
import TanksMessage from "../../components/elements/TanksMessage";

export default function Form({ title, lesson_name }) {
  const formRef = useRef();
  const { colors, isMobile, responsive } = useContext(AppContext);
  const [formState, setFormState] = useState({
    user_name: "",
    // user_phone: "",
    user_email: "",
    message: "",
    lesson_name: lesson_name,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_oktpopo", // Your EmailJS service ID
        "template_xaadncq", // Your EmailJS template ID
        formRef.current,
        "6nT-r6G4qY9-xawTb" // Your public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const styles = {
    form: {
      width: responsive("60%", "80vmin", "90vmin"),
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 20,
      height: "100%",
      marginInline: "auto",
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: 35,
      padding: 20,
      textAlign: "center",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      paddingTop: 30,
      justifyContent: "center",
      gap: 20,
    },
    label: {
      fontWeight: 600,
      fontSize: responsive("1.3rem", "1.3rem", "1.1rem"),
      color: colors.darkBlue,
      width: responsive("60px", "50px", "40px"),
    },
    input: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: responsive("80%", "80%", "75%"),
      height: responsive("50px", "45px", "35px"),
      borderRadius: 30,
      fontWeight: 500,
      fontSize: responsive("1.2rem", "1rem", "0.9rem"),
      paddingRight: 20,
      resize: "none",
    },
    message: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: responsive("80%", "80%", "75%"),
      height: 90,
      borderRadius: 30,
      fontWeight: 300,
      fontSize: 18,
      padding: "10px 20px 0 10px",
      resize: "none",
      overflow: "hidden",
      backgroundColor: isFocused ? "#f0f8ff" : "white",
      transition: "background-color 0.3s ease",
    },
    btn: {
      outline: "none",
      background: colors.darkBlue,
      width: "170%",
      padding: "15px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      cursor: "pointer",
      color: colors.white,
      transition: "box-shadow 0.3s ease",
      position: "relative",
      left: 30,
      border: "none",
    },
    btnHover: {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    successMassage: {
      padding: 100,
      fontSize: responsive("1.2rem", "1rem", "0.9rem"),
      color: colors.darkBlue,
      textAlign: "center",
    },
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div style={styles.form}>
      {!isSuccess && <h2 style={styles.title}>{title}</h2>}
      {isSuccess ? (
        <TanksMessage
          msg={"תודה על פנייתך! נחזור אליך בהקדם"}
          color={colors.darkBlue}
        />
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* שדות גלויים */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}> שם </label>
            <input
              style={styles.input}
              type="text"
              name="user_name" // Name attribute should match the template field
              value={formState.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> מייל </label>
            <input
              style={styles.input}
              type="email"
              name="user_email" // Name attribute should match the template field
              value={formState.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> הודעה </label>
            <textarea
              style={styles.message}
              name="message" // Name attribute should match the template field
              value={formState.message}
              onChange={handleChange}
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </div>

          {/* שדה מוסתר */}
          <input
            type="hidden"
            name="lesson_name" // Name attribute should match the template field
            value={formState.lesson_name}
          />

          {/* כפתור שליחה */}
          <div style={styles.inputWrapper}>
            <label style={styles.label}></label>
            <button
              type="submit"
              style={{ ...styles.btn, ...(isHovered && styles.btnHover) }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              שלח
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
