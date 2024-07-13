import React, { useState } from "react";

const TestimonialsCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white  rounded-lg overflow-hidden  m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img
        className="w-48 h-48 rounded-full object-cover mx-auto mt-4"
        src={review.image}
        alt={review.name}
      />
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold">{review.name}</h2>
        <p className="text-gray-500">{review.profession}</p>
        <p className={`mt-4 text-gray-700 ${!isExpanded && 'line-clamp-4'}`}>{review.description}</p>
        <button 
        onClick={toggleReadMore}
        className="text-yellow-500 hover:underline mt-2">
          ReadMore
        </button>
        <div className="mt-4 flex justify-center space-x-4"></div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
