import React, { useState } from "react";

const Navbar = () => {
  const underLine =
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#B2B594] after:content-['']";
  const [hovered, sethovered] = useState(false);
  return (
    <div className="flex w-full items-center justify-center px-20 py-6">
      <div className="flex w-full items-center justify-between">
        <div className="w-[35%]">
          <h1 className="font-poppinsEbold text-[28px]">
            HAMIM HOSSAIN<span className="text-[#747575]">.</span>
          </h1>
        </div>
        <div className="font-poppinsReg flex w-[65%] justify-end gap-x-16 text-[17px] font-bold">
          <a className={`relative text-[#B2B594] ${underLine}`} href="#home">
            Home
          </a>
          <a
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            className={`transition-all duration-300 ease-in-out ${
              hovered ? underLine : ""
            }`}
            href="#about"
          >
            About
          </a>
          <a
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            className={`transition-all duration-300 ease-in-out ${
              hovered ? underLine : ""
            }`}
            href="#skill"
          >
            Skills
          </a>
          <a
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            className={`transition-all duration-300 ease-in-out ${
              hovered ? underLine : ""
            }`}
            href="#service"
          >
            Services
          </a>
          <a
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            className={`transition-all duration-300 ease-in-out ${
              hovered ? underLine : ""
            }`}
            href="#project"
          >
            Projects
          </a>
          <a
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            className={`transition-all duration-300 ease-in-out ${
              hovered ? underLine : ""
            }`}
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
