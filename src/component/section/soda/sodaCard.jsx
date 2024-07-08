import React from 'react'

const SodaCard = ({ soda }) => {
  return (
    <div className="bg-transparent transition duration-300 ease-in-out transform  hover:scale-150 ">
      <img 
      className="w-48 h-48 rounded-full object-cover mx-auto mt-4"
      src={soda.image}
      alt={soda.name} 
      />
    </div>
  )
}

export default SodaCard
