"use client";
import React, {useState} from "react";
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlinePeopleAlt} from "react-icons/md";
const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="bg-gray-200 -mt-6 h-12">
        <div className="flex justify-center container mx-auto">
          <div className="">
            <ul className="flex items-center gap-x-4 mt-2 sm:text-sm md:text-xl">
              {/* ... Your other menu items ... */}
              <a
                href="/"
                className="flex items-center gap-2 bg-[#6EBB09] p-1 rounded-md text-white font-semibold px-3">
                <AiOutlineHome size={20} /> প্রচ্ছদ
              </a>
              <li className="relative group  menu-item ">
                <a className="rounded-md py-1 px-3" onClick={toggleDropdown}>
                  পরিচিতি
                </a>
                <ul
                  className={`absolute left-0 mt-2  bg-[#FF6A18] border border-gray-300 shadow-lg transition-all duration-300 transform scale-0 group-hover:scale-100 w-[300px] ${
                    isDropdownOpen ? "scale-100" : ""
                  }`}>
                  <li className="menu-item py-2 px-3">
                    <a href="https://gripetech.com/demo/introduction/">
                      এক নজরে পরিচিতি
                    </a>
                  </li>
                  {/* Add more submenu items if needed */}
                </ul>
              </li>
              <li className="relative group menu-item ">
                <a className="rounded-md py-1 px-3" onClick={toggleDropdown}>
                  জনবল
                </a>
                <ul
                  className={`absolute left-0 mt-2  bg-[#FF6A18] border border-gray-300 shadow-lg transition-all duration-300 transform scale-0 group-hover:scale-100 w-[300px] ${
                    isDropdownOpen ? "scale-100" : ""
                  }`}>
                  <li className="menu-item px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      শিক্ষক ও শিক্ষিকা
                    </a>
                  </li>
                  <li className="menu-item px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      কর্মকর্তা
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group  menu-item">
                <a className=" rounded-md py-1 px-3 " onClick={toggleDropdown}>
                  শিক্ষার্থী
                </a>
                <ul
                  className={`absolute left-0 mt-2  bg-[#FF6A18] border border-gray-300 shadow-lg transition-all duration-300 transform scale-0 group-hover:scale-100 w-[300px] ${
                    isDropdownOpen ? "scale-100 " : ""
                  }`}>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      অধ্যয়নরত শিক্ষার্থীর
                    </a>
                  </li>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      ডিজিটাল হাজিরার তথ্য
                    </a>
                  </li>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      আইডি কার্ড ডাউনলোড
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group cursor-pointer">
                <a className="menu-item p-1">পরীক্ষার ফলাফল</a>
              </li>
              <li className="relative group">
                <a className="menu-item p-1 cursor-pointer">ক্লাস রুটিন</a>
              </li>
              <li className="relative group cursor-pointer">
                <a className="menu-item p-1">ছুটির দিন</a>
              </li>
              <li className="relative group  menu-item">
                <a className=" rounded-md py-1 px-3 " onClick={toggleDropdown}>
                  ভর্তি আবেদন
                </a>
                <ul
                  className={`absolute left-0 mt-2  bg-[#FF6A18] border border-gray-300 shadow-lg transition-all duration-300 transform scale-0 group-hover:scale-100 w-[300px] ${
                    isDropdownOpen ? "scale-100 " : ""
                  }`}>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      অনলাইন ভর্তি আবেদন
                    </a>
                  </li>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      ভর্তি পরিক্ষার ফর্ম
                    </a>
                  </li>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                      ভর্তি পরিক্ষার প্রশ্নপত্র
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group  menu-item">
                <a className=" rounded-md py-1 px-3 " onClick={toggleDropdown}>
                  অন্যান্য…
                </a>
                <ul
                  className={`absolute left-0 mt-2  bg-[#FF6A18] border border-gray-300 shadow-lg transition-all duration-300 transform scale-0 group-hover:scale-100 w-[300px] ${
                    isDropdownOpen ? "scale-100 " : ""
                  }`}>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                    যোগাযোগ
                    </a>
                  </li>
                  <li className="menu-item  px-4 py-2">
                    <a href="https://gripetech.com/demo/introduction/">
                 মুজিব কর্নার
                    </a>
                  </li>
                
                </ul>
              </li>
              {/* ... Your other menu items ... */}
              <div className="flex gap-4">
                <a
                  href="notice"
                  className="bg-[#FF6D16] px-3 py-1 rounded-md font-semibold text-white ">
                  নোটিশ
                </a>
                <a
                  href="login"
                  className="bg-[#57A50C]  rounded-md flex gap-x-2 items-center px-3 py-1 font-semibold text-white">
                  লগইন <MdOutlinePeopleAlt size={25} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
