import React, { useState } from "react";
import logo from "/src/assets/logo2.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-20" alt="Qayemi Burger Logo" />
          <div className="text-white text-3xl font-bold">Qayemi Burger</div>
        </Link>
        <div className="hidden md:flex md:flex-grow md:justify-center md:space-x-8">
          <Link to="/" className="text-white text-2xl hover:text-yellow-500">Home</Link>
          <Link to="/products" className="text-white text-2xl hover:text-yellow-500">Products</Link>
          <Link to="/contact" className="text-white text-2xl hover:text-yellow-500">Contact</Link>
          <Link to="/location" className="text-white text-2xl hover:text-yellow-500">Location</Link>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-2">
          <a href="#instagram" className="text-white hover:text-yellow-500">
            <IoLogoInstagram className="text-4xl" />
          </a>
          <a href="#facebook" className="text-white hover:text-yellow-500">
            <IoLogoFacebook className="text-4xl" />
          </a>
          <a href="#twitter" className="text-white hover:text-yellow-500">
            <IoLogoTwitter className="text-4xl" />
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
          <Link to="/" className="text-white text-2xl hover:text-yellow-500">Home</Link>
          <Link to="/products" className="text-white text-2xl hover:text-yellow-500">Products</Link>
          <Link to="/contact" className="text-white text-2xl hover:text-yellow-500">Contact</Link>
          <Link to="/location" className="text-white text-2xl hover:text-yellow-500">Location</Link>
          <div className="flex items-center space-x-2">
            <a href="#instagram" className="text-white hover:text-yellow-500">
              <IoLogoInstagram className="text-4xl" />
            </a>
            <a href="#facebook" className="text-white hover:text-yellow-500">
              <IoLogoFacebook className="text-4xl" />
            </a>
            <a href="#twitter" className="text-white hover:text-yellow-500">
              <IoLogoTwitter className="text-4xl" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
