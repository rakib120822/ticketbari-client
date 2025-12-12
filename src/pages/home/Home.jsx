import React from "react";
import HeroSlider from "../../component/slider/HeroSlider";
import LatestCard from "../../component/card/LatestCard";
import AdvertisementSection from "./components/AdvertisementSection";
import LatestSection from "./components/LatestSection";
import { useLoaderData } from "react-router";
import PopularRoutes from "./components/PopularRoutes";

const Home = () => {
  const data = useLoaderData();
  const AdvertisementSectionData = data.slice(0, 4);
  const LatestSectionData = data.slice(4, 12);

  return (
    <div>
      <HeroSlider />
      <AdvertisementSection
        AdvertisementSectionData={AdvertisementSectionData}
      />
      <LatestSection LatestSectionData={LatestSectionData} />
      <PopularRoutes LatestSectionData={LatestSectionData}/>
    </div>
  );
};

export default Home;
