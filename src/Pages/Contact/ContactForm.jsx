import React from "react";

const ContactForm = () => {
  return (
    <div className="full">
      <div className="mb-6 flex w-full esm:gap-4 md:gap-x-10">
        <input
          className="rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none esm:h-10 esm:w-full esm:px-2 esm:py-2 esm:text-[12px] md:h-16 md:w-[50%] md:px-4 md:py-4 md:text-lg"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none esm:h-10 esm:w-full esm:px-2 esm:py-2 esm:text-[12px] md:h-16 md:w-[50%] md:px-4 md:py-4 md:text-lg"
          type="email"
          name="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none esm:h-10 esm:px-2 esm:py-2 esm:text-[12px] md:h-16 md:px-4 md:py-4 md:text-lg"
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          className="w-full resize-none rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none esm:px-2 esm:py-2 esm:text-[12px] md:px-4 md:py-4 md:text-lg"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div>
        <button className="rounded-md bg-black px-3 py-3 font-poppinsReg font-medium text-white esm:w-full esm:text-[16px] md:w-52 md:text-lg">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
