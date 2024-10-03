import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import items from "./ReviewItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSet = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
  };
  return (
    <div className="">
      <div className="xsm:hidden px-32 lg:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
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

      <div className="xsm:block flex w-full justify-center lg:hidden">
        <div className="">
          <Slider {...settings}>
            {items.map((item) => (
              <div
                key={item.id}
                className="xsm:px-2 h-[450px] bg-white py-5 esm:px-10"
              >
                <div className="flex justify-center">
                  <img className="w-20 rounded-full" src={item.img} alt="" />
                </div>
                <h2 className="mt-3 text-center font-poppinsSemibold text-[14px]">
                  {item.name}
                </h2>
                <h4 className="mt-1 text-center font-poppinsReg text-[12px] text-gray-500">
                  {item.desig}
                </h4>
                <p className="mt-2 flex justify-center text-[10px] text-yellow-500">
                  {item.icon}
                </p>
                <p className="xsm:border-2 xsm:shadow-xl 400xsm:border-slate-400 xsm:h-[220px] mt-5 px-2 text-justify font-poppinsReg text-[12px] leading-loose tracking-wider text-gray-500 esm:h-fit esm:border-0 esm:shadow-none">
                  {item.review}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewSet;
