import React from "react";
import LastLessons from "../../components/lastLessons/LastLessons";
import AboutSection from "../../components/aboutSection/AboutSection";
import DailyText from "../../components/dailyText/DailyText";
import Spacer from "../../components/elements/Spacer";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import GallerySection from "../../components/gallerySection/GallerySection";
import DedicationSection from "../../components/dedicationSection/DedicationSection";
import BannerModal from "../../components/elements/BannerModal";

const Home = () => {
  return (
    <div>
      <Spacer height={60} />
      <HeroHomePage />
      <LastLessons />
      <AboutSection />
      <GallerySection />
      <DailyText />
      {/* <DedicationSection /> */}
      <BannerModal onClose={() => {}} />
    </div>
  );
};

export default Home;
