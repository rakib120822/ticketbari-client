// HeroSectionEffect.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,

  EffectCoverflow,
} from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const slides = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];

const HeroSection = () => {
  return (
    <section className="w-full h-96 flex flex-col lg:flex-row py-16 px-10 ">
      {/* Left Side: Typewriter Text */}
      <div className=" w-2/5 flex-col justify-center items-center h-full    ">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          <Typewriter
            words={[
              "Explore the World",
              "Book Your Adventure",
              "Travel in Comfort",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Discover the best destinations, amazing deals, and unforgettable
          experiences. Start your journey today!
        </p>
        <Link
          to={"/all-tickets"}
          className="btn px-6 py-3 rounded-full bg-[#0ea5e9] text-white hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Right Side: Swiper Slider with Fade Effect */}
      <div className="lg:w-3/5 h-full ">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          slidesPerView={3}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop
          className="h-full w-full"
        >
          {slides.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full  bg-cover bg-center transition-all duration-1000 rounded-4xl overflow-hidden"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
