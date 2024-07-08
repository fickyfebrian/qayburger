import React from "react";

const MenuCard = ({ burger }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg hover:shadow-xl bg-transparent  transition duration-300">
      <div className="overflow-hidden rounded-md">
        <img
          src={burger.image}
          alt={burger.name}
          style={{ objectFit: "cover", height: 250, width: "110%" }}
          className="w-full h-32 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold">{burger.name}</h2>
      <p className="mt-2 text-lg font-bold">Rp. {burger.price}</p>
      <p className="text-lg font-regular">{burger.description}</p>

    </div>
  );
};

export default MenuCard;
