import React, { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { useState } from "react";
import ModalBg from ".././elements/ModalBg";

const MobileNav = () => {
  const {
    pagesList,
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
  } = useContext(AppContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  //styles
  const styles = {
    container: {
      zIndex: 800,
      width: "65%",
      maxWidth: 400,
      backgroundColor: bgColors.darkBlue,
      height: 550,
      padding: 10,
      position: "fixed",
      top: isMobileNavOpen ? -100 : -800,
      left: "50%",
      opacity: isMobileNavOpen ? 100 : 0,
      transform: "translateX(-50%) ",
      transition:
        "all 1s cubic-bezier(0.25, 0.1, 0.25, 1), transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    subContainer: { transform: "translateY(50%) " },
    closeBtn: {
      color: colors.white,
      position: "absolute",
      top: -20,
      fontSize: "3vmax",
      cursor: "pointer",
    },

    menu: {
      color: colors.white,
      textDecoration: "none",
      fontWeight: 500,
      padding: "10px 10px",
      display: "flex",
      justifyContent: "center",
      width: "auto",
    },
    li: {
      listStyle: "none",
    },
    hoverMenu: {
      background: colors.darkBlue,
      color: colors.white,
      borderRadius: 10,
      marginRight: 10,
    },
    activeMenu: {
      background: colors.darkBlue,
      color: colors.white,
      borderRadius: 10,
    },
  };

  const isActive = (path) => {
    return (
      location.pathname === path ||
      matchPath({ path: `${path}/*`, end: false }, location.pathname)
    );
  };
  return (
    <div>
      {isMobileNavOpen && <ModalBg />}
      <div style={styles.container}>
        <div style={styles.subContainer}>
          <div
            onClick={() => setIsMobileNavOpen(false)}
            style={styles.closeBtn}
          >
            x
          </div>{" "}
          {pagesList.map((item, index) => (
            <ul style={styles.ul} key={index}>
              <li
                style={styles.li}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setIsMobileNavOpen(false)}
              >
                <NavLink
                  style={{
                    ...styles.menu,
                    ...(index === hoveredIndex && styles.hoverMenu),
                    ...(isActive(item.path) && styles.activeMenu),
                  }}
                  to={item.path}
                  activeClassName="active"
                >
                  {item.name}
                </NavLink>
              </li>
            </ul>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
