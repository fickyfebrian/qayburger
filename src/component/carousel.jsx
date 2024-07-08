import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        pagination={{
          clickable: true,
          type: 'progressbar', // Use progressbar type for pagination
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay, Scrollbar]}
        scrollbar={{
          hide: true,
        }}
        className="swiper-container relative"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl h-[520px] flex justify-between items-center">
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="object-fill lg:object-cover h-auto w-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
