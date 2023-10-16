import React from "react";

const Header = () => {
  return (
    <div className="header-main-wrapepr">
      <div className="wrapper header-wrapper">
        <div className="logo-and-menus">
          {/* Start web logo */}
          <div className="web-logo">
            <a
              href="https://gripetech.com/demo/"
              className="custom-logo-link"
              rel="home"
              aria-current="page">
              <img
                src="https://gripetech.com/demo/wp-content/uploads/2023/09/cropped-cropped-banner.gif"
                alt="E-School Demo"
                className="w-full"
              />
            </a>
          </div>
          {/* End web logo */}
          <div className="main-menu main-menu-top-wrapper-right-now">
            <div className="web-menu-section">
              <div className="mobile-by-defult-header-wrapper">
                <div className="time-of-bd-wrapper">
                  <p id="banglaDateasgdjhasgdh"></p>
                </div>
                <div className="mobile-menu-close-and-open-button">
                  <button id="main-menu-open-btn">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                  <button id="main-menu-close-btn">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
