import React from "react";
import ReviewSet from "./ReviewSet";

const Review = () => {
  return (
    <section
      id="review"
      className="xsm:px-2 xsm:py-10 w-full bg-[#B1B493] esm:px-4 md:px-20 md:py-20"
    >
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold uppercase tracking-widest text-white esm:text-[13px] md:text-xl">
            Testimonials
          </h3>
          <h2 className="xsm:text-[26px] mt-3 font-poppinsSemibold text-white esm:text-[28px] md:text-4xl">
            What people says about me?
          </h2>
          <p className="xsm:text-[12px] mt-5 font-poppinsReg tracking-wide text-white esm:text-[16px] md:text-[19px]">
            See all of my clients and colleagues appreciation
          </p>
        </div>
        <div className="xsm:mt-10 esm:mt-20">
          <ReviewSet />
        </div>
      </div>
    </section>
  );
};

export default Review;
