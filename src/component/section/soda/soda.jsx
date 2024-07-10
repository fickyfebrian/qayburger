import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import SodaCard from "./sodaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Soda = () => {
  const imageSoda = [
    {
      name: "soda1",
      image: "/src/assets/soda1.png",
    },
    {
      name: "soda2",
      image: "/src/assets/soda2.png",
    },
    {
      name: "soda3",
      image: "/src/assets/soda3.png",
    },
    {
      name: "soda4",
      image: "/src/assets/soda4.png",
    },
    {
      name: "soda5",
      image: "/src/assets/soda9.png",
    },
    {
      name: "soda6",
      image: "/src/assets/soda6.png",
    },
    {
      name: "soda7",
      image: "/src/assets/soda7.png",
    },
    {
      name: "soda8",
      image: "/src/assets/soda8.png",
    },
    {
      name: "soda9",
      image: "/src/assets/soda9.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-black mb-4 text-black">Soda`s</h1>
        <Swiper
        spaceBetween={3}
        slidesPerView={6}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {imageSoda.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SodaCard soda={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Soda;
