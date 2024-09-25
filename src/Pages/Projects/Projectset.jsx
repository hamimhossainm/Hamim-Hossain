import React from "react";
import { TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoRemoveOutline } from "react-icons/io5";
import items from "./ProjectItems";

const Projectset = () => {
  return (
    <div className="grid grid-cols-3 place-items-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-10 w-96 cursor-pointer px-5 py-5 shadow-xl transition-all duration-300 ease-in-out hover:bg-white"
        >
          <div className="relative">
            <img className="w-96" src={item.image} alt="" />
            <GoArrowUpRight className="absolute bottom-0 left-60 translate-y-1/2 bg-black px-2 py-2 text-[50px] text-white transition-all duration-300 ease-in-out hover:bg-orange-600" />
          </div>
          <div className="mt-3 flex items-center">
            <IoRemoveOutline className="text-3xl text-gray-500" />

            <h4 className="font-poppinsReg text-sm font-medium text-gray-600">
              {item.title1}
            </h4>
          </div>
          <h2 className="mb-5 font-poppinsReg text-xl font-bold tracking-wider">
            {item.title2}
          </h2>
          <p className="mb-5 text-justify text-[16px] text-gray-600">
            {item.description}
          </p>
          <div className="flex items-center justify-between pr-20">
            <a
              className="flex items-center gap-x-2 hover:text-[#B1B493]"
              href=""
              target="_blank"
            >
              <FiGithub /> Source Code
            </a>
            <a
              className="flex items-center gap-x-2 rounded-sm bg-black px-1 text-white"
              href=""
              target="_blank"
            >
              <TbWorld /> view project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectset;
