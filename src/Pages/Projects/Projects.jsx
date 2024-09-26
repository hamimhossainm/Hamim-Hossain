import React from "react";
import Projectset from "./Projectset";

const Projects = () => {
  return (
    <section id="project" className="hidden w-full bg-[#DEDEDE] px-20 py-20">
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-[#949776]">
            Accomplishments
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl">Recent Works</h2>
          <p className="mt-5 text-[19px] tracking-wide text-gray-500">
            Explore my latest projects crafted for innovation and impact !
          </p>
        </div>
        <div className="mt-20">
          <Projectset />
        </div>
      </div>
    </section>
  );
};

export default Projects;
