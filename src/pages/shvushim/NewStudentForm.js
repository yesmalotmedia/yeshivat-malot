import React, { useState, useContext, memo } from "react";
import { AppContext } from "../../App";
import TanksMessage from "../../components/elements/TanksMessage";
import HeroSection from "../../components/elements/HeroSection";

const GOOGLE_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbxWCQYN_4zdDMG0ek6MfE5FCvAa_TAzNiS6GUgBbZQjq42vNMqbIbCgCy31y2OVG0K1/exec";

const STEPS = ["פרטי תלמיד", "כתובת ופרטי קשר", "פרטי הורים", "הערות ושליחה"];

const REQUIRED_FIELDS_BY_STEP = {
  0: [
    "first_name",
    "last_name",
    "id_number",
    "birth_hebrew",
    "birth_gregorian",
    "highschool",
    "last_rav",
  ],
  1: ["street", "neighborhood", "city", "email", "mobile_phone"],
  2: [],
  3: [],
};

const REQUIRED_FIELDS = new Set([
  ...REQUIRED_FIELDS_BY_STEP[0],
  ...REQUIRED_FIELDS_BY_STEP[1],
]);

const InputField = memo(function InputField({
  name,
  label,
  type = "text",
  value,
  onChange,
  styles,
  placeholder,
  maxLength,
}) {
  const isRequired = REQUIRED_FIELDS.has(name);

  return (
    <div style={styles.field}>
      <label style={styles.label}>
        {label}
        {isRequired && <span style={styles.star}>*</span>}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
});

export default function NewStudentForm() {
  const { colors, responsive } = useContext(AppContext);

  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    id_number: "",
    birth_hebrew: "",
    birth_gregorian: "",
    highschool: "",
    last_rav: "",

    street: "",
    neighborhood: "",
    city: "",
    zip: "",
    email: "",
    mobile_phone: "",
    home_phone: "",

    father_name: "",
    father_job: "",
    father_phone: "",
    father_email: "",

    mother_name: "",
    mother_job: "",
    mother_phone: "",
    mother_email: "",

    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // לוגיקה לעיצוב מספרי טלפון (נייד/בית/הורים)
    if (name.includes("phone")) {
      let cleaned = value.replace(/\D/g, ""); // הסרת תווים שאינם ספרות
      cleaned = cleaned.substring(0, 10); // מקסימום 10 ספרות

      let formatted = cleaned;
      if (cleaned.length > 3) {
        formatted = `${cleaned.substring(0, 3)}-${cleaned.substring(3)}`;
      }
      setFormState((p) => ({ ...p, [name]: formatted }));
      return;
    }

    // לוגיקה לתעודת זהות (רק ספרות, עד 9 תווים)
    if (name === "id_number") {
      const cleaned = value.replace(/\D/g, "").substring(0, 9);
      setFormState((p) => ({ ...p, [name]: cleaned }));
      return;
    }

    // שאר השדות
    setFormState((p) => ({ ...p, [name]: value }));
  };

  const validateStep = (s) =>
    (REQUIRED_FIELDS_BY_STEP[s] || []).every(
      (f) => formState[f] && formState[f].toString().trim() !== ""
    );

  const next = () => {
    if (!validateStep(step)) {
      alert("נא למלא את כל שדות החובה בשלב זה");
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    if (!validateStep(step)) {
      alert("נא למלא את כל שדות החובה");
      return;
    }

    setIsLoading(true);
    const body = new URLSearchParams(formState).toString();

    try {
      await fetch(GOOGLE_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    wrapper: {
      maxWidth: responsive("860px", "85%", "90%"),
      margin: "40px auto",
      padding: responsive(24, 24, 16),
      background: colors.white,
      borderRadius: 20,
      boxShadow: "rgba(0,0,0,0.24) 0px 3px 8px",
      direction: "rtl",
    },
    stepTitle: {
      fontSize: responsive(24, 22, 20),
      fontWeight: 700,
      color: colors.darkBlue,
      marginBottom: 20,
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: responsive("1fr 1fr", "1fr 1fr", "1fr"),
      gap: 14,
      padding: responsive(0, 0, 12),
    },
    field: { display: "flex", flexDirection: "column", gap: 6 },
    label: { fontWeight: 600, color: colors.darkBlue },
    star: { color: "#d32f2f", marginRight: 4 },
    input: {
      border: `2px solid ${colors.darkBlue}`,
      borderRadius: 30,
      height: 44,
      paddingRight: 14,
      fontSize: "1rem",
      outline: "none",
    },
    textarea: {
      border: `2px solid ${colors.darkBlue}`,
      borderRadius: 18,
      padding: 14,
      height: 130,
      fontSize: "1rem",
      outline: "none",
      width: "100%",
      backgroundColor: isFocused ? "#f0f8ff" : "white",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 30,
      gap: 12,
    },
    btn: {
      background: colors.darkBlue,
      color: "white",
      border: "none",
      borderRadius: 30,
      padding: "10px 26px",
      fontSize: 16,
      cursor: "pointer",
      opacity: isLoading ? 0.6 : 1,
    },
    softSectionTitle: {
      gridColumn: "1 / -1",
      marginTop: 16,
      marginBottom: 4,
      fontWeight: 600,
      color: colors.darkBlue,
      opacity: 0.85,
    },
    stepsIndicator: {
      alignSelf: "center",
      fontWeight: 600,
      color: colors.darkBlue,
      fontSize: "0.95rem",
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage={"contactHero.png"}
        title={"רישום לישיבת מעלות"}
        subTitle={`שלב ${step + 1} מתוך ${STEPS.length}`}
        titleColor={colors.white}
        height={responsive("50vmin", "50vmin", "70vmin")}
        marginTop={responsive("50px", "90px", "90px")}
      />

      <div style={styles.wrapper}>
        {!isSuccess && (
          <>
            <div style={styles.stepTitle}>{STEPS[step]}</div>

            <form onSubmit={(e) => e.preventDefault()}>
              {step === 0 && (
                <div style={styles.grid}>
                  <InputField
                    name="first_name"
                    label="שם פרטי"
                    value={formState.first_name}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="last_name"
                    label="שם משפחה"
                    value={formState.last_name}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="id_number"
                    label="תעודת זהות"
                    value={formState.id_number}
                    onChange={handleChange}
                    styles={styles}
                    maxLength={9}
                  />
                  <InputField
                    name="birth_hebrew"
                    label="תאריך לידה עברי"
                    value={formState.birth_hebrew}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="birth_gregorian"
                    label="תאריך לידה לועזי"
                    type="date"
                    value={formState.birth_gregorian}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="highschool"
                    label="ישיבה תיכונית"
                    value={formState.highschool}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="last_rav"
                    label='שם הר"מ האחרון'
                    value={formState.last_rav}
                    onChange={handleChange}
                    styles={styles}
                  />
                </div>
              )}

              {step === 1 && (
                <div style={styles.grid}>
                  <InputField
                    name="street"
                    label="רחוב ומספר"
                    value={formState.street}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="neighborhood"
                    label="שכונה"
                    value={formState.neighborhood}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="city"
                    label="יישוב"
                    value={formState.city}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="zip"
                    label="מיקוד"
                    value={formState.zip}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="email"
                    label="אימייל"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="mobile_phone"
                    label="טלפון נייד"
                    type="tel"
                    value={formState.mobile_phone}
                    onChange={handleChange}
                    styles={styles}
                    maxLength={11}
                    placeholder="05x-xxxxxxx"
                  />
                  <InputField
                    name="home_phone"
                    label="טלפון בבית"
                    type="tel"
                    value={formState.home_phone}
                    onChange={handleChange}
                    styles={styles}
                    maxLength={11}
                  />
                </div>
              )}

              {step === 2 && (
                <div style={styles.grid}>
                  <div style={styles.softSectionTitle}>פרטי האב</div>
                  <InputField
                    name="father_name"
                    label="שם האב"
                    value={formState.father_name}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="father_job"
                    label="עיסוק האב"
                    value={formState.father_job}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="father_phone"
                    label="טלפון נייד - האב"
                    type="tel"
                    value={formState.father_phone}
                    onChange={handleChange}
                    styles={styles}
                    maxLength={11}
                  />
                  <InputField
                    name="father_email"
                    label="אימייל האב"
                    type="email"
                    value={formState.father_email}
                    onChange={handleChange}
                    styles={styles}
                  />

                  <div style={styles.softSectionTitle}>פרטי האם</div>
                  <InputField
                    name="mother_name"
                    label="שם האם"
                    value={formState.mother_name}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="mother_job"
                    label="עיסוק האם"
                    value={formState.mother_job}
                    onChange={handleChange}
                    styles={styles}
                  />
                  <InputField
                    name="mother_phone"
                    label="טלפון נייד - האם"
                    type="tel"
                    value={formState.mother_phone}
                    onChange={handleChange}
                    styles={styles}
                    maxLength={11}
                  />
                  <InputField
                    name="mother_email"
                    label="אימייל האם"
                    type="email"
                    value={formState.mother_email}
                    onChange={handleChange}
                    styles={styles}
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <label style={styles.label}>הערות</label>
                  <textarea
                    name="notes"
                    value={formState.notes}
                    onChange={handleChange}
                    style={styles.textarea}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
              )}

              <div style={styles.nav}>
                {step > 0 && (
                  <button type="button" style={styles.btn} onClick={back}>
                    חזרה
                  </button>
                )}

                <div style={styles.stepsIndicator}>
                  שלב {step + 1} מתוך {STEPS.length}
                </div>

                {step < STEPS.length - 1 ? (
                  <button type="button" style={styles.btn} onClick={next}>
                    המשך
                  </button>
                ) : (
                  <button
                    type="button"
                    style={styles.btn}
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "שולח..." : "שלח טופס"}
                  </button>
                )}
              </div>
            </form>
          </>
        )}

        {isSuccess && (
          <TanksMessage
            msg="הרשמתך לישיבה התקבלה בהצלחה, ברוך הבא! מברכים אותך בהמשך שנה טובה ומוצלחת"
            color={colors.darkBlue}
          />
        )}
      </div>
    </>
  );
}
