import React, { useEffect, useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav"
      className={`${
        isScrolled
          ? "fixed left-0 right-0 top-0 z-50 shadow-lg lg:bg-white"
          : "relative lg:bg-transparent"
      } flex w-full items-center justify-between px-8 py-6 transition-all duration-300 ease-in-out xsm:bg-black xsm:text-white md:px-20 lg:bg-transparent lg:text-black`}
    >
      <a className="font-poppinsEbold xsm:text-[20px] esm:text-3xl" href="#nav">
        HAMIM HOSSAIN<span className="text-gray-500">.</span>
      </a>

      <div className="hidden items-center gap-12 font-poppinsReg text-lg lg:flex lg:gap-6 xl:gap-12">
        <a
          className={`relative text-slate-500 transition-all duration-500 ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:origin-center after:bg-slate-500 after:content-[''] hover:text-gray-600 xsm:after:h-0 lg:after:h-[2px]`}
          href="#home"
        >
          Home
        </a>

        <a className="hover:text-gray-600" href="#about">
          About
        </a>

        <a className="hover:text-gray-600" href="#skill">
          Skills
        </a>

        <a className="hover:text-gray-600" href="#service">
          Services
        </a>

        <a className="hover:text-gray-600" href="#project">
          Projects
        </a>

        <a className="hover:text-gray-600" href="#review">
          Review
        </a>

        <a className="hover:text-gray-600" href="#contact">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={showMenu}>
        {open ? (
          <IoCloseSharp className="block cursor-pointer xsm:text-[25px] esm:text-4xl lg:hidden" />
        ) : (
          <IoMenu className="block cursor-pointer xsm:text-[25px] esm:text-4xl lg:hidden" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[84px] flex w-full flex-col items-center gap-7 bg-white py-5 font-poppinsReg text-black backdrop-blur-lg transition-all duration-700 ease-in-out xsm:text-[14px] esm:text-lg lg:hidden ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#home"
        >
          Home
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#about"
        >
          About
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#skill"
        >
          Skills
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#service"
        >
          Services
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#project"
        >
          Projects
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#review"
        >
          Review
        </a>

        <a
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
