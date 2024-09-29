import React from "react";
import Projectset from "./Projectset";

const Projects = () => {
  return (
    <section
      id="project"
      className="w-full bg-[#DEDEDE] esm:px-4 esm:py-10 md:px-20 md:py-20"
    >
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-[#949776] esm:text-[13px] md:text-xl">
            Accomplishments
          </h3>
          <h2 className="mt-3 font-poppinsSemibold esm:text-[28px] md:text-4xl">
            Recent Works
          </h2>
          <p className="mt-5 tracking-wide text-gray-500 esm:text-[16px] md:text-[19px]">
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
