import React from "react";
import Skillset from "./Skillset";

const Skills = () => {
  return (
    <section
      id="skill"
      className="xsm:px-2 xsm:py-10 w-full bg-[#F8F9FA] esm:px-4 md:px-20 md:py-24"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-[#B7BA9B] esm:text-[13px] md:text-xl">
            SKILLS
          </h3>
          <h2 className="xsm:text-[26px] mt-3 font-poppinsSemibold esm:text-[28px] md:text-4xl">
            My Skills
          </h2>
          <p className="xsm:text-[12px] mt-5 font-poppinsReg tracking-wide text-gray-500 esm:text-[16px] md:text-[19px]">
            Ready to elevate your project?{" "}
            <a className="font-bold text-slate-900" href="#contact">
              Contact
            </a>{" "}
            me for expert front-end development today !
          </p>
        </div>
        <div className="mt-10">
          <Skillset />
        </div>
      </div>
    </section>
  );
};

export default Skills;
