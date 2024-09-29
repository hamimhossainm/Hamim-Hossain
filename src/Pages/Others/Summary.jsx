import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import CountUp from "react-countup";

const Summary = () => {
  return (
    <div className="h-fit w-full bg-[#cdcdcf] px-6 py-12 esm:px-12 sm:px-16 lg:px-20 lg:py-20">
      <div className="grid grid-cols-1 gap-10 esm:grid-cols-1 esm:place-items-start lg:grid-cols-4 lg:place-items-center">
        {/* Project Complete */}
        <div className="flex items-center justify-center esm:gap-x-2 lg:gap-x-5">
          <div className="rounded-full bg-[#B1B493] text-5xl text-white esm:px-1 esm:py-1 md:px-3 md:py-3">
            <IoBriefcaseOutline />
          </div>
          <div>
            <h2 className="font-poppinsEbold esm:text-[20px] lg:text-[32px]">
              <CountUp start={0} end={50} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold uppercase text-[#50504f] esm:text-[14px] md:text-lg">
              Project Complete
            </p>
          </div>
        </div>

        {/* Happy Clients */}
        <div className="flex items-center justify-center esm:gap-x-2 lg:gap-x-5">
          <div className="rounded-full bg-[#B1B493] text-5xl text-white esm:px-1 esm:py-1 md:px-3 md:py-3">
            <AiOutlineUsergroupAdd />
          </div>
          <div>
            <h2 className="font-poppinsEbold esm:text-[20px] lg:text-[32px]">
              <CountUp start={0} end={30} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold uppercase text-[#50504f] esm:text-[14px] md:text-lg">
              Happy Clients
            </p>
          </div>
        </div>

        {/* Cups of Coffee */}
        <div className="flex items-center justify-center esm:gap-x-2 lg:gap-x-5">
          <div className="rounded-full bg-[#B1B493] text-5xl text-white esm:px-1 esm:py-1 md:px-3 md:py-3">
            <FiCoffee />
          </div>
          <div>
            <h2 className="font-poppinsEbold esm:text-[20px] lg:text-[32px]">
              <CountUp start={350} end={410} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold uppercase text-[#50504f] esm:text-[14px] md:text-lg">
              Cups of Coffee
            </p>
          </div>
        </div>

        {/* Years of Experience */}
        <div className="flex items-center justify-center esm:gap-x-2 lg:gap-x-5">
          <div className="rounded-full bg-[#B1B493] text-5xl text-white esm:px-1 esm:py-1 md:px-3 md:py-3">
            <FaRegCalendarCheck />
          </div>
          <div>
            <h2 className="font-poppinsEbold esm:text-[20px] lg:text-[32px]">
              <CountUp start={0} end={2} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold uppercase text-[#50504f] esm:text-[14px] md:text-lg">
              Years Experienced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
