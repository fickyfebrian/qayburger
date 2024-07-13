import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";

const HotdealsCard = ({ promo }) => {
  const descriptionLines = promo.description.split(". ");
  const extrasLines = promo.extras.split(". ");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center align-center gap-4 px-4 py-4">
      <div className="items-center shadow-sm">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          direction={'horizontal'}
          loop={true}
          modules={[Pagination, Autoplay, Scrollbar]}
          pagination={{
            clickable: true,
          }}
          className="nested-swiper w-full h-full"
        >
          <SwiperSlide>
            <img
              className="w-70 h-2/3 object-cover mx-auto"
              src={promo.image}
              alt={promo.name}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-70 h-2/3 object-cover mx-auto"
              src={promo.drink}
              alt="Drink"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-70 h-2/3 object-cover mx-auto"
              src={promo.snacks1}
              alt="Snack 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-70 h-2/3 object-cover mx-auto"
              src={promo.snacks2}
              alt="Snack 2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="items-center px-4 py-4">
        <h1 className="text-3xl md:text-5xl mb-4 font-black text-black">{promo.name}</h1>
        <ul className="text-xl md:text-3xl list-disc list-inside text-black mb-4">
          {descriptionLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <ul className="text-xl md:text-3xl list-disc list-inside text-black">
          {extrasLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotdealsCard;
