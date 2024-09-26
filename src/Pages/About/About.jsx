import React from "react";
import { SlEarphones } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";
import { GiJourney } from "react-icons/gi";
import { MdOutlineSportsCricket } from "react-icons/md";

const About = () => {
  const items = [
    {
      id: 1,
      title: "Name :",
      value: "Hamim Hossain",
    },
    {
      id: 2,
      title: "Date of Birth :",
      value: "August 23,1997",
    },
    {
      id: 3,
      title: "Address :",
      value: "Uttara, Dhaka-1230",
    },
    {
      id: 4,
      title: "Country :",
      value: "Bangladesh",
    },
    {
      id: 5,
      title: "Email :",
      value: "hamimhossain.inbox@outlook.com",
    },
    {
      id: 6,
      title: "Phone :",
      value: "+8801904-486467",
    },
  ];

  const itemsTwo = [
    { id: 1, icon: <SlEarphones />, name: "Learning" },
    { id: 2, icon: <FaCode />, name: "Coding" },
    { id: 3, icon: <GiJourney />, name: "Travel" },
    { id: 4, icon: <MdOutlineSportsCricket />, name: "Sports" },
  ];
  return (
    <section id="about" className="hidden bg-[#FFFFFF] px-20">
      <div className="flex w-full items-center">
        <div className="w-[40%]">
          <img
            className="w-[462px] shadow-2xl"
            src="/public/image/me.jpg"
            alt=""
          />
        </div>
        <div className="w-[60%]">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-[#B7BA9B]">
            My intro
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl">About Me</h2>
          <p className="mt-7 text-justify text-[19px] tracking-wide text-gray-500">
            Experienced Frontend Developer with a strong background in creating
            responsive and user-friendly web applications. Proven success in
            optimizing website performance, developing intuitive user
            interfaces, and collaborating with crossfunctional teams to drive
            project success.
          </p>
          <div className="mt-10">
            {items.map((item) => (
              <p
                key={item.id}
                className="relative mb-3 font-poppinsSemibold text-xl tracking-wide"
              >
                {item.title}{" "}
                <span className="absolute left-48 text-[#909470]">
                  {item.value}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-4 place-items-start">
            {itemsTwo.map((item) => (
              <div className="flex items-center gap-x-2 font-poppinsSemibold text-xl">
                <div className="bg-[#B1B493] px-2 py-2 text-white">
                  {item.icon}
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
