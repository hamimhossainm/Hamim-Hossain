import React from "react";
import Serviceset from "./Serviceset";

const Services = () => {
  return (
    <section id="service" className="hidden w-full bg-[#FFFFFF] px-20 py-20">
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-[#B7BA9B]">
            I OFFERS
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl">Services</h2>
          <p className="mt-5 text-[19px] tracking-wide text-gray-500">
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
