import React from "react";
import MenuCard from "./menuCard";

const menuItems = [
  {
    name: "Burger Jumbo",
    price: "24000",
    description: "Burger patties, 3x Beef,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-6.png",
  },
  {
    name: "Burger Classic",
    price: "20000",
    description: "Burger patties, Beef patty,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-1.png",
  },
  {
    name: "Burger Classic",
    price: "20000",
    description: "Burger patties, Beef patty,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-2.png",
  },
  {
    name: "Burger Classic",
    price: "20000",
    description: "Burger patties, Beef patty,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-3.png",
  },
  {
    name: "Burger Classic",
    price: "20000",
    description: "Burger patties, Beef patty,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-4.png",
  },
  {
    name: "Burger Classic",
    price: "20000",
    description: "Burger patties, Beef patty,Lettuce, Tomato, Onion, Cheddar ,Special sauce",
    image: "/src/assets/burger-5.png",
  },
  
];

const Menu = () => {
  return (
    <div className="container items-center mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-black mb-4 text-black">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {menuItems.map((item, index) => (
          <MenuCard key={index} burger={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
