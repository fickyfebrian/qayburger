import React, { useState, useEffect } from "react";
import axios from "axios";

const TestimonialsCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-4 py-4 flex flex-col justify-between min-h-[150px] min-w-[300px] max-w-[300px] bg-white rounded-lg overflow-hidden m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="text-center p-6">
        <h2 className="text-xl font-semibold">{review.user.fullName}</h2>
        <p className={`mt-4 text-gray-700 ${!isExpanded && "line-clamp-4"}`}>
          {review.body}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-yellow-500 hover:underline mt-2"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
        <div className="mt-4 flex justify-center space-x-4"></div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/comments");
        setReviews(response.data.comments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center mb-8">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {reviews.map((review) => (
          <TestimonialsCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
