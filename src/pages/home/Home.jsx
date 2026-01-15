import React from "react";
import HeroSlider from "../../component/slider/HeroSlider";

import AdvertisementSection from "./components/AdvertisementSection";
import LatestSection from "./components/LatestSection";

import PopularRoutes from "./components/PopularRoutes";
import Highlights from "../../component/higlights/Highlights";
import Testimonials from "../../component/testimonials/Testimonials";
import Blogs from "../../component/blogs/Blogs";
import CTA from "../../component/CTA/CTA";
import Newsletter from "../../component/newsletter/Newsletter";
import FAQ from "../../component/faq/FAQ";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <HeroSlider />
      <AdvertisementSection />
      <LatestSection />
      <Highlights />
      <Testimonials />
      <Blogs />
      <CTA />
      <FAQ />
      <PopularRoutes />
    </div>
  );
};

export default Home;
