import React from "react";
import Hamim from "../../assets/image/Hamim copy - Copy.png";
import CV from "../../assets/image/Hamim Hossain Resume.pdf";

const Home = () => {
  return (
    <section id="home" className="w-full pt-20">
      <div className="flex flex-col justify-center px-6 md:flex-row md:px-20">
        {/* Left Content */}
        <div className="w-full text-center md:w-[65%] md:text-left">
          <h3 className="font-poppinsSemibold text-[16px] tracking-wider text-[#B1B493] esm:text-[18px] sm:text-[20px]">
            Hello, This is Hamim Hossain
          </h3>
          <h1 className="mt-3 font-poppinsEbold text-[32px] leading-snug esm:text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] xl:text-[65px]">
            Creative <br />
            <span className="text-[#B1B493]">Programmer &</span>
            <br />
            Frontend Developer
          </h1>
          <div className="mt-6 flex flex-col items-center justify-center gap-x-6 gap-y-4 font-poppinsSemibold text-lg esm:flex-row esm:text-xl md:justify-start">
            <a
              className="rounded-md border-[3px] border-[#B1B493] bg-[#B1B493] px-4 py-2 text-white transition-all duration-300 hover:bg-[#9fa18a]"
              href="#contact"
            >
              Hire me
            </a>
            <a
              className="rounded-md border-[3px] border-[#B1B493] px-4 py-2 text-[#B1B493] transition-all duration-300 hover:bg-[#B1B493] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href={CV}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[35%]">
          <img
            className="w-[80%] sm:w-[60%] md:w-full"
            src={Hamim}
            alt="Hamim Hossain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
