import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import Spacer from "../../components/elements/Spacer";
import HeroBeitHamidrash from "../../components/elements/HeroSection";
import SeltectButtons from "./SeltectButtons";
import SideBarSearch from "./sideBarSearch/SideBarSearch";
import LessonsSection from "./lessons/LessonSection";
import HeroSection from "../../components/elements/HeroSection";
import LessonsCollection from "./lessons/LessonsCollection";
import { useParams } from "react-router-dom";
import LoaderAnimation from "../../components/elements/LoaderAnimation";
import ExtractPostsData from "../../assets/extractPostsData";

const BeitHamidrash = () => {
  const { topic } = useParams();
  // data
  const {
    responsive,
    colors,
    bgColors,
    isMobile,
    videos,
    categories,
    loadingCategories,
    lessonsType,
    setlessonsType,
    setlessonsFilter,
    lessonsFilter,
    loadingPosts,
    selectedTopic,
    setSelectedTopic,
    selectedRabbi,
    setSelectedRabbi,

    postsStatus,
    postsError,
    postsFetchNextPage,
  } = useContext(AppContext);

  const screenWidth = window.innerWidth;
  // states
  const { videoId } = useParams();
  const [lesson, setLesson] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(lesson);

  useEffect(() => {
    const fetchLesson = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://yesmalot.co.il/wp-json/custom/v1/post/${videoId}`
        );

        if (!response.ok) throw new Error("שגיאה בטעינת השיעור");

        const data = await response.json();

        const parsData = ExtractPostsData(data);

        setLesson(parsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [videoId]); // הפעלת ה-fetch בכל שינוי של postId

  // styles
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      margin: isMobile ? 0 : 100,
      justifyContent: "center",
    },
    titleSection: {
      display: "flex",
      width: "60%",
      justifyContent: "space-between",
      // margin: "auto",
    },
    selectionButtonContainer: isMobile
      ? {
          overflowY: "auto",
          margin: "-50px 0 20px 0",
          paddingTop: 80,
          scrollbarWidth: "none",
          paddingRight: 70,
        }
      : {},
  };

  // functions

  return (
    <>
      <HeroSection
        title={"בית המדרש"}
        backgroundImage={"/beitHamidrashHero.png"}
        subTitle={"בחרו את הנושא שמעניין אתכם"}
        titleColor={colors.white}
        height={responsive("60vmin", "50vmin", "75vmin")}
        marginTop={95}
      />

      <div style={styles.selectionButtonContainer}>
        <SeltectButtons
          lessonsType={lessonsType}
          setlessonsType={setlessonsType}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
      </div>

      <section style={styles.mainSection}>
        {!isMobile && (
          <SideBarSearch
            setLesson={setLesson}
            lessonsType={lessonsType}
            setlessonsType={setlessonsType}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            selectedRabbi={selectedRabbi}
            setSelectedRabbi={setSelectedRabbi}
          />
        )}

        {loading || postsStatus === "pending" ? ( // ודא שגם loading משפיע
          <LoaderAnimation
            selectedTopic={selectedTopic}
            color={colors.orange}
            isLoading
          />
        ) : lesson && lesson.length > 0 ? (
          <LessonsSection lesson={lesson[0]} />
        ) : (
          <LessonsCollection
            setLesson={setLesson}
            lessonsType={lessonsType}
            setlessonsType={setlessonsType}
          />
        )}
      </section>
    </>
  );
};

export default BeitHamidrash;
