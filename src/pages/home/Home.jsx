import React from "react";
import HeroSlider from "../../component/slider/HeroSlider";
import LatestCard from "../../component/card/LatestCard";
import AdvertisementSection from "./components/AdvertisementSection";
import LatestSection from "./components/LatestSection";

import PopularRoutes from "./components/PopularRoutes";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AdvertisementSection />
      <LatestSection />
      <PopularRoutes />
    </div>
  );
};

export default Home;
