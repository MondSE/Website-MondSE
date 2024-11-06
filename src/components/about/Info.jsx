import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="ri-award-line about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>

      <div className="about__box">
        <i class="ri-briefcase-line about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">4 Projects</span>
      </div>

      <div className="about__box">
        <i class="ri-customer-service-line about__icon"></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default info;
