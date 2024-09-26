import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBg, setNavbarBg] = useState(false);
  const [open, setopen] = useState(false);

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
    "relative text-[#747575] esm:after:h-0 lg:after:h-[2px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#B2B594] after:content-[''] after:transition-all after:duration-500"; // Smooth underline transition
  const underLine =
    "relative hover:text-[#747575] esm:after:h-0 lg:after:h-[2px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#B2B594] after:scale-x-0 after:origin-center after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100 transition-colors duration-500"; // Smooth color transition

  return (
    <div>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          navbarBg ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div
          className="h-[2px] bg-[#B2B594] esm:hidden lg:block"
          style={{ width: `${scrollPosition}%` }}
        ></div>

        <div className="flex w-full items-center justify-center px-20 py-6 esm:bg-black esm:px-0 esm:text-white md:px-16 lg:bg-transparent lg:px-20 lg:text-black">
          <div className="flex w-full items-center justify-between">
            <div className="w-[35%] esm:w-full md:w-[45%]">
              <h1 className="font-poppinsEbold text-[28px] esm:px-4 md:px-0">
                HAMIM HOSSAIN<span className="text-[#747575]">.</span>
              </h1>
            </div>

            <div className="flex w-[65%] justify-end gap-x-16 font-poppinsReg text-[17px] font-bold esm:hidden lg:flex lg:gap-x-6 xl:gap-x-14 2xl:gap-x-16">
              <a
                className={
                  activeSection === "home" ? activeUnderLine : underLine
                }
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

            <div>
              <MdOutlineMenu
                onClick={() => setopen(true)}
                className="text-5xl esm:block esm:pr-4 lg:hidden lg:px-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-500 ease-in-out esm:fixed esm:top-24 esm:flex esm:w-full esm:flex-col esm:gap-y-5 esm:bg-transparent esm:py-8 esm:text-center esm:text-base esm:backdrop-blur-lg lg:hidden ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <a
          onClick={() => setopen(false)}
          className={activeSection === "home" ? activeUnderLine : underLine}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "about" ? activeUnderLine : underLine}
          href="#about"
        >
          About
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "skill" ? activeUnderLine : underLine}
          href="#skill"
        >
          Skills
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "service" ? activeUnderLine : underLine}
          href="#service"
        >
          Services
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "project" ? activeUnderLine : underLine}
          href="#project"
        >
          Projects
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "review" ? activeUnderLine : underLine}
          href="#review"
        >
          Review
        </a>
        <a
          onClick={() => setopen(false)}
          className={activeSection === "contact" ? activeUnderLine : underLine}
          href="#contact"
        >
          Contact
        </a>
        <IoClose onClick={() => setopen(false)} className="mx-auto" />
      </div>
    </div>
  );
};

export default Navbar;
