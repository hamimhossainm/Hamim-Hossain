import React from "react";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import Hamim from "../../assets/image/meee.png";

const ProjectsBanner = () => {
  return (
    <div className="relative flex w-full items-center justify-center bg-[#B1B493] esm:flex-col esm:px-4 esm:py-10 md:flex-row md:px-20 md:py-0">
      <div className="esm:w-full md:w-[70%]">
        <h2 className="mb-8 font-poppinsEbold esm:text-[28px] md:text-4xl">
          Do you have any project on your mind ?
        </h2>
        <p className="esm:[16px] mb-8 font-poppinsSemibold leading-loose tracking-wider text-white md:text-xl">
          Have any project in mind? Let me transform your vision into reality!
          With my outstanding frontend skills, I’ll deliver an elegant and
          engaging experience.
        </p>
        <div className="flex items-center gap-x-5">
          <a
            className="rounded-md bg-[#1DBF73] px-5 py-0 font-poppinsSemibold text-[50px] text-white"
            href="https://www.fiverr.com/users/hamimhossain_in"
            target="_blank"
          >
            <SiFiverr />
          </a>

          <a
            className="rounded-md bg-[#13A300] px-5 py-0 font-poppinsSemibold text-[50px] text-white"
            href="https://www.upwork.com"
            target="_blank"
          >
            <FaUpwork />
          </a>
          <a
            className="rounded-md bg-white px-5 py-0 font-poppinsSemibold text-[50px] text-[#28ACF6]"
            href="https://www.freelancer.com"
            target="_blank"
          >
            <SiFreelancer />
          </a>
        </div>
      </div>
      <div className="w-[30%] esm:hidden md:block">
        <img className="w-[450px]" src={Hamim} alt="" />
      </div>
    </div>
  );
};

export default ProjectsBanner;
