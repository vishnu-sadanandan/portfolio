// Card.tsx (Component)
import React from 'react';
import "./style.css";
import IconButton from '../Button/IconButton';
import { FiChevronDown, FiCpu, FiGithub, FiLink } from 'react-icons/fi';
import { Skill } from '@/app/api/response/types';
import Image from "next/image"
interface CardProps {
  menuOptions?: Skill[]
  title: string;
  description: string;
  headerImg?: string;
}

const Card: React.FC<CardProps> = ({ title, description, headerImg, menuOptions }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl">

      <div className="p-4">
        <div className="flex col-2 justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <Image
            src={`/${headerImg}.svg`}
            alt={`${headerImg} Logo`}
            className="top-2 right-2 w-12 h-12 object-contain rounded-md"
            width={25}
            height={25}
          />
        </div>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="flex space-x-4">
          <IconButton Icon={FiLink} tooltip="Hosted URL" />
          <IconButton Icon={FiGithub} tooltip="Github" />
          <IconButton Icon={FiCpu} menuOptions={menuOptions} tooltip="Technologies" />
          <IconButton Icon={FiChevronDown} tooltip="More" />
        </div>
      </div>
    </div>
  );
};

export default Card;
