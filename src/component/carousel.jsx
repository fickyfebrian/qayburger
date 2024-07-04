import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import carousel1 from '../assets/banner1.png';
import carousel2 from '../assets/banner2.png';
import carousel3 from '../assets/banner3.png';
import carousel4 from '../assets/banner4.png';
import carousel5 from '../assets/banner5.png';

// Inisialisasi Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-96 md:h-96"
      >
        <SwiperSlide>
          <img src={carousel1} alt="Slide 1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="Slide 2" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="Slide 3" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="Slide 4" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt="Slide 5" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
