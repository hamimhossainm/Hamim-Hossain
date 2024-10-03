import React from "react";
import Projectset from "./Projectset";

const Projects = () => {
  return (
    <section
      id="project"
      className="xsm:px-2 xsm:py-10 w-full bg-[#DEDEDE] esm:px-4 md:px-20 md:py-20"
    >
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-[#949776] esm:text-[13px] md:text-xl">
            Accomplishments
          </h3>
          <h2 className="xsm:text-[26px] mt-3 font-poppinsSemibold esm:text-[28px] md:text-4xl">
            Recent Works
          </h2>
          <p className="xsm:text-[12px] mt-5 font-poppinsReg tracking-wide text-gray-500 esm:text-[16px] md:text-[19px]">
            Explore my latest projects crafted for innovation and impact !
          </p>
        </div>
        <div className="xsm:mt-10 esm:mt-20">
          <Projectset />
        </div>
      </div>
    </section>
  );
};

export default Projects;
