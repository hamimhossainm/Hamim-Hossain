import React from "react";
import { TbWorld } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { IoRemoveOutline } from "react-icons/io5";
import items from "./ProjectItems";

const Projectset = () => {
  return (
    <div className="xsm:grid-cols-1 grid place-items-center lg:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="xsm:w-80 mb-10 cursor-pointer px-5 py-5 shadow-xl transition-all duration-300 ease-in-out hover:bg-white esm:w-96"
        >
          <div className="relative">
            <img className="w-full" src={item.image} alt="" />
            <GoArrowUpRight className="xsm:left-52 absolute bottom-0 translate-y-1/2 bg-black px-2 py-2 text-[50px] text-white transition-all duration-300 ease-in-out hover:bg-orange-600 esm:left-60" />
          </div>
          <div className="mt-3 flex items-center">
            <IoRemoveOutline className="text-3xl text-gray-500" />

            <h4 className="xsm:text-[12px] font-poppinsReg font-medium text-gray-600 esm:text-sm">
              {item.title1}
            </h4>
          </div>
          <h2 className="xsm:text-lg mb-5 font-poppinsReg font-bold tracking-wider esm:text-xl">
            {item.title2}
          </h2>
          <p className="xsm:text-[12px] mb-5 text-justify font-poppinsReg text-gray-600 esm:text-[16px]">
            {item.description}
          </p>
          <div className="xsm:pr-10 flex items-center justify-between esm:pr-20">
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
