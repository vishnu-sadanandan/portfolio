// components/IconButton.js
import { Skill } from '@/app/api/response/types';
import React, { useEffect, useRef, useState } from 'react';

interface IconButtonProps {
  menuOptions?: Skill[]
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;  // Type for the passed icon component
  size?: number;  // Icon size (default is 2)
  color?: string;  // Icon color (default is 'black')
  backgroundColor?: string;  // Background color (default is 'transparent')
  tooltip?: string;  // Tooltip text (default is 'Unknown')
}

const IconButton: React.FC<IconButtonProps> = ({ menuOptions=null, Icon, size = 2, color = 'black', backgroundColor = 'transparent', tooltip = "Unknown", }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (popupRef?.current && !popupRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <div
        className={`relative flex justify-center items-center rounded-full p-2 group`}
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          backgroundColor: backgroundColor,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon color={color} size={`${size * 0.6}rem`} tooltip={"test"} />
        {tooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm px-2 py-1 bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tooltip}
          </div>
        )}
      </div>

      {menuOptions && isOpen && (
        <div
          ref={popupRef}
          className="fixed mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl z-50 
                     h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
        >
          <div className="sticky top-0 bg-white dark:bg-gray-800 px-4 py-2 font-semibold border-b border-gray-300 dark:border-gray-700">
            {`Technologies`}
          </div>

          <ul className="py-2">
          {menuOptions.map((option:Skill) => (<li key={option.skill} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{option.skill}</li>))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IconButton;
