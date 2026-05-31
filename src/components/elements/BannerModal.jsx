import { useState, useEffect } from "react";

// ─── שנה את התמונה כאן ──────────────────────────────────────────
const BANNER_IMAGE = "shabatKlita.jpeg";
// ────────────────────────────────────────────────────────────────

const styles = {
  backdrop: (visible) => ({
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    transition: "opacity 0.3s ease",
  }),
  modal: (visible) => ({
    position: "relative",
    width: 460,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "row-reverse",
    transform: visible
      ? "translateY(0) scale(1)"
      : "translateY(20px) scale(0.97)",
    opacity: visible ? 1 : 0,
    transition:
      "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
  }),
  closeBtn: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 10,
    background: "rgba(0,0,0,0.5)",
    border: "none",
    borderRadius: "50%",
    width: 26,
    height: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    fontSize: 13,
    lineHeight: 1,
  },
  imageCol: {
    width: "63%",
    flexShrink: 0,
    position: "relative",
  },
  bannerImg: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textCol: {
    width: "37%",
    backgroundColor: "#4e6749",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 16px",
    textAlign: "center",
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.75)",
    margin: 0,
    lineHeight: 1.55,
  },
  cta: {
    marginTop: 4,
    padding: "7px 16px",
    backgroundColor: "#f0a500",
    color: "#111",
    fontSize: 12,
    fontWeight: 700,
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
  },
};

export default function BannerModal({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 350);
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  return (
    <div
      style={styles.backdrop(visible)}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div style={styles.modal(visible)}>
        <button style={styles.closeBtn} onClick={handleClose} aria-label="סגור">
          ✕
        </button>

        {/* טקסט — שמאל */}
        <div style={styles.textCol}>
          <h2 style={styles.title}> בואו להכיר את הבית החדש שלכם </h2>
          <p style={styles.subtitle}>
            שבת חוקת<br></br> ה תמוז 20/6
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIzpCcFCfAOUUNQOd9hnlX8-AB6SsDygraBmZBrzeZSyu0Gg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.cta,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            לפרטים נוספים
          </a>
        </div>

        {/* תמונה — ימין */}
        <div style={styles.imageCol}>
          <img src={BANNER_IMAGE} alt="banner" style={styles.bannerImg} />
        </div>
      </div>
    </div>
  );
}
