import React from "react";
import ContactForm from "./ContactForm";
import Address from "./Address";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#FFFFFF] px-20 pt-20">
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-[#B1B493]">
            Contact me
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl">
            Have a Project ?
          </h2>
          <p className="mt-5 text-[19px] tracking-wide text-gray-500">
            For any kind of web project , contact me !
          </p>
        </div>
        <div className="mt-20 flex items-start justify-center">
          <div className="w-[65%] rounded-md bg-[#F8F9FA] px-12 py-10">
            <ContactForm />
          </div>
          <div className="w-[35%] px-10">
            <Address />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
