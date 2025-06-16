import React, { useContext, useEffect, useState, useCallback } from "react";
import { AppContext } from "../../../App";
import Button from "../../../components/elements/Button";
import SelectInput from "./SelectInput";
import { useNavigate } from "react-router-dom";
import getMainCategories from "../../../assets/getMainCategories";
import getCategoryIdByName from "../../../assets/geCategoryIdByName";

const SideBarSearch = ({
  setLesson,
  selectedTopic,
  setSelectedTopic,
  setSelectedRabbi,
  handleToggle,
  selectedRabbi,
}) => {
  const navigate = useNavigate();
  const {
    responsive,
    colors,
    bgColors,
    shadow,
    isMobile,
    rabbiesData,
    categories,
    getCategoriesByParent,
    setlessonsFilter,
    searchQuery,
    setSearchQuery,
    setCategoryParam,
  } = useContext(AppContext);

  const [tempSearchQuery, setTempSearchQuery] = useState(searchQuery); // ערך זמני להקלדה
  const [selectedMasechet, setSelectedMasechet] = useState("");
  const [videoChecked, setVideoChecked] = useState(true);
  const [audioChecked, setAudioChecked] = useState(true);
  const [textChecked, setTextChecked] = useState(true);

  // styles
  const styles = {
    container: {
      backgroundColor: "transparent",
      borderRadius: responsive(50, 0, 0),
      paddingBottom: 100,
      paddingTop: 30,
      // width: responsive("90%", "100%", "100%"),
      // maxWidth: responsive(1200, "100%", "100%"),
      // maxHeight: responsive(700, "100vh", "100%"),
      height:30,
      width:isMobile?'90%':'60%',
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      flexDirection: "column",
      margin:'auto',
      position:'relavite'
    },
    searchContainer: {
      position: "relative",
      width: "90%",
      marginBottom: 20,
    },
    searchInput: {
      padding: "10px 12px",
      borderRadius: 50,
      width: "100%",
      outline: "none",
      border: `solid 1px ${colors.darkBlue}`,
      color: colors.darkBlue,
      fontWeight: 500,
      paddingRight: 10,
      fontSize: 17,
    },
    searchIcon: {
      position: "absolute",
      left: 10,
      top: "50%",
      width: 20,
      height: 20,
    },
    lable: {
      color: colors.darkBlue,
      fontSize: 20,
      fontWeight: 500,
      padding: 10,
    },
    clearAll: {
      border: `1px solid ${colors.darkBlue}`,
      borderRadius: 20,
      padding: "7px 14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      color: colors.darkBlue,
      fontSize: 17,
      fontWeight: 500,
      margin: "0 170px 20px 0",
    },
    btnContainer: {
      width: "100%",
      margin: responsive("", "", "0 0 40% 0"),
      display: "flex",
      justifyContent: "center",
    },
  };

  // חיפוש חופשי
  const freeSearch = useCallback(() => {
    const formData = {
      freeQuery: searchQuery,
    };
    setlessonsFilter(formData);
  }, [searchQuery, setlessonsFilter]);

  // פילטור לפי קטגוריות
  const filteringSearch = useCallback(() => {
    const formData = {
      freeQuery: searchQuery,
      category: selectedTopic,
      masechet: selectedMasechet,
      rabbiName: selectedRabbi,
      type: {
        video: videoChecked,
        audio: audioChecked,
        text: textChecked,
      },
    };
    setlessonsFilter(formData);
  }, [
    searchQuery,
    selectedTopic,
    selectedMasechet,
    selectedRabbi,
    videoChecked,
    audioChecked,
    textChecked,
    setlessonsFilter,
  ]);

  // חיפוש אוטומטי - רק בדסקטופ
  useEffect(() => {
    if (!isMobile) {
      freeSearch();
    }
  }, [searchQuery, freeSearch, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      filteringSearch();
    }
  }, [
    selectedRabbi,
    selectedTopic,
    selectedMasechet,
    videoChecked,
    audioChecked,
    textChecked,
    filteringSearch,
    isMobile,
  ]);

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setTempSearchQuery(value); // תמיד לעדכן את ה-input

    if (!isMobile) {
      setSearchQuery(value); // רק בדסקטופ לעדכן גם את החיפוש האמיתי
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate("/BeitHamidrash");
    setLesson(undefined);
    setSearchQuery(tempSearchQuery); // מעדכן את החיפוש רק בלחיצה
    handleToggle(); // סוגר את חלון החיפוש
  };

  const handleSelectChange = useCallback(
    (e) => {
      navigate("/BeitHamidrash");
      setLesson(undefined);
      const { value } = e.target;
      const categoryId = getCategoryIdByName(value, categories);
      setCategoryParam(categoryId);
      setSelectedTopic(value);
      setSearchQuery(""); // מאפס את החיפוש החופשי
    },
    [
      categories,
      setSelectedTopic,
      setCategoryParam,
      setSearchQuery,
      navigate,
      setLesson,
    ]
  );

  return (
    <form style={styles.container} onSubmit={(e) => e.preventDefault()}>
      {/* {isMobile && (
        <div style={styles.clearAll}>
          <img src="/clearAll.svg" alt="Clear All" />
          <span>נקה הכל</span>
        </div>
      )} */}

      {/* <div style={styles.searchContainer}>
        <div style={styles.lable}>חיפוש חופשי </div>
        <input
          style={styles.searchInput}
          placeholder="הקלידו נושא או מילת מפתח"
          value={tempSearchQuery}
          onChange={handleSearchQueryChange}
        />
        <img src={"/searchIcon.png"} alt="Search" style={styles.searchIcon} />
      </div> */}

      {/* {isMobile && (
        <div style={styles.btnContainer}>
          <Button
            color={colors.darkBlue}
            bgColor={bgColors.yellow}
            hoveredBgColor={bgColors.darkBlueGradient}
            title={"בצע חיפוש"}
            fontSize={20}
            fontWeight={500}
            borderRadius={50}
            width={"90%"}
            arrow={true}
            onClick={handleButtonClick}
          />
        </div>
      )}

      <br /> */}
<div style={styles.lable}>חפש שיעור</div>
      <SelectInput
        options={getMainCategories(categories, 211)}
        value={selectedTopic}
        onChange={handleSelectChange}
      />

      {/* <div style={styles.lable}>הרבנים</div>
      <SelectInput
        options={rabbiesData}
        value={selectedRabbi}
        onChange={(e) => setSelectedRabbi(e.target.value)}
      /> */}

      <br />

      <style>{`::placeholder { color: ${colors.darkBlue}; }`}</style>
    </form>
  );
};

export default SideBarSearch;
