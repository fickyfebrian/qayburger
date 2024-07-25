import React from "react";
import TestimonialsCard from "./testimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { useNavigate, useNavigation } from "react-router-dom";

const Testimonials = () => {
  const testimonialsItems = [
    {
      name: "Rizal",
      profession: "Teacher",
      description:
        "As a kindergarten teacher, I'm always looking for a filling and refreshing snack to enjoy during my breaks. The burgers and sodas from QB are the perfect choice! The burgers are made with soft buns, juicy patties, and delicious sauces. The sodas are also cold and refreshing, perfect for enjoying on a hot day. The combination of the burger and soda leaves me feeling full and energized to continue teaching.",
      image: "/src/assets/review-1.jpg",
    },
    {
      name: "Yusi",
      profession: "Programmer",
      description:
        "As a programmer, I often work overtime and need a hearty meal to eat at night. The burgers and sodas from QB are always my go-to. The burgers are big and filling, and the sodas help me stay awake while I'm working. I really like the classic flavor of the burgers, which isn't too overpowering. The sodas also come in a variety of flavors, so I can always choose one that suits my taste.",
      image: "/src/assets/review-2.jpg",
    },
    {
      name: "Dimas",
      profession: "Student",
      description:
        "As a student, I'm always looking for delicious and affordable food. The burgers and sodas from QB are the answer! The prices are very affordable, but the quality of the food is just as good as any other burger restaurant. The burgers are always made with fresh ingredients, and the sodas are cold and refreshing. They're perfect for enjoying with friends while hanging out or doing homework.",
      image: "/src/assets/review-3.jpg",
    },
    {
      name: "Lala",
      profession: "Athlete",
      description:
        "As an athlete, I need food that is high in protein and calories to support my training. The burgers and sodas from QB are a great source of protein and calories. The burgers are packed with beef, and the sodas provide the extra energy I need when I'm working out. Plus, these burgers and sodas are easy to take with you and enjoy anytime, anywhere.",
      image: "/src/assets/review-4.jpg",
    },
    {
      name: "Eka",
      profession: "Athlete",
      description:
        "As an athlete, I need food that is high in protein and calories to support my training. The burgers and sodas from QB are a great source of protein and calories. The burgers are packed with beef, and the sodas provide the extra energy I need when I'm working out. Plus, these burgers and sodas are easy to take with you and enjoy anytime, anywhere.",
      image: "/src/assets/review-5.jpg",
    },
  ];
  const navigate = useNavigate();
  // Dummy function untuk simulasi navigasi
  const handleSeeMoreClick = () => {
    navigate("/testimonials");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-black mb-4 text-black bg-yellow-500 px-4 py-4">
        Testimonials
      </h1>
      <div className="relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={Pagination}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="swiper-container"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {testimonialsItems.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <TestimonialsCard review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSeeMoreClick}
            className="bg-yellow-500 font-bold rounded-md px-4 py-2 mt-4"
          >
            See More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
