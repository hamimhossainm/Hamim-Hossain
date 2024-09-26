import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import CountUp from "react-countup";

const Summary = () => {
  return (
    <div className="hidden h-fit w-full bg-[#cdcdcf] px-20 py-20">
      <div className="grid grid-cols-4">
        <div className="flex items-center justify-center gap-x-5">
          <div className="rounded-full bg-[#B1B493] px-3 py-3 text-5xl text-white">
            <IoBriefcaseOutline />
          </div>
          <div>
            <h2 className="font-poppinsEbold text-[32px]">
              <CountUp start={0} end={50} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold text-xl uppercase text-[#50504f]">
              Project Complete
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="rounded-full bg-[#B1B493] px-3 py-3 text-5xl text-white">
            <AiOutlineUsergroupAdd />
          </div>
          <div>
            <h2 className="font-poppinsEbold text-[32px]">
              <CountUp start={0} end={30} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold text-xl uppercase text-[#50504f]">
              Happy Clients
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="rounded-full bg-[#B1B493] px-3 py-3 text-5xl text-white">
            <FiCoffee />
          </div>
          <div>
            <h2 className="font-poppinsEbold text-[32px]">
              <CountUp start={350} end={410} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold text-xl uppercase text-[#50504f]">
              Cups of coffee
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-5">
          <div className="rounded-full bg-[#B1B493] px-3 py-3 text-5xl text-white">
            <FaRegCalendarCheck />
          </div>
          <div>
            <h2 className="font-poppinsEbold text-[32px]">
              <CountUp start={0} end={2} duration={3}></CountUp>+
            </h2>
            <p className="font-poppinsSemibold text-xl uppercase text-[#50504f]">
              Years experienced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
