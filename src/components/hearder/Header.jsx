import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    /*=============== Change Backgroud Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

    /*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return ( 
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">A.T.</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
              <i className="ri-home-line nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
              <i className="ri-book-open-line nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="ri-image-line nav__icon"></i> Projects
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="ri-trophy-line nav__icon"></i> Skills
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#services" onClick={() => setActiveNav('#service')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="ri-briefcase-line nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="ri-chat-3-line nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="ri-close-line nav__close" onClick={() => showMenu (!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
          <i className="ri-menu-4-line"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header