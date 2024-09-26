import React from "react";

const Home = () => {
  return (
    <section id="home" className="hidden w-full pt-20">
      <div className="flex items-center justify-center px-20">
        <div className="w-[65%]">
          <h3 className="font-poppinsSemibold text-[20px] tracking-wider text-[#B1B493]">
            Hello, This is Hamim Hossain
          </h3>
          <h1 className="mt-3 font-poppinsEbold text-[65px] leading-snug">
            Creative <br />
            <span className="text-[#B1B493]">Programmer &</span>
            <br />
            Frontend Developer
          </h1>
          <div className="mt-6 flex gap-x-6 font-poppinsSemibold text-xl">
            <a
              className="rounded-md border-[3px] border-[#B1B493] bg-[#B1B493] px-2 py-1 text-white"
              href="#contact"
            >
              Hire me
            </a>
            <a
              className="rounded-md border-[3px] border-[#B1B493] px-2 py-1 text-[#B1B493] transition-all duration-300 hover:bg-[#B1B493] hover:text-white"
              target="_blank"
              href="/public/Hamim Hossain Resume.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-[35%]">
          <img
            className="backdrop-blur-xl"
            src="/public/image/Hamim copy - Copy.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
