import React from "react";

const SodaCard = ({ soda }) => {
  return (
    <div className="px-8 py-8 rounded-lg transition duration-300 transform hover:-translate-y-10 hover:-translate-x-1 ">
      <img
        className="w-48 h-48 rounded-full object-cover mx-auto mt-2"
        src={soda.image}
        alt={soda.name}
      />
    </div>
  );
};

export default SodaCard;
