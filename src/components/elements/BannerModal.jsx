import { useState, useEffect } from "react";

// ─── שנה את התמונה כאן ──────────────────────────────────────────
const BANNER_IMAGE = "shabatKlita.jpeg";
// ────────────────────────────────────────────────────────────────

export default function BannerModal({ onClose }) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    const onResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 350);
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  const s = {
    backdrop: {
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
    },
    modal: {
      padding: 0,
      position: "relative",
      width: isMobile ? "100%" : 600,
      height: isMobile ? "22vw" : "auto",
      minHeight: 150,
      maxWidth: "100%",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "row",
      transform: visible
        ? "translateY(0) scale(1)"
        : "translateY(20px) scale(0.97)",
      opacity: visible ? 1 : 0,
      transition:
        "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
    },
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
    },
    imageCol: {
      width: isMobile ? "60%" : "55%",
      aspectRatio: "1113 / 685",
      flexShrink: 0,
      position: "relative",
      overflow: "hidden",
    },
    bannerImg: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    textCol: {
      width: isMobile ? "100%" : "45%",
      backgroundColor: "#4e6749",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px 20px",
      alignSelf: "stretch",
      textAlign: "center",
      gap: 8,
    },
    label: {
      fontSize: isMobile ? 12 : 20,
      fontWeight: 600,
      color: "rgba(255,255,255,0.6)",
      letterSpacing: "0.05em",
      margin: 0,
    },
    title: {
      fontSize: isMobile ? 12 : 17,
      fontWeight: 700,
      color: "#fff",
      margin: 0,
      lineHeight: 1.1,
    },
    subtitle: {
      fontSize: isMobile ? 12 : 13,
      color: "rgba(255,255,255,0.7)",
      margin: 0,
      lineHeight: 1.1,
    },
    cta: {
      marginTop: 6,
      padding: isMobile ? "4px 12px" : "8px 18px",
      backgroundColor: "#f0a500",
      color: "#111",
      fontSize: isMobile ? 12 : 13,
      fontWeight: 700,
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
    },
  };

  return (
    <div
      style={s.backdrop}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div style={s.modal}>
        <button style={s.closeBtn} onClick={handleClose} aria-label="סגור">
          ✕
        </button>

        {/* תמונה — ימין בדסקטופ, למעלה במובייל */}
        <div style={s.imageCol}>
          <img src={BANNER_IMAGE} alt="שבת קליטה במעלות" style={s.bannerImg} />
        </div>

        {/* טקסט — שמאל בדסקטופ, למטה במובייל */}
        <div style={s.textCol}>
          <p style={s.label}>שבת קליטה למשפחות</p>
          <h2 style={s.title}>בואו להכיר את הבית החדש שלכם</h2>
          <p style={s.subtitle}>שבת חוקת · ה׳ תמוז · 20/6</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeIzpCcFCfAOUUNQOd9hnlX8-AB6SsDygraBmZBrzeZSyu0Gg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={s.cta}
          >
            לפרטים נוספים
          </a>
        </div>
      </div>
    </div>
  );
}
