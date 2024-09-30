import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Summary from "./Pages/Others/Summary";
import Skills from "./Pages/Skills/Skills";
import "react-circular-progressbar/dist/styles.css";
import Services from "./Pages/Services/Services";
import ProjectsBanner from "./Pages/Others/ProjectsBanner";
import Projects from "./Pages/Projects/Projects";
import Review from "./Pages/Review/Review";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []); // Removed showScroll from dependency array

  return (
    <main className="relative h-full w-full bg-[#EEEEEE]">
      <Navbar />
      <Home />
      <Summary />
      <About />
      <Skills />
      <Services />
      <ProjectsBanner />
      <Projects />
      <Review />
      <Contact />
      <Footer />

      <FaArrowUp
        className={`fixed bottom-10 right-10 animate-bounce cursor-pointer rounded-full bg-[#B1B493] px-2 py-2 text-4xl text-white transition-all duration-500 ease-in-out ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollTop}
      />
    </main>
  );
};

export default App;
