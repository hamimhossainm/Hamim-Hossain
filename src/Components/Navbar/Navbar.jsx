import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);

      if (scrollTop > 200) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeUnderLine =
    "relative text-[#747575] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#B2B594] after:content-[''] after:transition-all after:duration-500"; // Smooth underline transition
  const underLine =
    "relative hover:text-[#747575] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#B2B594] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100 transition-colors duration-500"; // Smooth color transition

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        navbarBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className="h-[2px] bg-[#B2B594]"
        style={{ width: `${scrollPosition}%` }}
      ></div>

      <div className="flex w-full items-center justify-center px-20 py-6">
        <div className="flex w-full items-center justify-between">
          <div className="w-[35%]">
            <h1 className="font-poppinsEbold text-[28px]">
              HAMIM HOSSAIN<span className="text-[#747575]">.</span>
            </h1>
          </div>
          <div className="flex w-[65%] justify-end gap-x-16 font-poppinsReg text-[17px] font-bold">
            <a
              className={activeSection === "home" ? activeUnderLine : underLine}
              href="#home"
            >
              Home
            </a>
            <a
              className={
                activeSection === "about" ? activeUnderLine : underLine
              }
              href="#about"
            >
              About
            </a>
            <a
              className={
                activeSection === "skill" ? activeUnderLine : underLine
              }
              href="#skill"
            >
              Skills
            </a>
            <a
              className={
                activeSection === "service" ? activeUnderLine : underLine
              }
              href="#service"
            >
              Services
            </a>
            <a
              className={
                activeSection === "project" ? activeUnderLine : underLine
              }
              href="#project"
            >
              Projects
            </a>
            <a
              className={
                activeSection === "review" ? activeUnderLine : underLine
              }
              href="#review"
            >
              Review
            </a>
            <a
              className={
                activeSection === "contact" ? activeUnderLine : underLine
              }
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
