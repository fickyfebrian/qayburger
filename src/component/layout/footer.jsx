import React from "react";
import logo from "/src/assets/logo3.png";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid lg:grid-cols-5 gap-8 w-full text-left">
          <a href="#" >
          <img
            src={logo}
            alt="Logo"
            style={{ objectFit: "cover", height: 315, width: "100%" }}
          />
          </a>
          
          <div className="px-8 py-14">
            <div className="flex flex-col space-y-4">
              <h2 className="font-bold text-2xl">Our Location</h2>
              <div className="flex items-center hover:text-yellow-500">
                <FaLocationDot className="mr-2" />
                <a
                  href="https://www.google.com/maps/place/Bandung,+Kota+Bandung,+Jawa+Barat/@-6.9033625,107.601872,13z/data=!3m1!4b1!4m6!3m5!1s0x2e68e6398252477f:0x146a1f93d3e815b2!8m2!3d-6.9174639!4d107.6191228!16zL20vMDF6bGw4?entry=ttu"
                  target="blank"
                  className="text-xl "
                >
                  Bandung
                </a>
              </div>
              <div className="flex items-center hover:text-yellow-500">
                <FaLocationDot className="mr-2" />
                <a
                  href="https://www.google.com/maps/place/Surabaya,+Jawa+Timur/@-7.2754417,112.6301107,12z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fbf8381ac47f:0x3027a76e352be40!8m2!3d-7.2574719!4d112.7520883!16zL20vMDFmNHhk?entry=ttu"
                  target="blank"
                  className="text-xl "
                >
                  Surabaya
                </a>
              </div>
            </div>
          </div>
          <div className="px-8 py-14">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Contact Details</h2>
            </div>
          </div>
          <div className="px-8 py-14">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">Opening Hours</h2>
            </div>
          </div>
          <div className="px-8 py-14">
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">About Us</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
