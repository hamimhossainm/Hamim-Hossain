import React from "react";
import Skillset from "./Skillset";

const Skills = () => {
  return (
    <section id="skill" className="w-full bg-[#F8F9FA] px-20 py-24">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-[#B7BA9B]">
            SKILLS
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl">My Skills</h2>
          <p className="mt-5 text-[19px] tracking-wide text-gray-500">
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
