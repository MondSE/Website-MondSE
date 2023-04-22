import React from 'react';
import "./App.css";
import Header from './components/hearder/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Project from './components/project/Project';

const App = () => {
  return (
    <>
      <Header />

      <main className='name'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Project />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
}

export default App