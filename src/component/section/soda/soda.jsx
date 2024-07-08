import React from "react";
import SodaCard from "./sodaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Soda = () => {
  const imageSoda = [
    {
        name : "soda1",
        image: "/src/assets/soda1.png" 
    },
    {
        name : "soda2",
        image: "/src/assets/soda2.png" 
    },
    {
        name : "soda3",
        image: "/src/assets/soda3.png" 
    },
    {
        name : "soda4",
        image: "/src/assets/soda4.png" 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">Soda`s</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        loop={true}
        className="swiper-container"
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
