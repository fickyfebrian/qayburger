import React from "react";
import logo from "../assets/logo2.png"; // Pastikan jalur ini benar
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-20" alt="Qayemi Burger Logo" />
          <div className="text-white text-2xl font-bold">Qayemi Burger</div>
        </a>
        <nav className="flex-grow flex justify-center space-x-8">
          <a href="#" className="text-white hover:text-yellow-500">Home</a>
          <a href="#products" className="text-white hover:text-yellow-500">Products</a>
          <a href="#contact" className="text-white hover:text-yellow-500">Contact</a>
        </nav>
        <div className="flex items-center space-x-2 ml-auto">
          <a href="#instagram" className="flex items-center space-x-1 text-white hover:text-yellow-500">
            <IoLogoInstagram className="text-xl" />
          </a>
          <a href="#facebook" className="flex items-center space-x-1 text-white hover:text-yellow-500">
            <IoLogoFacebook className="text-xl" />
          </a>
          <a href="#twitter" className="flex items-center space-x-1 text-white hover:text-yellow-500">
            <IoLogoTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
