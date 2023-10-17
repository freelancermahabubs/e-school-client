import React from "react";
import {AiOutlineCalendar} from "react-icons/ai";
import {BiSolidUserRectangle} from "react-icons/bi";
import {BsFillPenFill} from "react-icons/bs";
import {FaQuoteRight} from "react-icons/fa";

const Notice = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="bg-white shadow-md">
          <div className="text-center  mt-2 ">
            {" "}
            <span className=" md:text-xl px-40 py-2 bg-gradient-to-r  from-red-500 border-t-2 border-b-2 border-red-600  via-slate-50 to-red-500 ">
              সর্বশেষ নোটিশ
            </span>
          </div>
          <div className="my-4 px-2">
            <div className="flex items-center gap-2 my-2">
              <div className="bg-gradient-to-r  from-gray-300  border-black  via-slate-50 to-gray-300 border-t-2 border-b-2 md:text-xl px-2">
                2023-09-24
              </div>
              <div className="text-blue-700">
                <a href="https://gripetech.com/demo/post-notice/%e0%a6%ac%e0%a7%83%e0%a6%b9%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%b0-%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0-%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a7%80%e0%a6%a6%e0%a7%87%e0%a6%b0/">
                  বৃহত্তর ছাত্র-ছাত্রীদের সহযোগিতা ও সহযোগিনী প্রশংসা সম্পর্কিত
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 my-2">
              <div className="bg-gradient-to-r  from-gray-300  border-black  via-slate-50 to-gray-300 border-t-2 border-b-2 md:text-xl px-2">
                2023-09-24
              </div>
              <div className="text-blue-700">
                <a href="https://gripetech.com/demo/post-notice/%e0%a6%b6%e0%a7%8d%e0%a6%b0%e0%a6%a6%e0%a7%8d%e0%a6%a7%e0%a6%be%e0%a6%b6%e0%a7%8d%e0%a6%b0%e0%a6%a6%e0%a7%8d%e0%a6%a7-%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0-%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d/">
                  শ্রদ্ধাশ্রদ্ধ ছাত্র-ছাত্রীদের জন্য নোটিশ
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 my-2">
              <div className="bg-gradient-to-r  from-gray-300  border-black  via-slate-50 to-gray-300 border-t-2 border-b-2 md:text-xl px-2">
                2023-09-24
              </div>
              <div className="text-blue-700">
                <a href="https://gripetech.com/demo/post-notice/%e0%a6%a8%e0%a7%8b%e0%a6%9f%e0%a6%bf%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%b8%e0%a6%99%e0%a7%8d%e0%a6%97%e0%a7%87/">
                  নোটিশের প্রসঙ্গে
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-2 my-2">
              <div className="bg-gradient-to-r  from-gray-300  border-black  via-slate-50 to-gray-300 border-t-2 border-b-2 md:text-xl ">
                2023-09-24
              </div>
              <div className="text-blue-700">
                <a href="https://gripetech.com/demo/post-notice/%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a7%80%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a7%8d%e0%a6%ac%e0%a6%bf%e0%a6%a4%e0%a7%80%e0%a6%af%e0%a6%bc-%e0%a6%b8%e0%a7%87%e0%a6%ae%e0%a7%87%e0%a6%b8/">
                  ছাত্রীদের দ্বিতীয় সেমেস্টার পরীক্ষা
                </a>
              </div>
            </div>
          </div>
          <button className="bg-[#FF6D16] ml-2 mb-2 text-white text-xl font-semibold p-2 rounded-md shadow-md">
            সকল নোটিশ...
          </button>
        </div>
        <div className="">
          <div className=" bg-white shadow-md">
            <div className="text-center   ">
              {" "}
              <span className=" md:text-xl px-8 py-2 bg-gradient-to-r  from-green-600 border-t-2 border-b-2 border-green-600  via-slate-50 to-green-600 ">
                শিক্ষক বানী
              </span>
            </div>

            {/* start slider card */}
            <div>
              <div className="">
                <div className="flex gap-4 items-center">
                  <div className="">
                    <img
                      className="w-24"
                      src="https://gripetech.com/demo/wp-content/themes/E-School/profile-pictures/1695744226_DRT_HTHD.avif"
                    />{" "}
                  </div>
                  <div className="">
                    <span className="flex items-center gap-2">
                      <BiSolidUserRectangle /> Asma Begum
                    </span>
                    <span className="flex items-center gap-2">
                      <BsFillPenFill /> শিক্ষক
                    </span>
                    <span className="flex items-center gap-2">
                      <AiOutlineCalendar /> Thursday, October 5, 2023 | বানী
                    </span>
                  </div>
                </div>
                <div className="border-t border-2 border-green-700 mt-2"></div>
                <div className=" text-center bg-gradient-to-r  from-green-300 via-slate-50 to-green-300 ">
                  <p className="flex justify-center py-2 ">
                    <sup>
                      <FaQuoteRight size={20} />
                    </sup>
                    প্রহর শেষের আলোয় রাঙা সেদিন চৈত্রমাস তোমার চোখে দেখেছিলাম
                    আমার সর্বনাশ
                    <sub>
                      <FaQuoteRight size={20} />
                    </sub>
                  </p>{" "}
                  <button
                    className="mb-12"
                    href="https://gripetech.com/demo/teacher_post/pass/">
                    পড়ুন...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div className="">
          <div className="">
            <span className="flex items-center gap-2 md:text-2xl font-semibold">
              <img className="w-10" src="https://gripetech.com/demo/wp-content/themes/E-School/img/question-mark.png" />{" "}
              বিদ্যালয়ের স্থাপনার সাল ও ইতিহাস কী
              <span className="text-[#FF6D16]">?</span>
            </span>
            <div className="text-xl">
              <p>
                আমাদের বিদ্যালয় সাল ১৯৬৫ সালে প্রতিষ্ঠিত হয়। এটি একটি ঐতিহাসিক
                স্থান, এখানে বেশীরভাগে গুরুত্বপূর্ণ সাক্ষরতা এবং সাংস্কৃতিক গতি
                ঘটে এবং শিক্ষার্থীদের শিক্ষা এবং আদর্শ উন্নত করার মাধ্যমে
                বিদ্যালয়টি এখন একটি প্রতিষ্ঠান হিসেবে পরিচিত। এই বিদ্যালয়ের
                ইতিহাস অত্যন্ত গর্বস্ফূর্তি সাথে দেশের শিক্ষা প্রতিষ্ঠানের মধ্যে
                একটি গুরুত্বপূর্ণ স্থান রয়েছে।
              </p>
              <a href="https://gripetech.com/demo/about-us/">আরও পড়ুন...</a>
            </div>
          </div>
        </div>
        <div className="border-4 p-2 border-white shadow-md">
          <img
            src="https://gripetech.com/demo/wp-content/themes/E-School/admission-pictures/1695574956_school-photo.jpg"
            alt="Institute Photo"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Notice;
