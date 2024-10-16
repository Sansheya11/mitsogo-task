import React, { useEffect } from "react";

import "./style.css";

export const CardTab = () => {
  useEffect(() => {
    // Show the first tab content by default
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("tab1").style.display = "block";
    });
    // function openTab(evt, tabName) {
    //   var i, tabContent, tabLinks;

    //   // Get all tab content and hide them
    //   tabContent = document.getElementsByClassName("tab-content");
    //   for (i = 0; i < tabContent.length; i++) {
    //     tabContent[i].style.display = "none";
    //     tabContent[i].classList.remove("active"); // Remove active class
    //   }

    //   // Get all tab links and remove the active class
    //   tabLinks = document.getElementsByClassName("tab-link");
    //   for (i = 0; i < tabLinks.length; i++) {
    //     tabLinks[i].classList.remove("active");
    //   }

    //   // Show the current tab and add the active class to the clicked button
    //   document.getElementById(tabName).style.display = "block";
    //   document.getElementById(tabName).classList.add("active");
    //   evt.currentTarget.classList.add("active");
    // }
  }, []);

  function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    // Get all tab content and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabContent[i].classList.remove("active"); // Remove active class
    }

    // Get all tab links and remove the active class
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }

    // Show the current tab and add the active class to the clicked button
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }

  return (
    <section className="tab-module1">
      <h2 className="text-center text-black ">
        Specific kiosk modes for unique use cases
      </h2>
      <div className="tab-module">
        <div className="tabs">
          <button
            className="tab-link active"
            onClick={(event) => openTab(event, "tab1")}
          >
            Single App Kiosk
          </button>
          <button
            className="tab-link"
            onClick={(event) => openTab(event, "tab2")}
          >
            Multi-App Kiosk
          </button>
          <button
            className="tab-link"
            onClick={(event) => openTab(event, "tab3")}
          >
            Web-based Kiosk
          </button>
          <button
            className="tab-link"
            onClick={(event) => openTab(event, "tab4")}
          >
            Digital Signages
          </button>
          <button
            className="tab-link"
            onClick={(event) => openTab(event, "tab5")}
          >
            ASAM Kiosk
          </button>
        </div>
      </div>
      <div id="tab1" className="tab-content active">
        <div className="row">
          <div className="column">
            <h3 className="m-4">
              Powerful Single-App Kiosk solutions for enhanced control
            </h3>
            <ul className="tick-points">
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <img src="tab image.webp" alt="for Tab 1" className="tab-image" />
          </div>
        </div>
      </div>

      <div id="tab2" className="tab-content">
        <div className="row">
          <div className="column">
            <h3 className="m-4">Elevate efficiency with Multi-App Kiosk</h3>
            <ul className="tick-points">
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <img src="tab image.webp" alt="for Tab 2" className="tab-image" />
          </div>
        </div>
      </div>

      <div id="tab3" className="tab-content">
        <div className="row">
          <div className="column">
            <h3 className="m-4">
              Explore the new way to manage web apps and websites
            </h3>
            <ul className="tick-points">
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <img src="tab image.webp" alt="for Tab 3" className="tab-image" />
          </div>
        </div>
      </div>

      <div id="tab4" className="tab-content">
        <div className="row">
          <div className="column">
            <h3 className="m-4">
              Capture attention with Digital Signage Kiosks
            </h3>
            <ul className="tick-points">
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <img src="tab image.webp" alt="for Tab 4" className="tab-image" />
          </div>
        </div>
      </div>

      <div id="tab5" className="tab-content">
        <div className="row">
          <div className="column">
            <h3 className="m-4">
              Unlock the power of Autonomous Single App Mode (ASAM)
            </h3>
            <ul className="tick-points">
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
              <li className="feature-item">
                <span className="tick-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.393"
                    height="10.111"
                  >
                    <path
                      fill="none"
                      stroke="#60c458"
                      strokeWidth="2"
                      d="M.697 4.107 5.45 8.718l8.247-8"
                      data-name="tick - icon"
                    ></path>
                  </svg>
                </span>
                <p className="text-black tab-point">
                  Provision the devices to run one specialized application, with
                  limited functionalities.
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <img src="tab image.webp" alt="for Tab 5" className="tab-image" />
          </div>
        </div>
      </div>
    </section>
  );
};
