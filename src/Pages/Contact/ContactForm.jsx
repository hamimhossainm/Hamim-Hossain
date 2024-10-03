import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const sendMessage = () => {
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      toast.success("Messages send successfully ✔", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Please input all the fields 📝", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="full">
      <ToastContainer />
      <div className="xsm:gap-x-3 mb-6 flex w-full esm:gap-x-4 md:gap-x-10">
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          className="xsm:h-10 xsm:px-2 xsm:py-2 xsm:w-[50%] xsm:text-[12px] rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none sm:w-full md:h-16 md:w-[50%] md:px-4 md:py-4 md:text-lg"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          className="xsm:h-10 xsm:px-2 xsm:py-2 xsm:w-[50%] xsm:text-[12px] rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none md:h-16 md:w-[50%] md:px-4 md:py-4 md:text-lg"
          type="email"
          name="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-6">
        <input
          onChange={(e) => setsubject(e.target.value)}
          value={subject}
          className="xsm:h-10 xsm:px-2 xsm:py-2 xsm:text-[12px] w-full rounded-sm border-[2px] border-[#B1B493] font-poppinsReg shadow-sm outline-none md:h-16 md:px-4 md:py-4 md:text-lg"
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <textarea
          onChange={(e) => setmessage(e.target.value)}
          value={message}
          rows={6}
          className="xsm:px-2 xsm:py-2 xsm:text-[12px] w-full resize-none rounded-sm border-[2px] border-[#B1B493] px-4 py-4 font-poppinsReg text-lg shadow-sm outline-none md:px-4 md:py-4 md:text-lg"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div>
        <button
          onClick={sendMessage}
          className="rounded-md bg-black px-3 py-3 font-poppinsReg font-medium text-white esm:w-full esm:text-[16px] md:w-52 md:text-lg"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
