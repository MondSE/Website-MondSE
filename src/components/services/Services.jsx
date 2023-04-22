import React, { useState } from 'react';
import "./services.css";

const Services = () => {
        const [toggleState, setToggleState] = useState(0);

        const toggleTab = (index) => {
            setToggleState(index);
        }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content box">
                <div className='services__data'>
                    <i className="ri-pages-line services__icon"></i>
                    <h3 className="services__title">System <br /> Developer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="ri-arrow-right-line services__button-icon"></i></span>

                <div 
                className={toggleState === 1 
                    ? "services__modal  active-modal" 
                    : "services__modal"
                    }
                    >
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="ri-close-line services__modal-close"></i>

                        <h3 className="services__modal-title">System Developer</h3>
                        <p className="services__modal-description">Providing system quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">I create companies database.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Redesign companies system or client.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="ri-line-chart-fill services__icon"></i>
                    <h3 className="services__title">Data <br /> Analysis</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="ri-arrow-right-line services__button-icon"></i></span>

                <div 
                    className={toggleState === 2 
                    ? "services__modal active-modal" 
                    : "services__modal"
                    }
                    >
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="ri-close-line services__modal-close"></i>

                        <h3 className="services__modal-title">Data Analysis</h3>
                        <p className="services__modal-description">Providing logical techniques to describe and illustrate quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">I collect the raw data sets you’ll need to help the companies.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Clean the data to prepare it for analysis.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Interpret the results of your analysis.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="ri-film-line services__icon"></i>
                    <h3 className="services__title">Multimedia <br /> Editing</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="ri-arrow-right-line services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="ri-close-line services__modal-close"></i>

                        <h3 className="services__modal-title">Mutlimedia Editing</h3>
                        <p className="services__modal-description">Providing Graphical quality work to clients and companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Design or redesign logo for companies.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="ri-checkbox-circle-line services__modal-icon"></i>
                                <p className="services__modal-info">Editing client and companies videos.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services