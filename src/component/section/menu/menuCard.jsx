import React from "react";

const MenuCard = ({ burger }) => {
  return (
    <div className="bg-transparent  rounded-lg overflow-hidden  m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="overflow-hidden rounded-md">
        <img
          src={burger.image}
          alt={burger.name}
          style={{ objectFit: "cover", height: 250, width: "110%" }}
          className="w-full h-32 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-center">{burger.name}</h2>
    </div>
  );
};

export default MenuCard;
