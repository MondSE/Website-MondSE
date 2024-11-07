import React, { useState } from "react";
import "./project.css";
import ProjectImg_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/1.png";
import ProjectImg2_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/2.png";
import ProjectImg3_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/3.png";
import ProjectImg4_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/4.png";
import ProjectImg5_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/5.png";
import ProjectImg6_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/6.png";
import ProjectImg7_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/7.png";
import ProjectImg8_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/8.png";
import ProjectImg9_LCMA from "../../assets/project/LISTING_LARAVEL_APP_IMG/9.png";
import ProjectImg_PIS from "../../assets/project/PIS_IMG/1.png";
import ProjectImg2_PIS from "../../assets/project/PIS_IMG/2.png";
import ProjectImg_RLMMC from "../../assets/project/RLMMC_IMS_IMG/1.png";
import ProjectImg2_RLMMC from "../../assets/project/RLMMC_IMS_IMG/2.png";
import ProjectImg3_RLMMC from "../../assets/project/RLMMC_IMS_IMG/3.png";
import ProjectImg_LIBRARY from "../../assets/project/LIBRARY_FMP_IMG/1.png";
import ProjectImg2_LIBRARY from "../../assets/project/LIBRARY_FMP_IMG/2.png";
import ProjectImg3_LIBRARY from "../../assets/project/LIBRARY_FMP_IMG/3.png";
import ProjectImg_ACTDO from "../../assets/project/ACTDO_IMS_IMG/1.png";
import ProjectImg2_ACTDO from "../../assets/project/ACTDO_IMS_IMG/2.png";
import ProjectImg3_ACTDO from "../../assets/project/ACTDO_IMS_IMG/3.png";
import ProjectImg4_ACTDO from "../../assets/project/ACTDO_IMS_IMG/4.png";
import ProjectImg5_ACTDO from "../../assets/project/ACTDO_IMS_IMG/5.png";
import ProjectImg6_ACTDO from "../../assets/project/ACTDO_IMS_IMG/6.png";
import ProjectImg7_ACTDO from "../../assets/project/ACTDO_IMS_IMG/7.png";
import ProjectImg8_ACTDO from "../../assets/project/ACTDO_IMS_IMG/8.png";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="project section" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My Sample Project</span>

      <div className="project__container container">
        {/* LISTING-APP-LARAVEL-VUE3  */}
        <div className="project__content box">
          <div className="project__data">
            <img src={ProjectImg_LCMA} alt="" className="project__image" />
            <h3 className="project__title">Listing Content Management</h3>
            <p className="project__details">
              This personal project is used as a template for the demonstration
              of the Listing Content Management App of making blog, reviews,
              bussiness as i use the PHP,Vue3 and Sqlite database that use the
              framework Laravel for this simple personal project.
            </p>
          </div>
          <a
            className="project__button"
            href="https://github.com/MondSE/Laravel-Vue3-Listing-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View DEMO code{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </a>
          <span className="project__button" onClick={() => toggleTab(5)}>
            View Image{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 5
                ? "project__modal  active-modal"
                : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ri-close-line project__modal-close"
              ></i>
              {/* <!-- Full-width images with number and caption text --> */}
              <div class="mySlides fade">
                <div class="slide_details">1 / 9 INDEX</div>
                <img src={ProjectImg_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">2 / 9 LOG IN</div>
                <img src={ProjectImg2_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">3 / 9 REGISTER</div>
                <img src={ProjectImg3_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">4 / 9 PROFILE</div>
                <img src={ProjectImg5_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">5 / 9 CONTENT DASHBOARD</div>
                <img src={ProjectImg4_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">6 / 9 CREATE CONTENT</div>
                <img src={ProjectImg6_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">7 / 9 CONTENT VIEW</div>
                <img src={ProjectImg7_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">8 / 9 ADMIN DASHBOARD</div>
                <img src={ProjectImg8_LCMA} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">
                  9 / 9 ADMIN USER LISTING CONTENT
                </div>
                <img src={ProjectImg9_LCMA} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* PIS */}
        <div className="project__content box">
          <div className="project__data">
            <img src={ProjectImg_PIS} alt="" className="project__image" />
            <h3 className="project__title">PRODUCT INVENTORY SYSTEM</h3>
            <p className="project__details">
              This project is used as a template for the demonstration of the
              product inventory system of local store as we use the C++ and
              MySql database for this simple project.
            </p>
          </div>
          <a
            className="project__button"
            href="https://github.com/MondSE/Product_Inventory_System"
            target="_blank"
            rel="noopener noreferrer"
          >
            View DEMO code{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </a>
          <span className="project__button" onClick={() => toggleTab(1)}>
            View Image{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "project__modal  active-modal"
                : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ri-close-line project__modal-close"
              ></i>
              {/* <!-- Full-width images with number and caption text --> */}
              <div class="mySlides fade">
                <div class="slide_details">1 / 2 Product Registration</div>
                <img src={ProjectImg_PIS} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">
                  2 / 2 Product Inventory Record Updating and Deleting
                </div>
                <img src={ProjectImg2_PIS} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* RLMMC-IMS */}
        <div className="project__content box">
          <div className="project__data">
            <img src={ProjectImg_RLMMC} alt="" className="project__image" />
            <h3 className="project__title">RLMMC-IMS</h3>
            <p className="project__details">
              This project is used as a template for the demonstration of the
              information management system of RLMMC as a Capstone Redesign
              Project/Thesis using GunaUI and C# to be clear there are no RLMMC
              valuable data exposed to upload this template.
            </p>
          </div>
          <a
            className="project__button"
            href="https://github.com/MondSE/RLMMC-MIS"
            target="_blank"
            rel="noopener noreferrer"
          >
            View DEMO code{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </a>
          <span className="project__button" onClick={() => toggleTab(2)}>
            View Image{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "project__modal  active-modal"
                : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ri-close-line project__modal-close"
              ></i>
              {/* <!-- Full-width images with number and caption text --> */}
              <div class="mySlides fade">
                <div class="slide_details">1 / 8 LOG IN</div>
                <img src={ProjectImg_RLMMC} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">2 / 8 DASHBOARD</div>
                <img src={ProjectImg2_RLMMC} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">3 / 8 SEARCH CLIENT</div>
                <img src={ProjectImg3_RLMMC} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* LIBRARY-FMP */}
        <div className="project__content box">
          <div className="project__data">
            <img src={ProjectImg_LIBRARY} alt="" className="project__image" />
            <h3 className="project__title">LIBRARY RECORDS</h3>
            <p className="project__details">
              This project is used as a template for the demonstration of the
              librarian record as comparison whether the FileMaker Pro 17 is
              good than VB6 both are using C#.
            </p>
          </div>
          <a
            className="project__button"
            href="https://github.com/MondSE/Library-Management-Record"
            target="_blank"
            rel="noopener noreferrer"
          >
            View DEMO code{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </a>
          <span className="project__button" onClick={() => toggleTab(3)}>
            View Image{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "project__modal  active-modal"
                : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ri-close-line project__modal-close"
              ></i>
              {/* <!-- Full-width images with number and caption text --> */}
              <div class="mySlides fade">
                <div class="slide_details">1 / 8 ACCOUNT REGISTRATION</div>
                <img src={ProjectImg_LIBRARY} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">2 / 8 BOOK REGISTRATION</div>
                <img src={ProjectImg2_LIBRARY} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">3 / 8 BORROWING BOOK</div>
                <img src={ProjectImg3_LIBRARY} alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* ACTDO-IMS */}
        <div className="project__content box">
          <div className="project__data">
            <img src={ProjectImg_ACTDO} alt="" className="project__image" />
            <h3 className="project__title">ACTDO-IMS</h3>
            <p className="project__details">
              This project is used as a template for the demonstration of the
              information management system of ACTDO as a Capstone
              Project/Thesis using the PHP native and Sql on Xampp to be clear
              there are no ACTDO valuable data exposed to upload this template.
            </p>
          </div>
          <a
            className="project__button"
            href="https://github.com/MondSE/ACTDO-IMS-DEMO"
            target="_blank"
            rel="noopener noreferrer"
          >
            View DEMO code{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </a>
          <span className="project__button" onClick={() => toggleTab(4)}>
            View Image{" "}
            <i className="ri-arrow-right-line project__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 4
                ? "project__modal  active-modal"
                : "project__modal"
            }
          >
            <div className="project__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="ri-close-line project__modal-close"
              ></i>
              {/* <!-- Full-width images with number and caption text --> */}
              <div class="mySlides fade">
                <div class="slide_details">1 / 8 LOG IN</div>
                <img src={ProjectImg_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">2 / 8 DASHBOARD</div>
                <img src={ProjectImg2_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">3 / 8 SEARCH CLIENT</div>
                <img src={ProjectImg3_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">4 / 8 INTEGRATION</div>
                <img src={ProjectImg4_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">5 / 8 TRANSACTION</div>
                <img src={ProjectImg5_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">6/ 8 EMPLOYEE REGISTRATION</div>
                <img src={ProjectImg6_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">7/ 8 LEGAL COMPLAINT</div>
                <img src={ProjectImg7_ACTDO} alt="" />
              </div>
              <div class="mySlides fade">
                <div class="slide_details">8/ 8 ACCIDENT</div>
                <img src={ProjectImg8_ACTDO} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
