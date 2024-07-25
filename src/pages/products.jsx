import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa6';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setProducts(response.data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-2xl">Loading...</div>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-1/1 object-cover rounded-md mb-4"/>
          <p className="text-gray-600">{product.mealType}</p>
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <h1 className="text-2xl font-bold mx-auto">{product.name}</h1>
          <div className="flex items-center text-gray-600">
            <FaStar className="mr-2 text-yellow-500"/>
            <span>
              {product.rating}
            </span>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Products;
