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
    <div>
      <div className="px-32 esm:hidden lg:block">
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

      <div className="w-full esm:block lg:hidden">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="h-[400px] w-full bg-white py-10">
              <img
                className="mx-auto w-20 rounded-full"
                src={item.img}
                alt=""
              />
              <h2 className="mt-2 text-center font-poppinsSemibold">
                {item.name}
              </h2>
              <h4 className="text-center font-poppinsReg text-[10px] text-gray-500">
                {item.desig}
              </h4>
              <div className="mt-1 flex justify-center">
                <p className="flex text-[10px] text-yellow-500">{item.icon}</p>
              </div>
              <p className="mt-4 px-14 text-justify tracking-wider text-slate-500">
                {item.review}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSet;
