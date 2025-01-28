// Card.tsx (Component)
import React from 'react';
import "./style.css"
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* <img className="w-full h-48 object-cover" src={imageUrl} alt={title} /> */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="p-4 bg-gray-100">
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
