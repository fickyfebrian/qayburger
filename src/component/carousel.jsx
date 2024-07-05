import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  "/src/assets/banner1.png ",
  "/src/assets/banner2.png ",
  "/src/assets/banner3.png ",
  "/src/assets/banner4.png ",
  "/src/assets/banner5.png ",

];

const Carousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay: 3000}}
        loop={true}
        className="swiper-container relative"
      >
        {images.map((images, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl h-[1010px] flex justify-between items-center">
              <img
                src={images}
                alt={`Slide ${i + 1}`}
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
