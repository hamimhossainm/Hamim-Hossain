import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#232931] px-10 py-10 text-white">
      <div className="xsm:text-[12px] font-poppinsReg esm:text-[16px] md:text-lg">
        <div className="mb-3 flex justify-center gap-x-5 text-2xl">
          <a href="https://www.facebook.com/hamim641h" target="_blank">
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/hamim-hossain2308/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/hamimhossainm" target="_blank">
            <FaGithub />
          </a>
        </div>
        <p>&copy; Developed by Hamim Hossain || 2024</p>
      </div>
    </div>
  );
};

export default Footer;
