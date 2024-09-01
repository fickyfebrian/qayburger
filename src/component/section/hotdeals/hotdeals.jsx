import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import HotdealsCard from "./hotdealsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import thumbnail from "../../../../public/assets/hotdeals1.png";
import soda1 from "../../../../public/assets/soda8.png";
import snacks1 from "../../../../public/assets/snack-2.png";
import snacks2 from "../../../../public/assets/snack-4.png";
import thumbnail2 from "../../../../public/assets/hotdeals2.png"
import soda2 from "../../../../public/assets/soda8.png";
import snacks3 from "../../../../public/assets/snack-2.png";
import snacks4 from "../../../../public/assets/snack-6.png";

const hotdealsItems = [
  {
    name: "Burger Deluxe",
    description:
      "A delectable Burger Deluxe bursting with flavor. A side of crispy, golden fries. A refreshing beverage to quench your thirst",
    image: thumbnail,
    extras: "With. Mountain Dew Major Melon, French Fries, Tortilla",
    drink: soda1,
    snacks1: snacks1,
    snacks2: snacks2,
  },
  {
    name: "Burger Deluxe 2",
    description:
      "A juicy and tender beef patty, seasoned to perfection. Fresh lettuce, tomatoes, and onions for a burst of crispness. A tangy pickle slice to add a zesty touch. All sandwiched between a soft toasted bun",
    image: thumbnail2,
    extras: "With. Mountain Dew Code Red, French Fries, Pop Corn",
    drink: soda2,
    snacks1: snacks3,
    snacks2: snacks4,
  },
];

const Hotdeals = () => {
  return (
    <div>
      <div className="container items-center mx-auto px-4 py-4">
        <h1 className="text-center text-4xl font-black mb-4 text-black bg-yellow-500 px-4 py-4">
          Hot Deals
        </h1>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {hotdealsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <HotdealsCard promo={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hotdeals;
