import React from "react";
import ContactForm from "./ContactForm";
import Address from "./Address";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#FFFFFF] esm:px-4 esm:pt-10 md:px-20 md:pt-20"
    >
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-[#B1B493] esm:text-[13px] md:text-xl">
            Contact me
          </h3>
          <h2 className="mt-3 font-poppinsSemibold esm:text-[28px] md:text-4xl">
            Have a Project ?
          </h2>
          <p className="mt-5 tracking-wide text-gray-500 esm:text-[16px] md:text-[19px]">
            For any kind of web project , contact me !
          </p>
        </div>
        <div className="flex w-full items-start justify-center esm:mt-10 esm:flex-col md:mt-20 lg:flex-row">
          <div className="rounded-md bg-[#F8F9FA] py-10 esm:w-full esm:px-4 md:px-12 lg:w-[65%]">
            <ContactForm />
          </div>
          <div className="esm:w-full esm:px-4 md:px-10 lg:w-[35%]">
            <Address />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
