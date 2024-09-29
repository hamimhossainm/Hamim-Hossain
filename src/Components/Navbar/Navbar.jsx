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
          ? "fixed left-0 right-0 top-0 z-50 bg-white shadow-lg"
          : "relative bg-transparent"
      } flex w-full items-center justify-between px-8 py-6 transition-all duration-300 ease-in-out esm:bg-black esm:text-white md:px-20`}
    >
      <a className="font-poppinsEbold text-3xl" href="#nav">
        HAMIM HOSSAIN<span className="text-gray-500">.</span>
      </a>

      <ul className="hidden items-center gap-12 font-poppinsSemibold text-lg lg:flex lg:gap-6 xl:gap-12">
        <li className="hover:text-gray-600">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#skill">Skills</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#service">Services</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#project">Projects</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#review">Review</a>
        </li>
        <li className="hover:text-gray-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={showMenu}>
        {open ? (
          <IoCloseSharp className="block cursor-pointer text-4xl lg:hidden" />
        ) : (
          <IoMenu className="block cursor-pointer text-4xl lg:hidden" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[84px] flex w-full flex-col items-center gap-7 bg-white py-5 font-poppinsSemibold text-lg text-black backdrop-blur-lg transition-all duration-700 ease-in-out lg:hidden ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#about">About</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#skill">Skills</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#service">Services</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#project">Projects</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#review">Review</a>
        </li>
        <li
          onClick={() => setOpen(false)}
          className="w-full cursor-pointer list-none text-center transition-all hover:text-gray-600"
        >
          <a href="#contact">Contact</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
