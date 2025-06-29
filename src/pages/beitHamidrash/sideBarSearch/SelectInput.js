import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../../App";

const SelectInput = ({
  options = [],
  value,
  onChange,
  placeholder = "חפש שיעור ",
}) => {
  const { colors } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState({});
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null);

  // גלילה חלקה מותאמת עם עצירה איטית
  const scrollSmoothTo = (element, target, duration = 700) => {
    const start = element.scrollTop;
    const change = target - start;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      element.scrollTop = start + change * eased;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // סגירה כשמקליקים מחוץ
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // גלילה פנימית מותאמת
  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const el = dropdownRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const targetScroll = el.scrollTop + delta;
      scrollSmoothTo(el, targetScroll, 100); // ← שליטה על מהירות העצירה
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [isOpen]);

  const handleSelect = (option) => {
    onChange({ target: { value: option.name } });
    setIsOpen(false);
    setSearchTerm("");
  };

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const markOpenSections = (list, term, openMap = {}) => {
    for (const opt of list) {
      const hasChildren =
        Array.isArray(opt.children) && opt.children.length > 0;
      const matches = opt.name.includes(term);
      const filteredChildren = hasChildren
        ? filterOptions(opt.children, term, false)
        : [];

      if (matches || filteredChildren.length > 0) {
        openMap[opt.id] = true;
        if (hasChildren) {
          markOpenSections(opt.children, term, openMap);
        }
      }
    }
    return openMap;
  };

  const filterOptions = (
    optionsList,
    term = searchTerm,
    trimChildren = true
  ) => {
    return optionsList
      .map((option) => {
        const matches = option.name.includes(term);
        const hasChildren =
          Array.isArray(option.children) && option.children.length > 0;
        const filteredChildren = hasChildren
          ? filterOptions(option.children, term, trimChildren)
          : [];

        return matches || filteredChildren.length > 0
          ? {
              ...option,
              children: trimChildren ? filteredChildren : option.children,
            }
          : null;
      })
      .filter(Boolean);
  };

  const filteredOptions =
    searchTerm.trim() !== ""
      ? filterOptions(options, searchTerm, false)
      : options;

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const newOpen = markOpenSections(options, searchTerm);
      setOpenSections(newOpen);
    } else {
      setOpenSections({});
    }
  }, [searchTerm, options]);

  const styles = {
    container: {
      position: "relative",
      width: "90%",
      marginBottom: 20,
      backgroundColor: "#FFFFFF80",
      borderRadius: 30,
    },
    control: {
      padding: "10px 12px",
      borderRadius: 50,
      border: `1px solid ${colors.darkBlue}`,
      fontSize: 17,
      color: value ? colors.darkBlue : "grey",
      fontWeight: 500,
      cursor: "pointer",
      userSelect: "none",
      textAlign: "center",
    },
    dropdown: {
      position: "absolute",
      top: 40,
      left: 0,
      right: 0,
      background: "white",
      border: `1px solid ${colors.darkBlue}`,
      borderRadius: 10,
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      zIndex: 10,
      maxHeight: 450,
      transition: "opacity 0.25s ease, transform 0.25s ease",
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? "translateY(0px)" : "translateY(-5px)",
      pointerEvents: isOpen ? "auto" : "none",
    },
    dropdownContent: {
      maxHeight: 240,
      overflowY: "auto",
      // scrollBehavior: "smooth", ← הוסר כדי לא להפריע ל-JS
    },
    stickySearchWrapper: {
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      zIndex: 1,
      borderBottom: `1px solid ${colors.darkBlue}`,
    },
    searchInput: {
      padding: "10px",
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: 16,
      color: colors.darkBlue,
    },
    option: (level = 0) => ({
      padding: `10px ${12 + level * 12}px`,
      cursor: "pointer",
      fontSize: 15,
      fontWeight: level === 0 ? 600 : 400,
      color: colors.darkBlue,
    }),
    toggleHeader: (level = 0) => ({
      padding: `10px ${12 + level * 12}px`,
      fontWeight: level === 0 ? 600 : 400,
      fontSize: 16,
      backgroundColor: "#f9f9f9",
      cursor: "pointer",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 8,
      color: colors.darkBlue,
    }),
  };

  const renderOptions = (opts, level = 0) => {
    return opts.map((option) => {
      const hasChildren =
        Array.isArray(option.children) && option.children.length > 0;
      return (
        <div key={option.id}>
          {hasChildren ? (
            <div>
              <div style={styles.toggleHeader(level)}>
                <span
                  onClick={() => handleSelect(option)}
                  style={{ flexGrow: 1 }}
                >
                  {option.name}
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // מונע גם מהטקסט להידלק
                    toggleSection(option.id);
                  }}
                  style={{
                    marginRight: "auto",
                    cursor: "pointer",
                    padding: "0px 36px 0px 0px", // ← מגדיל שטח לחיצה
                    display: "inline-block",
                  }}
                >
                  {openSections[option.id] ? "▾" : "›"}
                </span>
              </div>

              {openSections[option.id] && (
                <div>{renderOptions(option.children, level + 1)}</div>
              )}
            </div>
          ) : (
            <div
              style={styles.option(level)}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div style={styles.container} ref={wrapperRef}>
      <div style={styles.control} onClick={() => setIsOpen(!isOpen)}>
        {placeholder}
      </div>

      <div style={styles.dropdown}>
        <div style={styles.stickySearchWrapper}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="חיפוש לפי נושא..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div
          className="dropdown-scroll"
          style={styles.dropdownContent}
          ref={dropdownRef}
        >
          {renderOptions(filteredOptions)}
          {filteredOptions.length === 0 && (
            <div style={{ padding: 10, color: "grey", textAlign: "center" }}>
              לא נמצאו תוצאות
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
