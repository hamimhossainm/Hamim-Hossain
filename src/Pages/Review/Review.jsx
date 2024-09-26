import React from "react";
import ReviewSet from "./ReviewSet";

const Review = () => {
  return (
    <section id="review" className="hidden w-full bg-[#B1B493] px-20 py-20">
      <div className="w-full flex-col items-center justify-center">
        <div className="w-full text-center">
          <h3 className="font-poppinsSemibold text-xl uppercase tracking-widest text-white">
            Testimonials
          </h3>
          <h2 className="mt-3 font-poppinsSemibold text-4xl text-white">
            What client says about me?
          </h2>
          <p className="mt-5 text-[19px] tracking-wide text-white">
            See all of my clients and colleagues appreciation !
          </p>
        </div>
        <div className="mt-20">
          <ReviewSet />
        </div>
      </div>
    </section>
  );
};

export default Review;
