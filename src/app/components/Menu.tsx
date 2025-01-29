'use client';

// app/components/Menu.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
type IconKey = keyof typeof FiIcons;
import { useSelector } from 'react-redux';
import { Menu as MenuType, State } from '../api/response/types';

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { menus, loading } = useSelector((state: State) => state.menu);

  return (
    <aside key={`Sidebar`}
      className={`${isExpanded ? "w-64" : "w-20"} bg-gray-900 text-white flex flex-col h-screen transition-all duration-300`}
    >
      {/* Logo & Toggle Button */}
      <div
        className="flex items-center justify-between h-16 px-4 border-b border-gray-700 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo"
          className={`h-8 transition-all duration-300 ${isExpanded ? "block" : "mx-auto"
            }`}
        />
        {isExpanded && (
          <FiIcons.FiMenu className="text-gray-400 text-2xl cursor-pointer" />
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6">
        <ul>
          {loading && <li>
            <Link
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-700 rounded-md"
            >
              Loading
            </Link>
          </li>}
          {!loading && menus && menus.length > 0 && menus.filter((m) => m.name !== "Settings").map((m: MenuType) => {
            const icon = m.icon
            const IconComponent = FiIcons[icon as unknown as IconKey];
            return (<li key={m.id}>
              <Link
                href={`${m.path}`}
                className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-700 rounded-md"
              >
                <IconComponent className="w-6 h-6 text-gray-400" />
                {isExpanded && <span className="ml-3">{m.name}</span>}
              </Link>
            </li>)
          })}
        </ul>
      </nav>

      {/* Footer (Settings) */}
      {!loading && menus && menus.length > 0 && menus.filter((m: MenuType) => m.name === "Settings").map((m: MenuType) => {
        const IconComponent = FiIcons[m.icon as unknown as IconKey];
        return (<div key={m.id} className="border-t border-gray-700">
          <Link
            key={m.id}
            href="#"
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-700 rounded-md"
          >
            <IconComponent className="w-6 h-6 text-gray-400" />
            {isExpanded && <span className="ml-3">{m.name}</span>}
          </Link>
        </div>)
      })}

    </aside>
  );
};

export default Menu;
