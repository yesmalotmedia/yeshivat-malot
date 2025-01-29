import React, { useContext } from "react";
import { AppContext } from "../../App";
import VideoCoverImage from "../elements/VideoCoverImage";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import { useCategoryNameById } from "../../assets/useCategories";
import LoaderAnimation from "../elements/LoaderAnimation";
import bgColors from "../../styles/bg-colors";
import shadow from "../../styles/shadows";
const LastLessons = () => {
  const navigate = useNavigate();

  const {
    responsive,
    videos,
    setlessonsFilter,
    colors,
    loadingLastClalim,
    loadinglastDafYomi,
    loadingLastEiun,
    parsedLastVideos,
  } = useContext(AppContext);

  const loadingLastLessons =
    loadingLastClalim || loadinglastDafYomi || loadingLastEiun;

  // Retrieve category names outside of callbacks or loops
  const categoryNames = {
    19: useCategoryNameById(19),
    18: useCategoryNameById(18),
    5: useCategoryNameById(5),
  };

  const styles = {
    container: {
      width: responsive("80%", "70%", "90%"),
      maxWidth: responsive(1400, 900, 600),
      margin: "auto",
      backgroundColor: colors.white, // Example bg-color
      borderRadius: 50,
      boxShadow: shadow.boxShadow1,
      transform: responsive(
        "translateY(-265px)",
        "translateY(-400px)",
        "translateY(-250px)"
      ),
      display: "flex",
      flexDirection: responsive("row", "column", "column"),
      padding: 20,
      justifyContent: "space-between",
      zIndex: 100,
    },
    title: {
      position: "absolute",
      left: "50%",
      top: 10,
      transform: "translateX(-50%)",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1.8rem", "1.4rem", "1.3rem"),
    },
    img: {
      margin: responsive(20, 10, 2),
      boxShadow: shadow.boxShadow1,
      padding: 14,
      borderRadius: 25,
    },
  };

  const handleClick = (categoryId) => {
    const categoryName = categoryNames[categoryId];
    setlessonsFilter({ category: categoryName });
    navigate(`/BeitHamidrash`);
  };

  const lastVideosElements = parsedLastVideos?.map((video, index) => (
    <div key={index} style={styles.img}>
      {loadingLastLessons ? (
        <LoaderAnimation isLoading={loadingLastLessons} color={colors.orange} />
      ) : (
        <VideoCoverImage
          // url={video?.url}
          url={video?.url}
          videoId={video?.id}
          title={video?.title}
          rabbiName={video?.rabbiName}
          //thumbnail={video?.thumbnail}
          thumbnail={
            "https://i.ytimg.com/vi_webp/RQGTGBU0sYg/maxresdefault.webp"
          }
        />
      )}
      <Button
        color={index === 2 ? colors.darkBlue : colors.white}
        bgColor={index === 2 ? bgColors.yellow : bgColors.darkBlue} // Example gradients
        title={`לכל שיעורי ${
          categoryNames[index === 0 ? 19 : index === 1 ? 18 : 5]
        }`}
        fontSize={responsive("1.2rem", "1.4rem", "1rem")}
        fontWeight={600}
        borderRadius={50}
        width={"100%"}
        arrow={true}
        arrowColor={index === 2 ? "blue" : "white"}
        margin={"10px 0 0 0"}
        onClick={() => handleClick(index === 0 ? 19 : index === 1 ? 18 : 5)}
      />
    </div>
  ));

  return (
    <div style={styles.container}>
      <div style={styles.title}>שיעורים אחרונים</div>
      {loadingLastLessons ? (
        <LoaderAnimation isLoading={loadingLastLessons} color={colors.orange} />
      ) : (
        lastVideosElements
      )}
    </div>
  );
};

export default LastLessons;
