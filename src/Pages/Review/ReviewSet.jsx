import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import items from "./ReviewItems";

const ReviewSet = () => {
  return (
    <div className="px-32">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide>
            <div className="w-[650px] px-5 pb-10">
              <div className="flex items-start gap-x-5">
                <FaQuoteLeft className="text-[150px] text-[#B1B493]" />
                <p className="mb-8 mt-[60px] text-justify font-poppinsReg font-medium leading-relaxed tracking-wider text-gray-400">
                  {item.review}
                </p>
              </div>
              <div className="mb-5 flex items-center justify-center gap-x-5">
                <div className="w-28 rounded-full">
                  <img className="w-28 rounded-full" src={item.img} alt="" />
                </div>
                <div>
                  <h2 className="mb-1 font-poppinsSemibold text-2xl">
                    {item.name}
                  </h2>
                  <p className="font-poppinsReg text-base text-gray-400">
                    {item.desig}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSet;
