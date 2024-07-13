import React from "react";
import logo from "/src/assets/logo3.png";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const location = [
    {
      city: "Bandung",
      coordinat:
        "https://www.google.com/maps/place/GOR+dan+Taman+Saparua/@-6.909784,107.6143771,17.55z/data=!4m15!1m8!3m7!1s0x2e68e6398252477f:0x146a1f93d3e815b2!2sBandung,+Kota+Bandung,+Jawa+Barat!3b1!8m2!3d-6.9174639!4d107.6191228!16zL20vMDF6bGw4!3m5!1s0x2e68e645bfffffff:0x6ddea69c76478a61!8m2!3d-6.908557!4d107.6161867!16s%2Fg%2F120pnmk5?entry=ttu",
    },
    {
      city: "Jakarta",
      coordinat:
        "https://www.google.com/maps/place/Jakarta,+Daerah+Khusus+Ibukota+Jakarta/@-6.1785828,106.8260781,16z/data=!4m6!3m5!1s0x2e69f3e945e34b9d:0x5371bf0fdad786a2!8m2!3d-6.1944491!4d106.8229198!16zL20vMDQ0cnY?entry=ttu",
    },
  ];
  const openingHours = [
    {
      day: "Monday",
      hours: "Closed",
    },
    {
      day: "Tuesday",
      hours: "8.00 AM - 9.00 PM",
    },
    {
      day: "Wednesday",
      hours: "8.00 AM - 9.00 PM",
    },
    {
      day: "Thursday",
      hours: "8.00 AM - 9.00 PM",
    },
    {
      day: "Friday",
      hours: "9.00 AM - 11.00 PM",
    },
    {
      day: "Saturday",
      hours: "9.00 AM - 11.00 PM",
    },
    {
      day: "Sunday",
      hours: "9.00 AM - 11.00 PM",
    },
  ];
  const contactDetails = [
    {
      contact: "+62 851 1234 4321",
      email: "qayemi@burger.id",
    },
  ];

  return (
    <footer className="bg-black text-white py-6 px-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid lg:grid-cols-5 gap-2 w-full text-left justify-items-center">
          <a href="#" className="w-full">
            <img
              src={logo}
              alt="Logo"
              style={{ objectFit: "cover", height: 315, width: "100%" }}
            />
          </a>

          <div className="px-4 py-8 flex flex-col items-left">
            <h2 className="font-bold text-2xl mb-4">Our Location</h2>
            {location.map((location, i) => (
              <div key={i} className="flex items-center hover:text-yellow-500">
                <FaLocationDot className="mr-2" />
                <a href={location.coordinat} target="blank" className="text-xl">
                  {location.city}
                </a>
              </div>
            ))}
          </div>

          <div className="px-4 py-8 flex flex-col items-left">
            <h2 className="font-bold text-2xl mb-4">Contact Details</h2>
            {contactDetails.map((contactDetails, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <div className="flex items-center text-xl text-white">
                  <IoLogoWhatsapp className="text-2xl mr-2" />
                  {contactDetails.contact}
                </div>
                <div className="flex items-center text-xl text-white">
                  <IoMail className="text-2xl mr-2" />
                  {contactDetails.email}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 py-8 flex flex-col items-left">
            <h2 className="font-black text-2xl mb-4">Opening Hours</h2>
            {openingHours.map((openingHours, i) => (
              <div key={i} className="flex flex-row items-center mt-2">
                <p className="text-xl text-white">{openingHours.day}</p>
                <p
                  className={`text-xl ml-2 ${
                    openingHours.hours === "Closed"
                      ? "text-yellow-500"
                      : "text-white"
                  }`}
                >
                  {openingHours.hours}
                </p>
              </div>
            ))}
          </div>

          <div className="px-4 py-8 flex flex-col items-center">
            <h2 className="font-black text-2xl">About Us</h2>
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-gray-300 pt-4 w-full flex flex-col items-center">
        <a href="#" className="text-l text-white">
          Copyright © 2024 Qayemi. All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
