import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    window.addEventListener('scroll', reveal);
  
    function reveal(){
      var reveal = document.querySelectorAll('.reveal3');
      
      for(var i = 0; i < reveal.length; i++){
  
        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 150;
  
        if(revealtop < windowheight - revealpoint){
          reveal[i].classList.add('active');
        }
        else{
          reveal[i].classList.remove('active');
        }
      }
    }
  

  return (
    <section className="qualification section" id="qualification">
         <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"
                } 
                onClick={() => toggleTab(1)}
                >
                    <i className="ri-pencil-ruler-2-line qualification__icon"></i>Education
                </div>

                <div 
                className={toggleState === 2
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                } 
                onClick={() => toggleTab(2)}
                >
                    <i className="ri-numbers-line qualification__icon"></i> Experience
                </div>

                <div 
                className={toggleState === 3
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                } 
                onClick={() => toggleTab(3)}
                >
                    <i className="ri-folder-user-line qualification__icon"></i> Certificate
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div  className='qualification__info reveal3'>
                            <h3 className="qualification__title">Introduction to Cybersecurity</h3>
                            <span className="qualification__subtitle">Philippines - Cisco Networking Academy</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2021 - 2021
                            </div>
                        </div>
                    </div>

                <div className="qualification__data">
                        <div  className='qualification__info reveal3'>
                            <h3 className="qualification__title">CCNAv7: Introduction to Networks</h3>
                            <span className="qualification__subtitle">Philippines - Cisco Networking Academy</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                
                <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">CPP - Advanced Programming in C++</h3>
                            <span className="qualification__subtitle">Philippines - Cisco Networking Academy</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">CPA - Programming Essentials in C++</h3>
                            <span className="qualification__subtitle">Philippines - Cisco Networking Academy</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2020 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">Introduction to Packet Tracer</h3>
                            <span className="qualification__subtitle">Philippines - Cisco Networking Academy</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">Bachelor of Science in Computer Science</h3>
                            <span className="qualification__subtitle">Philippines - AMA</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2019 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className='qualification__info reveal3'>
                         <h3 className="qualification__title">Associate Degree in Computer Systems Servicing</h3>
                            <span className="qualification__subtitle">Philippines - GKA</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2015 -2017
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qulification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">LGU - Philippines</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div className='qualification__info reveal3'>
                        <h3 className="qualification__title">Data Analysis</h3>
                            <span className="qualification__subtitle">LGU - Philippines</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2017 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">Computer System Servicing</h3>
                            <span className="qualification__subtitle">GKA - Philippines</span>
                            <div className="qualification__calender">
                                <i className="ri-calendar-line"></i> 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 3 ? "qulification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data3">
                        <div className='qualification__info reveal3'>
                                <h3 className="qualification__title">Introduction to Packet Tracer</h3>
                                <span className="qualification__subtitle3">Cisco Networking Academy</span><br />
                                <span className="qualification__button2" onClick={()=> window.open("https://drive.google.com/file/d/1L5WgsFQL2Nq4XPiS80dIWmmrv0vR98eu/view?usp=sharing", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">Partner: CPA - Programming Essentials in C++</h3>
                            <span className="qualification__subtitle3">Cisco Networking Academy</span><br />
                            <span className="qualification__button2" onClick={()=> window.open("https://drive.google.com/file/d/1XSn9dRIXEwDGKGT5olTQbgoyJW6EoYpP/view?usp=sharing", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>
                    </div>

                    <div className="qualification__data3">
                        <div className='qualification__info reveal3'>
                                <h3 className="qualification__title">Partner: CPP - Advanced Programming in C++</h3>
                                <span className="qualification__subtitle3">Cisco Networking Academy</span><br />
                                <span className="qualification__button2" onClick={()=> window.open("https://drive.google.com/file/d/13V3B1Nxx6qgSUrWfbCjJka8MCuKbgxQG/view?usp=sharing", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">CCNAv7: Introduction to Networks</h3>
                            <span className="qualification__subtitle3">Cisco Networking Academy</span><br />
                            <span className="qualification__button2" onClick={()=> window.open("https://drive.google.com/file/d/1khmLffH34hff2QbrIPdy_EORHG-pIEMy/view?usp=sharing", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>
                    </div>

                    <div className="qualification__data3">
                        <div className='qualification__info reveal3'>
                                <h3 className="qualification__title">Introduction to Cybersecurity</h3>
                                <span className="qualification__subtitle3">Cisco Networking Academy</span><br />
                                <span className="qualification__button2" onClick={()=> window.open("https://drive.google.com/file/d/1cbM_gJnJdK-Wx-7BeQKONOiA5bULjCYw/view?usp=sharing", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">SQL</h3>
                            <span className="qualification__subtitle3">TestDome</span><br />
                            <span className="qualification__button2" onClick={()=> window.open("https://www.testdome.com/certificates/4ab31b60d2d142f29168cb1ab3061a86", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>
                    </div>

                    <div className="qualification__data3">
                        <div className='qualification__info reveal3'>
                                <h3 className="qualification__title">PHP</h3>
                                <span className="qualification__subtitle3">TestDome</span><br />
                                <span className="qualification__button2" onClick={()=> window.open("https://www.testdome.com/certificates/10d63437a0134c8bb576ac47bde04f96", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>

                        <div className='qualification__info reveal3'>
                            <h3 className="qualification__title">JavaScript</h3>
                            <span className="qualification__subtitle3">TestDome</span><br />
                            <span className="qualification__button2" onClick={()=> window.open("https://www.testdome.com/certificates/1c8499ef94e040b98e6761b0dfdc3fe9", "_blank")}>View More <i className="ri-arrow-right-line qualification__button2-icon"></i></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification