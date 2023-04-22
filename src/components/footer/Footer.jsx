import React from 'react';
import "./footer.css";

const footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            {/* {/* <h1 className="footer__title">A.T.</h1>  */}

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.youtube.com/@mond_rae8054" className="footer__social-link" target='_blank' rel="noreferrer">
                    <i class="bx bxl-youtube"></i>
                </a>

                <a href="https://twitter.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <span className="footer__copy">&#169; AlmondTuazon. All rigths reserved </span>
        </div>
        <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div> 
    </footer>
  )
}

export default footer