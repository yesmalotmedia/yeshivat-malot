import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import TalmudMemuzagCollection from "./TalmudMemuzagCollection";
import { useParams } from "react-router-dom";
import TalmudMemuzagSection from "./TalmudMemuzagSection";
import MemuzagSideBarSearch from "./MemuzagSideBarSearch";
import getTalmudMemuzagCategories from "../../assets/getTalmudMemuzagCategories";
import MemuzagMobileFilter from "./MemuzagMobileFilter";

export default function TalmudHaMemuzag() {
  const { parsedMemuzagData, colors, responsive, isMobile } =
    useContext(AppContext);
  const { articleId } = useParams();

  // Manage the filter as a state in the parent component
  const [filter, setFilter] = useState({
    selectedTalmud: "בבלי", // Start with "בבלי" as the default
    selectedMasechet: "הכל",
    selectedPerek: "הכל",
    selectedDaf: "הכל",
  });

  const [options, setOptions] = useState(
    getTalmudMemuzagCategories(parsedMemuzagData, filter)
  );

  // Update options when the filter changes
  useEffect(() => {
    setOptions(getTalmudMemuzagCategories(parsedMemuzagData, filter));
  }, [filter, parsedMemuzagData]); // Update options whenever filter or data changes

  const handleFilterChange = (updatedFilter) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...updatedFilter,
    }));
  };

  // הדפסה של הערכים המעודכנים של הפילטר
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  // styles
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      margin: isMobile ? 0 : 100,
      justifyContent: "center",
      flexDirection: isMobile ? "column" : "row", // added flex direction for mobile
    },
    titleSection: {
      display: "flex",
      width: "60%",
      justifyContent: "space-between",
    },
  };

  return (
    <div>
      <HeroSection
        backgroundImage={"/heroTalmudMemuzag.png"}
        title={" התלמוד הממוזג "}
        subTitle={"עד שילך עמנו אור הבבלי ויתאחד עם התלמוד הירושלמי"}
        titleColor={colors.white}
        height={responsive("78vmin", "60vmin", "85vmin")}
        marginTop={responsive("40px", "90px", "90px")}
      />
      <section style={styles.mainSection}>
        {!isMobile
          ? !articleId && (
              <MemuzagSideBarSearch
                options={options}
                filter={filter}
                onFilterChange={handleFilterChange}
              />
            )
          : !articleId && (
              <MemuzagMobileFilter
                options={options}
                filter={filter}
                onFilterChange={handleFilterChange}
              />
            )}
        {articleId ? (
          <TalmudMemuzagSection id={articleId} />
        ) : (
          <TalmudMemuzagCollection filter={filter} />
        )}
      </section>
    </div>
  );
}
