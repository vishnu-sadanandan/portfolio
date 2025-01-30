// components/IconButton.js
import React from 'react';

interface IconButtonProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;  // Type for the passed icon component
  size?: number;  // Icon size (default is 2)
  color?: string;  // Icon color (default is 'black')
  backgroundColor?: string;  // Background color (default is 'transparent')
  tooltip?: string;  // Tooltip text (default is 'Unknown')
}

// Define a reusable component for rounded Fi icons
const IconButton: React.FC<IconButtonProps> = ({ Icon, size = 2, color = 'black', backgroundColor = 'transparent', tooltip = "Unknown" }) => {
  // Render the icon wrapped in a circle
  return (
    <div
      className={`relative flex justify-center items-center rounded-full p-2 group`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        backgroundColor: backgroundColor,
      }}
    >
      <Icon color={color} size={`${size * 0.6}rem`} tooltip={"test"} />
      {tooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-sm px-2 py-1 bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {tooltip}
        </div>
      )}
    </div>

  );
};

export default IconButton;
