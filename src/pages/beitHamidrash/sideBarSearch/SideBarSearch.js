import React, { useContext, useEffect, useState, useCallback } from "react";
import { AppContext } from "../../../App";
import Button from "../../../components/elements/Button";
import SelectInput from "./SelectInput";
import Checkbox from "./Checkbox";
import yerushalmiMasectot from "../../../data/yerushalmiMasectot";
import getMainCategories from "../../../assets/getMainCategories";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../assets/useFetch";
import usePostsFetch from "../../../assets/usePostsFetch";
import ExtractPostsData from "../../../assets/extractPostsData";
import useQueryPostFetch from "../../../assets/useQueryPostFetch";
import extractQueryPosts from "../../../assets/extractQueryPosts";
import getCategoryNameById from "../../../assets/getCategoryNameById";
import getCategoryIdByName from "../../../assets/geCategoryIdByName";
const SideBarSearch = ({
  selectedTopic,
  setSelectedTopic,
  setSelectedRabbi,
  handleToggle,
  selectedRabbi,
}) => {
  const navigate = useNavigate();
  //data
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
    lessonsFilter,
    setDisplayedVideos,
    setCategoryParam,
  } = useContext(AppContext);

  const [selectedValue, setSelectedValue] = useState(500);

  // states for form inputs
  const [categoriesOptions, setCategoriesOptions] = useState(
    getCategoriesByParent(categories, 3)
  );
  const [masectotOptions, setMasectotOptions] = useState();
  const [rabbiesOptions, setRabbiesOptions] = useState();

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMasechet, setSelectedMasechet] = useState("");
  const [videoChecked, setVideoChecked] = useState(true);
  const [audioChecked, setAudioChecked] = useState(true);
  const [textChecked, setTextChecked] = useState(true);

  const [fetchUrl, setFetchUrl] = useState();
  // styles
  const styles = {
    container: {
      backgroundColor: bgColors.white,
      borderRadius: responsive(50, 0, 0),
      paddingBottom: 100,
      paddingTop: 30,
      width: responsive("40%", "100%", "100%"),
      maxWidth: responsive(300, "100%", "100%"),
      maxHeight: responsive(700, "100vh", "100%"),
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: 20,
      boxShadow: shadow.boxShadow1,
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
      border: "solid 1px" + colors.darkBlue,
      color: colors.darkBlue,
      fontWeight: 500,
      paddingRight: 10, // Adjust padding to accommodate the icon
      fontSize: 17,
    },
    searchIcon: {
      position: "absolute",
      left: 10, // Adjust the position of the icon as needed
      top: "50%", // Center vertically
      //transform: "translateY(-50%)", // Center vertically
      width: 20, // Set the width of the icon
      height: 20, // Set the height of the icon
    },
    lable: {
      textAlign: "right",
      color: colors.darkBlue,
      fontSize: 15,
      fontWeight: 500,
      width: responsive("90%", "50%", "50%"),
      marginBottom: 5,
      marginRight: 5,
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
      margin: responsive("", "", "50% 0 0px 0"),
      display: "flex",
      justifyContent: "center",
    },
  };

  //functions
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
    selectedRabbi,
    selectedTopic,
    selectedMasechet,
    videoChecked,
    audioChecked,
    textChecked,
    setlessonsFilter,
  ]);

  const freeSearch = useCallback(() => {
    const formData = {
      freeQuery: searchQuery,
    };
    setlessonsFilter(formData);
  }, [searchQuery]);

  useEffect(() => {
    freeSearch();
  }, [searchQuery, freeSearch]);

  useEffect(() => {
    filteringSearch();
  }, [
    selectedRabbi,
    selectedTopic,
    selectedMasechet,
    videoChecked,
    audioChecked,
    textChecked,
    filteringSearch,
  ]);

  // useEffect(() => {
  //   setlessonsFilter(lessonsFilter);
  // }, [setlessonsFilter]);

  const handleSelectChange = useCallback(
    (e) => {
      const selectCategory = e?.target?.value;
      setSelectedTopic(selectCategory);
      const categoryId = getCategoryIdByName(selectCategory, categories);

      if (categoryId) {
        setCategoryParam(categoryId);
      }
    },
    [categories, setSelectedTopic, setSelectedTopic]
  );

  const {
    data: postsData,
    status: postsStatus,
    error: postsError,
    fetchNextPage: postsFetchNextPage,
  } = useQueryPostFetch(fetchUrl, selectedTopic);

  // useEffect(() => {
  //   if (postsData) {
  //     let parsedVideosData = extractQueryPosts(
  //       ExtractPostsData(postsData?.pages),
  //       selectedTopic,
  //       categories
  //     );

  //     parsedVideosData?.sort((b, a) => new Date(b.date) - new Date(a.date));
  //     setDisplayedVideos(parsedVideosData);
  //   }
  // }, [postsData, selectedTopic]);
  return (
    <form style={styles.container}>
      {isMobile && (
        <>
          <div style={styles.clearAll}>
            <img src="/clearAll.svg" />
            <span>נקה הכל</span>
          </div>
        </>
      )}
      <div style={styles.searchContainer}>
        <div style={styles.lable}>חיפוש חופשי </div>
        <input
          style={styles.searchInput}
          placeholder="הקלידו שם רב או נושא"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={"/searchIcon.png"} alt="Search" style={styles.searchIcon} />{" "}
      </div>

      <br></br>
      <div style={styles.lable}>הנושאים</div>
      <SelectInput
        options={getMainCategories(categories, 211) || categoriesOptions}
        value={selectedTopic}
        onChange={(e) => handleSelectChange(e)}
      />

      <div style={styles.lable}>הרבנים</div>
      <SelectInput
        options={rabbiesData}
        value={selectedRabbi}
        onChange={(e) => {
          setSelectedRabbi(e.target.value); // This is the setter function
        }}
      />
      <div style={styles.lable}>סוג השיעור</div>
      <Checkbox
        label={"שיעורי וידאו"}
        checked={videoChecked}
        onChange={() => setVideoChecked(!videoChecked)}
      />
      <Checkbox
        label={"שיעורי שמע"}
        checked={audioChecked}
        onChange={() => setAudioChecked(!audioChecked)}
      />
      <Checkbox
        label={"שיעורי טקסט"}
        checked={textChecked}
        onChange={() => setTextChecked(!textChecked)}
      />
      <br />
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
          onClick={handleToggle}
        />{" "}
      </div>

      <style>{`::placeholder {color: ${colors.darkBlue}`}</style>
    </form>
  );
};

export default SideBarSearch;
