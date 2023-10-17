import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E1E27] h-52">
      <div className="container mx-auto px-2 ">
        <div className="text-white pt-4">
          <div className="grid md:grid-cols-4 grid-cols-1">
            <div >
              <h2>যোগাযোগ</h2>
              <ul>
                <li>
                  <i className="fa-regular fa-envelope" />
                  <a href="mailto:onlineworkerbdd@gmail.com" target="_blank">
                    {" "}
                    onlineworkerbdd@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  <a href="tel:০৫২১900909" target="_blank">
                    {" "}
                    ০৫২১900909
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot" /> প্রধান সড়ক, কাচারী
                  বাজার, রংপুর সদর, <br /> রংপুর (5400)
                </li>
              </ul>
            </div>
            {/* start footer widget */}
            <div className="footer-widget aos-init" data-aos="slide-up">
              <h2>ফুটার ১</h2>
              <div className="menu-footer-1-container">
                <ul id="menu-footer-1" className="menu">
                  <li
                    id=""
                    className="">
                    <a href="#">মুজিব কর্নার</a>
                  </li>
                  <li
                  
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-120">
                    <a href="#">নোটিসবোর্ড</a>
                  </li>
                  <li
                   
                    className="">
                    <a href="#">পরীক্ষার ফলাফল</a>
                  </li>
                  <li
                    id="menu-item-122"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-122">
                    <a href="#">অনলাইন ভর্তি আবেদন</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget aos-init" data-aos="slide-up">
              <h2>ফুটার ২</h2>
              <div className="menu-footer-2-container">
                <ul id="menu-footer-2" className="menu">
                  <li
                    id="menu-item-123"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-123">
                    <a href="#">প্রতিষ্ঠানের ইতিহাস</a>
                  </li>
                  <li
                    id="menu-item-124"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-124">
                    <a href="#">একাডেমিক ক্যালেন্ডার</a>
                  </li>
                  <li
                    id="menu-item-125"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-125">
                    <a href="#">যোগাযোগ</a>
                  </li>
                  <li
                    id="menu-item-126"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-126">
                    <a href="#">ছুটির দিন</a>
                  </li>
                  <li
                    id="menu-item-127"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                    <a href="#">কৃতি শিক্ষার্থী</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget aos-init" data-aos="slide-up">
              <h2>ফুটার ৩</h2>
              <div className="menu-footer-3-container">
                <ul id="menu-footer-3" className="menu">
                  <li
                    id="menu-item-128"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-128">
                    <a href="#">আমাদের সেবা</a>
                  </li>
                  <li
                    id="menu-item-129"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                    <a href="#">গোপনীয়তা নীতি</a>
                  </li>
                  <li
                    id="menu-item-130"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                    <a href="#">শর্তাবলী</a>
                  </li>
                  <li
                    id="menu-item-131"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-131">
                    <a href="#">সাইটম্যাপ</a>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* end footer widget */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
