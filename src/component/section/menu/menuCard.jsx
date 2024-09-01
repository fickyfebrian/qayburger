import React from "react";

const MenuCard = ({ burger }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 active:bg-yellow-300"
      onClick={() => console.log(`Clicked on ${burger.name}`)}
    >
      <img
        src={burger.image}
        alt={burger.name}
        className="w-full h-56 object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-black">{burger.name}</h2>
        <p className="text-gray-600">{burger.description}</p>
        <p className="text-xl font-semibold text-yellow-500 mt-2">
          Rp {burger.price}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
