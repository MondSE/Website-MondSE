import React, { useState } from 'react';
import "./project.css";
import ProjectImg from '../../assets/project/1.png';
import ProjectImg2 from '../../assets/project/2.png';
import ProjectImg3 from '../../assets/project/3.png';
import ProjectImg4 from '../../assets/project/4.png';
import ProjectImg5 from '../../assets/project/5.png';
import ProjectImg6 from '../../assets/project/6.png';
import ProjectImg7 from '../../assets/project/7.png';
import ProjectImg8 from '../../assets/project/8.png';


const Project = () => {
      const [toggleState, setToggleState] = useState(0);

      const toggleTab = (index) => {
          setToggleState(index);
      }

  return (
    <section className="project section" id="project">
        <h2 className="section__title">Project</h2>
        <span className="section__subtitle">My Sample Project</span>

        <div className="project__container container">
        <div className="project__content box">
                <div className='project__data'>
                    <img src={ProjectImg} alt="" className="project__image"/> 
                    <h3 className="project__title">ACTDO-IMS</h3>
                    <p className='project__details'>this project is used as a template for the demonstration of the information management system of ACTDO as a Capstone Project/Thesis to be clear there are no ACTDO valuable data exposed to upload this template.</p>
                </div>
                <a className="project__button" href="https://github.com/MondSE/ACTDO-IMS-DEMO" target="_blank" rel="noopener noreferrer">View DEMO code <i className="ri-arrow-right-line project__button-icon"></i></a>
                <span className="project__button" onClick={() => toggleTab(1)}>View Image <i className="ri-arrow-right-line project__button-icon"></i></span>
                <div 
                className={toggleState === 1 
                    ? "project__modal  active-modal" 
                    : "project__modal"
                    }
                    >
                    <div className="project__modal-content">
                        <i onClick={() => toggleTab(0)}className="ri-close-line project__modal-close"></i>
                            {/* <!-- Full-width images with number and caption text --> */}
                            <div class="mySlides fade">
                              <div class="slide_details">1 / 8 LOG IN</div>
                              <img src={ProjectImg} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">2 / 8 DASHBOARD</div>
                              <img src={ProjectImg2} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">3 / 8 SEARCH CLIENT</div>
                              <img src={ProjectImg3} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">4 / 8 INTEGRATION</div>
                              <img src={ProjectImg4} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">5 / 8 TRANSACTION</div>
                              <img src={ProjectImg5} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">6/ 8 EMPLOYEE REGISTRATION</div>
                              <img src={ProjectImg6} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">7/ 8 LEGAL COMPLAINT</div>
                              <img src={ProjectImg7} alt=""/>
                            </div>
                            <div class="mySlides fade">
                              <div class="slide_details">8/ 8 ACCIDENT</div>
                              <img src={ProjectImg8} alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project