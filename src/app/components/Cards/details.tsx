// PageView.tsx (Component)

import Link from "next/link";
import React from "react";
import "./style.css";
import IconButton from "../Button/IconButton";
import { FiChevronDown, FiCpu, FiGithub, FiLink } from "react-icons/fi";
import { Role, Skill } from "@/app/api/response/types";
import Image from "next/image";
import { Tag } from "../Tags";
interface PageViewProps {
  page: string;
  menuOptions?: Skill[];
  title: string;
  description: string;
  headerImg?: string;
  currentRole?: Role[];
}

const PageView: React.FC<PageViewProps> = ({
  page,
  title,
  description,
  headerImg,
  menuOptions,
  currentRole,
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl">
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
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="p-4">
        <div className="flex col-2 justify-between items-center">
          <h4 className="text-2xl font-semibold text-gray-800">{`Roles and Responsibilities`}</h4>
        </div>
        <div
          key="idd"
          className="mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl z-50 
                     h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
        >
          {currentRole?.map((role: Role) => (
            <div key={role.id}>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 font-semibold border-b border-gray-300 dark:border-gray-700">
                {role.roleName}
              </div>

              <ul className="py-2">
                {currentRole?.map((role: Role) => (
                  <li
                    key={role.roleName}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {role.roleDescription}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex col-2 justify-between items-center">
          <h4 className="text-2xl font-semibold text-gray-800">{`Technologies Used`}</h4>
        </div>
        <div
          className="mt-2 p-2 h-28 w-100 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl z-50 
                     h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800"
        >
          {menuOptions?.map((skill: Skill) => (
            <Tag key={skill.id} text={skill.skill} />
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-100">
        <div className="flex space-x-4">
          <IconButton Icon={FiLink} tooltip="Hosted URL" />
          <IconButton Icon={FiGithub} tooltip="Github" />
          <IconButton
            Icon={FiCpu}
            menuOptions={menuOptions}
            tooltip="Technologies"
          />
          <Link href={`/project/${page}`}>
            <IconButton Icon={FiChevronDown} tooltip="More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageView;
