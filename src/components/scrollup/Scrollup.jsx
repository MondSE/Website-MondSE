import React from "react";
import "./scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#home" className="scrollup">
      <i className="ri-arrow-up-s-line scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
