import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skillset = () => {
  const items = [
    {
      id: 1,
      name: "HTML5",
      value: 95,
      lastw: "28%",
      lastM: "60%",
    },
    {
      id: 2,
      name: "CSS3",
      value: 90,
      lastw: "20%",
      lastM: "50%",
    },
    {
      id: 3,
      name: "TAILWIND CSS",
      value: 85,
      lastw: "38%",
      lastM: "42%",
    },
    {
      id: 4,
      name: "BOOTSTRAP5",
      value: 80,
      lastw: "8%",
      lastM: "76%",
    },
    {
      id: 5,
      name: "JAVASCRIPT",
      value: 65,
      lastw: "81%",
      lastM: "10%",
    },
    {
      id: 6,
      name: "REACT JS",
      value: 70,
      lastw: "28%",
      lastM: "54%",
    },
    // {
    //   id: 7,
    //   name: "SASS",
    //   value: 95,
    //   lastw: "23%",
    //   lastM: "31%",
    // },
    {
      id: 8,
      name: "REDUX TOOLKIT",
      value: 40,
      lastw: "31%",
      lastM: "12%",
    },
    {
      id: 9,
      name: "GIT & GITHUB",
      value: 95,
      lastw: "40%",
      lastM: "10%",
    },
    {
      id: 10,
      name: "PYTHON",
      value: 50,
      lastw: "33%",
      lastM: "20%",
    },
    // {
    //   id: 11,
    //   name: "PHP",
    //   value: 65,
    //   lastw: "43%",
    //   lastM: "20%",
    // },
    // {
    //   id: 12,
    //   name: "LARAVEL",
    //   value: 40,
    //   lastw: "13%",
    //   lastM: "27%",
    // },
  ];

  const circleStyles = {
    path: {
      stroke: "#B1B493",
      strokeLinecap: "round",
    },
    trail: {
      stroke: "#d6d6d6",
    },
    text: {
      fill: "#000000",
      fontSize: "22px",
      fontWeight: "bold",
    },
  };

  return (
    <div className="xsm:grid-cols-1 grid gap-10 esm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="xsm:w-[300px] mb-10 bg-white py-10 text-center shadow-xl esm:w-[350px]"
        >
          <h1 className="mb-5 font-poppinsSemibold text-2xl">{item.name}</h1>
          <div className="mx-auto mb-5 w-44">
            <CircularProgressbar
              value={item.value}
              text={`${item.value}%`}
              styles={circleStyles}
            />
          </div>
          <div className="flex w-full gap-x-5">
            <div className="w-[50%]">
              <h3 className="font-poppinsSemibold text-3xl text-[#B1B493]">
                {item.lastw}
              </h3>
              <p className="font-poppinsSemibold text-[#B1B493]">Last week</p>
            </div>
            <div className="w-[50%]">
              <h3 className="font-poppinsSemibold text-3xl text-[#B1B493]">
                {item.lastM}
              </h3>
              <p className="font-poppinsSemibold text-[#B1B493]">Last Month</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skillset;
