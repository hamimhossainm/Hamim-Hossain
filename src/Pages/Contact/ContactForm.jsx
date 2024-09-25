import React from "react";

const ContactForm = () => {
  return (
    <div className="full">
      <div className="mb-6 flex w-full gap-x-10">
        <input
          className="w-[50%] rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="w-[50%] rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none"
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          className="w-full resize-none rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div>
        <button className="rounded-md bg-black px-3 py-3 font-poppinsReg text-lg font-medium text-white">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
