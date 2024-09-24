import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Summary from "./Pages/Others/Summary";
import Skills from "./Pages/Skills/Skills";
import "react-circular-progressbar/dist/styles.css";

const App = () => {
  return (
    <main className="h-full w-full bg-gradient-to-r from-[#ffffff] to-[#e2e0e0]">
      <Navbar />
      <Home />
      <Summary />
      <About />
      <Skills />
    </main>
  );
};

export default App;
