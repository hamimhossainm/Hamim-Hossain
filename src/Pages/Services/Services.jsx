import React from "react";
import Serviceset from "./Serviceset";

const Services = () => {
  return (
    <section
      id="service"
      className="w-full bg-[#FFFFFF] esm:px-4 esm:py-10 md:px-20 md:py-20"
    >
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-[#B7BA9B] esm:text-[13px] md:text-xl">
            I OFFERS
          </h3>
          <h2 className="mt-3 font-poppinsSemibold esm:text-[28px] md:text-4xl">
            Services
          </h2>
          <p className="mt-5 tracking-wide text-gray-500 esm:text-[16px] md:text-[19px]">
            Your go-to for premium front-end services – Websites that work as
            great as they look!
          </p>
        </div>
        <div className="mt-20">
          <Serviceset />
        </div>
      </div>
    </section>
  );
};

export default Services;
