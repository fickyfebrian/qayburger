import React from "react";
import { FreeMode, Pagination } from "swiper/modules";
import HotdealsCard from "./hotdealsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const hotdealsItems = [
  {
    name: "Burger Deluxe",
    description:
      "A delectable Burger Deluxe bursting with flavor. A side of crispy, golden fries. A refreshing beverage to quench your thirst",
    image: "/src/assets/home-image.png",
    extras: "With. Mountain Dew Major Melon, French Fries, Tortilla",
    drink: "/src/assets/soda8.png",
    snacks1: "/src/assets/snack-2.png",
    snacks2: "/src/assets/snack-4.png",
  },
  {
    name: "Burger Deluxe 2",
    description:
      "A juicy and tender beef patty, seasoned to perfection. Fresh lettuce, tomatoes, and onions for a burst of crispness. A tangy pickle slice to add a zesty touch. All sandwiched between a soft toasted bun",
    image: "./src/assets/promo-1.png",
    extras: "With. Mountain Dew Code Red, French Fries, Pop Corn",
    drink: "/src/assets/soda9.png",
    snacks1: "/src/assets/snack-2.png",
    snacks2: "/src/assets/snack-6.png",
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
          spaceBetween={4}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {hotdealsItems.map((item, i) => (
            <SwiperSlide key={i} className="">
              <HotdealsCard promo={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hotdeals;
