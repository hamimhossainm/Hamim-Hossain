import React, { useState } from "react";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineDraw } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { SiProtonvpn } from "react-icons/si";

const Serviceset = () => {
  const [hoveredId, sethoveredId] = useState(null);
  const items = [
    {
      id: 1,
      icon: <LuCode2 />,
      name: "Web Development",
      description:
        "Creating responsive websites with HTML, CSS, JavaScript for seamless UI and optimal UX.",
    },
    {
      id: 2,
      icon: <MdOutlineDraw />,
      name: "Responsive Design",
      description:
        "Ensuring seamless website functionality across PC, tablets, & phones with responsive design.",
    },
    {
      id: 3,
      icon: <GrOptimize />,
      name: "Performance Optimization",
      description:
        "Optimizing website speed by minimizing load times, optimizing images, and efficient coding.",
    },
    {
      id: 4,
      icon: <BsBrowserChrome />,
      name: "Cross-Browser Compatibility",
      description:
        "Making sure websites function consistently across different web browsers (Chrome, Firefox, Safari, etc.).",
    },
    {
      id: 5,
      icon: <GrIntegration />,
      name: "Integration with Backend",
      description:
        "Connecting frontend to backend services using AJAX, RESTful APIs, or GraphQL.",
    },
    {
      id: 6,
      icon: <SiProtonvpn />,
      name: "UI/UX Prototyping",
      description:
        "Creating interactive prototypes to showcase website layout, functionality, and user experience beforehand.",
    },
  ];
  return (
    <div className="grid place-items-center esm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          onMouseEnter={() => sethoveredId(item.id)}
          onMouseLeave={() => sethoveredId(null)}
          key={item.id}
          className={`relative mb-24 h-[300px] w-[290px] cursor-pointer bg-[#FFFFFF] px-8 pb-5 shadow-xl hover:bg-[#B1B493]`}
        >
          <div
            className={`absolute -translate-y-1/2 rounded-full bg-[#B1B493] px-2 py-2 text-[60px] text-white transition-all duration-500 ease-in-out ${
              hoveredId === item.id ? "translate-x-1/2 bg-black" : ""
            }`}
          >
            {item.icon}
          </div>

          <h3
            className={`mt-14 font-poppinsSemibold text-xl ${
              hoveredId === item.id ? "text-white" : ""
            }`}
          >
            {item.name}
          </h3>
          <p
            className={`mt-5 font-poppinsReg font-semibold leading-loose text-gray-400 ${
              hoveredId === item.id ? "text-yellow-50" : ""
            }`}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Serviceset;
