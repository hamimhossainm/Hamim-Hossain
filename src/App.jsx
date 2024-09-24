import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Summary from "./Pages/Others/Summary";
import Skills from "./Pages/Skills/Skills";
import "react-circular-progressbar/dist/styles.css";
import Services from "./Pages/Services/Services";
import ProjectsBanner from "./Pages/Others/ProjectsBanner";
import Projects from "./Pages/Projects/Projects";

const App = () => {
  return (
    <main className="h-full w-full bg-gradient-to-r from-[#ffffff] to-[#e2e0e0]">
      <Navbar />
      <Home />
      <Summary />
      <About />
      <Skills />
      <Services />
      <ProjectsBanner />
      <Projects />
    </main>
  );
};

export default App;
