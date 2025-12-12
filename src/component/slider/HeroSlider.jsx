import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const sliderImage = [
    {
      id: 1,
      imageURL:
        "https://www.shutterstock.com/image-vector/train-icon-logo-sign-ticket-260nw-2595988425.jpg",
    },
    {
      id: 2,
      imageURL:
        "https://5.imimg.com/data5/AE/KE/VR/SELLER-95206069/bus-booking-software.jpg",
    },
    {
      id: 3,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MR5r8zpwk3M04sa3LNJwkVK_mjDdHSMYSw&s",
    },
    {
      id: 4,
      imageURL:
        "https://happilymarriedtoyouremployer.com/wp-content/uploads/2023/03/Launch-Party-Ticket.png",
    },
  ];
  return (
    <div className="px-10 pt-5">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderImage.map((slider) => (
          <SwiperSlide key={slider.id}>
            <img
              src={slider.imageURL}
              alt="slider Image"
              className="w-full h-85"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
