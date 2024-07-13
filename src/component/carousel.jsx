import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  "/src/assets/banner-burger1.png",
  "/src/assets/banner-burger2.png",
  "/src/assets/banner-burger3.png",
  "/src/assets/banner-burger4.png",
  "/src/assets/banner-burger5.png",
];

const Carousel = () => {
  return (
    <div className="w-full relative pt-24">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay, Scrollbar]}
        scrollbar={{ hide: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="swiper-container relative"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl h-[520px] flex justify-between items-center">
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="object-cover h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
