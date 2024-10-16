import React, { useEffect } from "react";

import "./style.css";

export const NavBar = () => {
  useEffect(() => {
    // Mobile menu toggle
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }, []);

  return (
    <header id="header">
      <div className="container">
        <div className="logo-nav">
          <div className="logo">
            <img src="logo-head.png" alt="Logo" />
          </div>
          <nav>
            <ul className="nav-links mb-md-0 fw-bold">
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
                  Solutions
                </a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
                  Partners
                </a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
                  Blogs
                </a>
              </li>
              <li>
                <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-button">
          <button>14 Day Free Trail</button>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="mobile-menu">
        <ul>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
              Solutions
            </a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
              Partners
            </a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
              Blogs
            </a>
          </li>
          <li>
            <a href="https://www.hexnode.com/mobile-device-management/mdm-kiosk-mode/">
              Contact Us
            </a>
          </li>
          <li>
            <button>14 Day Free Trail</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
