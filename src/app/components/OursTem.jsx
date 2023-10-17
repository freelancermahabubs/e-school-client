import React from "react";

const OursTem = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-7 items-center justify-center">
        {/* start menus card */}
        <div className="bg-[#ffffffff] shadow-md rounded-md border-4  border-gray-200 text-center">
          <span className="bg-gradient-to-r  from-green-300 via-slate-50 to-green-300 md:text-2xl font-semibold px-12 py-2">আমাদের সম্পর্কে</span>
          <div className="text-start">
            <ul className="">
              <li className="">
                <a href="#">প্রতিষ্ঠান ইতিহাস</a>
              </li>
              <li className="">
                <a href="#">স্তর ভিত্তিক শিক্ষার্থী</a>
              </li>
              <li className="">
                <a href="#">শিক্ষার্থীর তথ্য</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="education-menus-card aos-init aos-animate"
          data-aos="zoom-in-down">
          <span className="education-menus-title">প্রশাসন</span>
          <div className="">
            <ul className="">
              <li className="">
                <a href="#">অধ্যক্ষ</a>
              </li>
              <li
                id="menu-item-136"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-136">
                <a href="#">শিক্ষকবৃন্দ</a>
              </li>
              <li
                id="menu-item-137"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                <a href="#">স্টাফবৃন্দ</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="education-menus-card aos-init aos-animate"
          data-aos="zoom-in-down">
          <span className="education-menus-title">প্রতিষ্ঠান সম্বলিত তথ্য</span>
          <div className="menu-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a4%e0%a6%bf%e0%a6%b7%e0%a7%8d%e0%a6%a0%e0%a6%be%e0%a6%a8-%e0%a6%b8%e0%a6%ae%e0%a7%8d%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%a4-%e0%a6%a4%e0%a6%a5%e0%a7%8d%e0%a6%af-container">
            <ul
              id="menu-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a6%a4%e0%a6%bf%e0%a6%b7%e0%a7%8d%e0%a6%a0%e0%a6%be%e0%a6%a8-%e0%a6%b8%e0%a6%ae%e0%a7%8d%e0%a6%ac%e0%a6%b2%e0%a6%bf%e0%a6%a4-%e0%a6%a4%e0%a6%a5%e0%a7%8d%e0%a6%af"
              className="menu">
              <li
                id="menu-item-138"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-138">
                <a href="#">আসন সংখ্যা</a>
              </li>
              <li
                id="menu-item-139"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-139">
                <a href="#">ভৌত অবকাঠামো</a>
              </li>
              <li
                id="menu-item-140"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-140">
                <a href="https://gripetech.com/demo/subidha/">সুবিধা সমূহ</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="education-menus-card aos-init aos-animate"
          data-aos="zoom-in-down">
          <span className="education-menus-title">একাডেমিক তথ্য</span>
          <div className="menu-%e0%a6%8f%e0%a6%95%e0%a6%be%e0%a6%a1%e0%a7%87%e0%a6%ae%e0%a6%bf%e0%a6%95-%e0%a6%a4%e0%a6%a5%e0%a7%8d%e0%a6%af-container">
            <ul
              id="menu-%e0%a6%8f%e0%a6%95%e0%a6%be%e0%a6%a1%e0%a7%87%e0%a6%ae%e0%a6%bf%e0%a6%95-%e0%a6%a4%e0%a6%a5%e0%a7%8d%e0%a6%af"
              className="menu">
              <li
                id="menu-item-141"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-141">
                <a href="#">ক্লাস রুটিন</a>
              </li>
              <li
                id="menu-item-142"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-142">
                <a href="#">একাডেমিক সিলেবাস</a>
              </li>
              <li
                id="menu-item-143"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-143">
                <a href="#">একাডেমিক ক্যালেন্ডার</a>
              </li>
              <li
                id="menu-item-144"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-144">
                <a href="#">পরীক্ষার ফলাফল</a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* end menus card */}
      </div>
    </div>
  );
};

export default OursTem;
