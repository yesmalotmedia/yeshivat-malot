import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { RouterProvider, useParams } from "react-router-dom";
import {
  useCategoryIdByName,
  useCategoryNameById,
} from "./assets/useCategories";
import colors from "./styles/colors";
import bgColors from "./styles/bg-colors";
import animations from "./styles/animations";
import shadow from "./styles/shadows";
import pagesList from "./pages/pagesList";
import description from "./data/description";
import dailyTextsData from "./data/dailyTextsData";
import LastLessons from "./components/lastLessons/LastLessons";
import routers from "./Routes";
import postsData from "./data/whatsNewData";
import useFetch from "./assets/useFetch";
import getVideoData from "./assets/getVideoData";
import extractYoutubeUrl from "./assets/extractYoutubeUrl";
import ExtractPostsData from "./assets/extractPostsData";
import getCategoriesByParent from "./assets/getCategoriesByParent";
import DataTest from "./assets/dataTest/DataTest";
import ExtractNewsData from "./assets/ExtractNewsData";
import useResponsive from "./Hooks/useResponsive";
import ExtractPublishData from "./assets/ExtractPublishData";
import ExtractTalmudMemuzagData from "./assets/ExtractTalmudMemuzagData";
import extractNoticesData from "./assets/extractNoticesData";
import useSideMenuSection from "./styles/sectionsStyle";
import usePostsFetch from "./assets/usePostsFetch";
import { data } from "framer-motion/m";
import { useInView } from "framer-motion";
// import { section1 } from "./styles/sectionsStyle";

export const AppContext = React.createContext();

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedRabbi, setSelectedRabbi] = useState("");

  const [lastEiun, setLastEiun] = useState(null);
  const [lastDafYomi, setLastDafYomi] = useState(null);
  const [lastClalim, setLastClalim] = useState(null);

  const [loadingLastEiun, setLoadingLastEiun] = useState(true);
  const [loadingLastDafYomi, setLoadingLastDafYomi] = useState(true);
  const [loadingLastClalim, setLoadingLastClalim] = useState(true);
  const { ref, inView } = useInView;

  const fetchData = async () => {
    try {
      // Fetch the last lessons first (priority)
      const [lastEiunData, lastDafYomiData, lastClalimData] = await Promise.all(
        [
          fetch(
            "https://yesmalot.co.il/wp-json/wp/v2/posts?per_page=1&page=1&categories=68"
          ).then((res) => res.json()),
          fetch(
            "https://yesmalot.co.il/wp-json/wp/v2/posts?per_page=1&page=1&categories=66"
          ).then((res) => res.json()),
          fetch(
            "https://yesmalot.co.il/wp-json/wp/v2/posts?per_page=1&page=1&categories=43"
          ).then((res) => res.json()),
        ]
      );

      // Set the state once the fetches are complete
      setLastEiun(lastEiunData);
      setLastDafYomi(lastDafYomiData);
      setLastClalim(lastClalimData);

      // Set loading to false after the fetch is completed
      setLoadingLastEiun(false);
      setLoadingLastDafYomi(false);
      setLoadingLastClalim(false);
    } catch (error) {
      console.error("Error fetching last lessons:", error);
      setLoadingLastEiun(false);
      setLoadingLastDafYomi(false);
      setLoadingLastClalim(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  // Continue with the other fetches for posts, categories, etc.
  // const {
  //   data: postsData,
  //   loading: loadingPosts,
  //   firstTwentyLoaded: firstTwentyLoaded,
  //   error: errorPosts,
  // } = useFetch("https://yesmalot.co.il/wp-json/wp/v2/posts?", 10, 100);

  const {
    data: postsData,
    status: postsStatus,
    error: postsError,
    fetchNextPage: postsFetchNextPage,
  } = usePostsFetch("https://yesmalot.co.il/wp-json/wp/v2/posts?");
  const {
    data: noticesData,
    loading: loadingNotices,
    error: errorNotices,
  } = useFetch(
    "https://yesmalot.co.il/wp-json/wp/v2/messages?per_page=100&page=4"
  );
  const {
    data: categoriesData,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetch(
    "https://yesmalot.co.il/wp-json/wp/v2/categories?_fields=id,name,parent",
    100,
    300
  );

  const {
    data: rabbiesData,
    loading: loadingRabbies,
    error: errorRabbies,
  } = useFetch(
    "https://dev-mizug-talmudim-admin.pantheonsite.io/wp-json/wp/v2/rabbies?_fields=id,description,name&orderby=id&order=desc"
  );

  const {
    data: publishData,
    loading: loadingPublish,
    error: errorPublish,
  } = useFetch("https://yesmalot.co.il/wp-json/wp/v2/books?");

  // Parsing data
  let parsedVideosData = [];
  let videos = [];
  let categories = [];
  let parsedNewsData = [];
  let parsedPublishData = [];
  let parsedMemuzagData = [];
  let parsedLastVideos = [];
  let parsedNoticesData = [];
  let parsedaAllPostsData = [];

  if (postsData) {
    parsedVideosData = ExtractPostsData(postsData?.pages);

    parsedVideosData?.sort((b, a) => new Date(b.date) - new Date(a.date));
    videos = parsedVideosData.filter(
      (e) =>
        e.contentType.includes("video") ||
        e.contentType.includes("וידאו") ||
        e.contentType.includes("audio") ||
        e.contentType.includes("text")
    );
  }

  if (
    lastEiun?.length > 0 &&
    lastDafYomi?.length > 0 &&
    lastClalim?.length > 0
  ) {
    parsedLastVideos = ExtractPostsData([
      lastEiun[0],
      lastClalim[0],
      lastDafYomi[0],
    ]);
  }

  if (noticesData) {
    parsedNoticesData = extractNoticesData(noticesData);
  }

  if (categoriesData) {
    categories = categoriesData;
  }

  if (publishData) {
    parsedPublishData = ExtractPublishData(publishData);
  }

  // Handle mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const { responsive } = useResponsive();
  const [lessonsType, setlessonsType] = useState("עיון");
  const [lessonsFilter, setlessonsFilter] = useState({
    category: "כל השיעורים",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        colors,
        responsive,
        bgColors,
        animations,
        shadow,
        pagesList,
        isMobile,
        description,
        dailyTextsData,
        parsedLastVideos,

        postsData,
        postsStatus,
        postsError,
        postsFetchNextPage,

        parsedNoticesData,
        loadingNotices,
        lastEiun,
        loadingLastEiun,
        lastDafYomi,
        loadingLastDafYomi,
        lastClalim,
        loadingLastClalim,
        isMobileNavOpen,
        videos,
        categories: categories || [],
        loadingCategories,
        lessonsType,
        rabbiesData,
        loadingRabbies,
        lessonsFilter,
        parsedNewsData,
        parsedPublishData,
        parsedMemuzagData,
        setlessonsType,
        setIsMobileNavOpen,
        getCategoriesByParent,
        setlessonsFilter,
        selectedTopic,
        setSelectedTopic,
        selectedRabbi,
        setSelectedRabbi,
        useCategoryIdByName,
        useCategoryNameById,
        useSideMenuSection,
        useInView,
      }}
    >
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
