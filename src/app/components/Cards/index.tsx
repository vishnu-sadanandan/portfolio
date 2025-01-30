// Card.tsx (Component)
import React from 'react';
import "./style.css"
import IconButton from '../Button/IconButton';
import { FiChevronDown, FiCpu, FiGithub, FiHome, FiLink, FiSearch, FiSettings } from 'react-icons/fi';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="flex space-x-4">
          <IconButton Icon={FiLink} tooltip="Hosted URL"/>
          <IconButton Icon={FiGithub} tooltip="Github"/>
          <IconButton Icon={FiCpu} tooltip="Technologies"/>
          <IconButton Icon={FiChevronDown} tooltip="More"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
