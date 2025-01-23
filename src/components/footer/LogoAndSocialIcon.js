import { useContext } from "react";
import SocialIconData from "./SocialIconData";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function LogoAndSocialIcon() {
  const { responsive } = useContext(AppContext);
  const navigate = useNavigate();

  const styles = {
    logoWhite: {
      maxHeight: 90,
      marginBottom: "30px",
    },
    footerColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    socialLogoWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 9,
    },
    socialLogoImage: {
      height: responsive("35px", "5vmax", "5vmax"),
      width: responsive("35px", "5vmax", "5vmax"),
      cursor: "pointer",
      margin: responsive("", "30px 10px", "30px 10px"),
    },
  };
  const showLogo = responsive(true, false, false);
  return (
    <div style={styles.footerColumn}>
      {showLogo && (
        <img
          style={styles.logoWhite}
          src="/footerImages/logo-white.png"
          alt="Logo"
        />
      )}

      <div style={styles.socialLogoWrapper}>
        {SocialIconData.map((item, index) => (
          <img
            key={index}
            style={styles.socialLogoImage}
            src={item.image}
            alt={item.alt}
            onClick={() => (window.location.href = item?.url)}
          />
        ))}
      </div>
    </div>
  );
}
