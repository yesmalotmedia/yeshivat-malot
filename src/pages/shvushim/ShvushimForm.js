import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import TanksMessage from "../../components/elements/TanksMessage";
import HeroSection from "../../components/elements/HeroSection";

const GOOGLE_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbz4RvYccSlL05hj7tDNnUYpJ4UKUTL03FCeAhqxlF9m1OrJaaA_S1vrCnJhtxTlb8cWLQ/exec";
export default function ShvushimForm({ title }) {
  const { colors, responsive } = useContext(AppContext);

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    id_number: "",
    phone: "",
    yeshiva: "",
    notes: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = new URLSearchParams(formState).toString();
    console.log(body);
    try {
      await fetch(GOOGLE_WEBHOOK, {
        method: "POST",
        body,
        mode: "no-cors",
      });

      setIsSuccess(true);
      setFormState({
        first_name: "",
        last_name: "",
        id_number: "",
        phone: "",
        yeshiva: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      alert("אירעה שגיאה, נסה שוב");
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    form: {
      width: responsive("90%", "85%", "90%"), // תופס רוב המסך במובייל
      maxWidth: 600, // מונע מתיחה מוגזמת במחשב
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 20,
      margin: "40px auto",
      padding: responsive("20px", "25px", "15px"),
      direction: "rtl", // מבטיח יישור לימין
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive(35, 30, 26),
      padding: "10px 0 20px 0",
      textAlign: "center",
    },
    inputWrapper: {
      display: "flex",
      flexDirection: responsive("row", "row", "column"), // במובייל - אחד מעל השני
      alignItems: responsive("center", "center", "flex-start"),
      paddingTop: 20,
      justifyContent: "center",
      gap: responsive(20, 15, 8),
      width: "90%",
      margin: "0 auto",
    },
    label: {
      fontWeight: 600,
      fontSize: responsive("1.1rem", "1.1rem", "1rem"),
      color: colors.darkBlue,
      width: responsive("100px", "90px", "100%"), // במובייל לוקח את כל השורה
      textAlign: "right",
    },
    input: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: "100%", // תמיד ממלא את המכולה שלו
      height: responsive(45, 45, 40),
      borderRadius: 30,
      fontSize: "1rem",
      paddingRight: 15,
      boxSizing: "border-box", // חשוב כדי שהפדינג לא יוסיף לרוחב
    },
    message: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: "100%",
      height: 100,
      borderRadius: 20,
      fontSize: "1rem",
      padding: "10px 15px",
      resize: "none",
      backgroundColor: isFocused ? "#f0f8ff" : "white",
      boxSizing: "border-box",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: 30,
    },
    btn: {
      background: colors.darkBlue,
      width: responsive("200px", "180px", "80%"),
      padding: "12px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      marginBottom: 10,
      cursor: "pointer",
      color: colors.white,
      border: "none",
      opacity: isLoading ? 0.6 : 1,
      transition: "all 0.3s ease",
    },
    btnHover: {
      boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
      transform: "translateY(-2px)",
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage={"contactHero.png"}
        title={'שבו"ש בישיבת מעלות'}
        subTitle={"טופס מילוי פרטים"}
        titleColor={colors.white}
        height={responsive("50vmin", "50vmin", "70vmin")}
        marginTop={responsive("50px", "90px", "90px")}
      />

      <div style={styles.form}>
        {!isSuccess && <h2 style={styles.title}>{title}</h2>}

        {isSuccess ? (
          <TanksMessage
            msg={"הפרטים נקלטו במערכת , תודה רבה"}
            color={colors.darkBlue}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            {[
              { label: "שם פרטי", name: "first_name", type: "text" },
              { label: "שם משפחה", name: "last_name", type: "text" },
              {
                label: "ת״ז",
                name: "id_number",
                type: "number",
                inputMode: "numeric",
              },
              { label: "טלפון", name: "phone", type: "tel", inputMode: "tel" },
              { label: "ישיבה", name: "yeshiva", type: "text" },
            ].map((field) => (
              <div key={field.name} style={styles.inputWrapper}>
                <label style={styles.label}>{field.label}</label>
                <input
                  style={styles.input}
                  name={field.name}
                  value={formState[field.name]}
                  onChange={handleChange}
                  type={field.type}
                  inputMode={field.inputMode}
                  required
                />
              </div>
            ))}

            <div style={styles.inputWrapper}>
              <label style={styles.label}>הערות</label>
              <textarea
                style={styles.message}
                name="notes"
                value={formState.notes}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            <div style={styles.btnContainer}>
              <button
                type="submit"
                style={{ ...styles.btn, ...(isHovered && styles.btnHover) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={isLoading}
              >
                {isLoading ? "שולח..." : "שלח"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
