import React from "react";
import Navbar from "../component/layout/navbar";
import Carousel from "../component/carousel";
import Hotdeals from "../component/section/hotdeals/hotdeals";
import Menu from "../component/section/menu/menu";
import Soda from "../component/section/soda/soda";
import Testimonials from "../component/section/testimonials/testimonials";
import Footer from "../component/layout/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hotdeals />
      <Menu />
      <Soda />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
