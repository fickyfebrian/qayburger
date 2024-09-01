import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from "../../public/assets/banner-burger1.png"
import banner2 from "../../public/assets/banner-burger2.png"
import banner3 from "../../public/assets/banner-burger3.png"
import banner4 from "../../public/assets/banner-burger4.png"
import banner5 from "../../public/assets/banner-burger5.png"
const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
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
        {images.map((images, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl h-[520px] flex justify-between items-center">
              <img
                src={images}
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
