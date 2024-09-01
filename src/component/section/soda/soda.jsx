import React from "react";
import { FreeMode } from "swiper/modules";
import SodaCard from "./sodaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import soda1 from "../../../../public/assets/soda1.png"
import soda2 from "../../../../public/assets/soda2.png"
import soda3 from "../../../../public/assets/soda3.png"
import soda4 from "../../../../public/assets/soda4.png"
import soda5 from "../../../../public/assets/soda9.png"
import soda6 from "../../../../public/assets/soda6.png"
import soda7 from "../../../../public/assets/soda7.png"
import soda8 from "../../../../public/assets/soda8.png"
import soda9 from "../../../../public/assets/soda9.png"

const Soda = () => {
  const imageSoda = [
    {
      name: "soda1",
      image: soda1,
    },
    {
      name: "soda2",
      image: soda2
    },
    {
      name: "soda3",
      image: soda3,
    },
    {
      name: "soda4",
      image: soda4,
    },
    {
      name: "soda5",
      image: soda5,
    },
    {
      name: "soda6",
      image: soda6,
    },
    {
      name: "soda7",
      image: soda7,
    },
    {
      name: "soda8",
      image: soda8,
    },
    {
      name: "soda9",
      image: soda9,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-black mb-4 text-black bg-yellow-500 px-4 py-4">
        Soda's
      </h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 7,
          },
        }}
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
