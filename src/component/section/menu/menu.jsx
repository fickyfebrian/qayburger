import React from "react";
import MenuCard from "./menuCard";
import burger1 from "../../../../public/assets/burger-6.png";
import burger2 from "../../../../public/assets/burger-1.png";
import burger3 from "../../../../public/assets/burger-2.png";
import burger4 from "../../../../public/assets/burger-3.png";
import burger5 from "../../../../public/assets/burger-4.png";
import burger6 from "../../../../public/assets/burger-5.png";
import burger7 from "../../../../public/assets/burger-7.png";
import burger8 from "../../../../public/assets/burger-8.png";
import burger9 from "../../../../public/assets/burger-9.png";
import burger10 from "../../../../public/assets/burger-10.png";
import burger11 from "../../../../public/assets/burger-11.png";

const menuItems = [
  {
    name: "Burger Jumbo",
    price: "28000",
    description:
      "Triple beef patties, Lettuce, Tomato, Onion, Double Cheddar, Special BBQ sauce",
    image: burger1,
  },
  {
    name: "Burger Classic Deluxe",
    price: "22000",
    description:
      "Double beef patties, Fresh Lettuce, Tomato, Onion, Cheddar, House sauce",
    image: burger2,
  },
  {
    name: "Spicy Burger",
    price: "25000",
    description:
      "Beef patty, Jalapenos, Lettuce, Tomato, Onion, Pepper Jack cheese, Spicy mayo",
    image: burger3,
  },
  {
    name: "Cheese Lover's Burger",
    price: "23000",
    description:
      "Beef patty, Lettuce, Tomato, Onion, Triple Cheddar, Cheese sauce",
    image: burger4,
  },
  {
    name: "BBQ Bacon Burger",
    price: "27000",
    description:
      "Beef patty, Crispy bacon, Lettuce, Tomato, Onion, Smoked Cheddar, BBQ sauce",
    image: burger5,
  },
  {
    name: "Mushroom Swiss Burger",
    price: "26000",
    description:
      "Beef patty, Sautéed mushrooms, Lettuce, Swiss cheese, Garlic aioli",
    image: burger6,
  },
  {
    name: "Chicken Burger",
    price: "22000",
    description:
      "Grilled chicken, Lettuce, Tomato, Onion, Swiss cheese, Honey mustard",
    image: burger7,
  },
  {
    name: "Fish Burger",
    price: "24000",
    description:
      "Crispy fish fillet, Lettuce, Tomato, Tartar sauce, American cheese",
    image: burger8,
  },
  {
    name: "Veggie Burger",
    price: "21000",
    description:
      "Grilled veggie patty, Lettuce, Tomato, Onion, Avocado, Vegan mayo",
    image: burger9,
  },
  {
    name: "Buffalo Chicken Burger",
    price: "25000",
    description:
      "Crispy chicken, Lettuce, Tomato, Onion, Buffalo sauce, Blue cheese",
    image: burger10,
  },
  {
    name: "Bacon Double Cheeseburger",
    price: "28000",
    description:
      "Double beef patties, Crispy bacon, Lettuce, Tomato, Double Cheddar, Special sauce",
    image: burger11,
  },
];

const Menu = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-black mb-4 text-black bg-yellow-500 px-4 py-4">
        Our Menu
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <MenuCard key={index} burger={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
