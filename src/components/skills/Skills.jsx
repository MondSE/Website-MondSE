import React from 'react';
import "./skills.css"
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  window.addEventListener('scroll', reveal);
  
  function reveal(){
    var reveal = document.querySelectorAll('.reveal');
    
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
    <section className="skills section" id="skills">
        <h2 className="section__title">Tech Stack</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills