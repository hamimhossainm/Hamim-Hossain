import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Address = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex items-center gap-x-4">
        <div>
          <FaPhoneAlt className="rounded-full bg-[#B1B493] px-2 py-2 text-5xl text-white" />
        </div>
        <div>
          <h3 className="mb-3 font-poppinsSemibold text-xl">Phone :</h3>
          <p className="text-normal font-poppinsReg text-gray-500">
            +8801904-486467
          </p>
        </div>
      </div>

      <div className="mb-8 flex items-center gap-x-4">
        <div>
          <SiGmail className="rounded-full bg-[#B1B493] px-2 py-2 text-5xl text-white" />
        </div>
        <div>
          <h3 className="mb-3 font-poppinsSemibold text-xl">Email :</h3>
          <p className="text-normal font-poppinsReg text-gray-500">
            hamimhossain.inbox@outlook.com
          </p>
        </div>
      </div>

      <div className="mb-8 flex items-center gap-x-4">
        <div>
          <FaMapMarkerAlt className="rounded-full bg-[#B1B493] px-2 py-2 text-5xl text-white" />
        </div>
        <div>
          <h3 className="mb-3 font-poppinsSemibold text-xl">Address</h3>
          <p className="text-normal font-poppinsReg text-gray-500">
            Uttara, Dhaka - 1230
          </p>
        </div>
      </div>

      <div className="w-full">
        <iframe
          className="h-[200px] w-full border-2 border-[#B1B493] shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.0011217270185!2d90.38324473582304!3d23.871862525408257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41746c7628b%3A0x909d6a0f5cebfe8f!2sSector-13%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1727262337945!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;
