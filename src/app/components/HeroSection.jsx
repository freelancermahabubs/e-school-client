"use client";
import React, {useRef, useState} from "react";
// Import Swiper React components

import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsFillBookmarkFill, BsFillTelephoneOutboundFill } from "react-icons/bs";
import {  BiSolidBookmarkAltPlus } from "react-icons/bi";

// import "./styles.css";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      {/* Main content container */}
      <div className="col-span-12 md:col-span-8 border-2 border-gray-300 shadow-2xl">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/XxJn10S/720843-1.jpg"
                alt=""
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/c2GStck/720843.jpg"
                alt=""
                className="w-full"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute bottom-2 z-[100]">
            <img
              className="w-1/2"
              src="https://i.ibb.co/p46rrX8/grass.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Sidebar content (right column on larger screens) */}
      <div className="col-span-12 md:col-span-4 space-y-3">
        <div>
          <a
            href="#"
            className="flex flex-col items-center h-44 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
          >
            <img
              className="object-cover w-full rounded-t-lg h-40 md:h-44 md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://i.ibb.co/7ndXrfh/1659749714541-e1695489864571.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#FF6D16]">
                চেয়ারম্যান
              </h5>
              <p className="mb-3 text-black">আব্দুল্লাহ জাহাঙ্গীর</p>
              <p className="mb-3 font-normal text-blue-700">তাঁর সম্পর্কে পড়ুন...</p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center h-44 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
          >
            <img
              className="object-cover w-full rounded-t-lg h-40 md:h-44 md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://i.ibb.co/BLvkrTg/Profile-Photo-460.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#FF6D16]">
                প্রিন্সিপাল
              </h5>
              <p className="mb-3 text-black">জয়নাল আহমেদ</p>
              <p className="mb-3 font-normal text-blue-700">তাঁর সম্পর্কে পড়ুন...</p>
            </div>
          </a>
        </div>
        <div className="my-2 flex items-center gap-5">
          <div className="flex items-center bg-white shadow-md rounded-md px-6 md:px-12">
            <img className="w-10 md:w-14" src="https://i.ibb.co/4t4WQRW/class-routine.png" alt="" />
            <p>ক্লাস রুটিন</p>
          </div>
          <div className="flex items-center py-1 bg-white shadow-md rounded-md px-8 md:px-16">
            <img className="w-9 md:w-11" src="https://i.ibb.co/7RPN0xn/ssc-results.png" alt="" />
            <p>ফলাফল</p>
          </div>
        </div>
        <div className="bg-[#DCB327] shadow-md rounded-md text-black font-semibold space-x-7 p-2 text-sm md:text-xl">
          <p className="flex items-center justify-center gap-2">
            <BiSolidBookmarkAltPlus /> স্থাপিত সন - ১৯৭১ খ্রিঃ
          </p>
          <p className="flex items-center justify-center gap-2">
            <BsFillBookmarkFill /> EIIN নাম্বার - 12312
          </p>
          <p className="flex items-center justify-center gap-2">
            <BsFillTelephoneOutboundFill /> টেলিফোন - ০৫২১900909
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



