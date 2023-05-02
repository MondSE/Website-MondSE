import React, { useState , useEffect } from 'react';
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
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000)
  },[]);

  return (
    <>
    {
      loading ? (
      <><PacmanLoader loading={loading} color={'#ffa500'} size={'40'} className='loading-screen' /><p className='loading-screen-text'>Welcome Visitor</p><p className='loading-screen-text2'>loading please wait a moment website</p></>
      ): (     
      <><Header /><main className='name'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Project />
            <Contact />
          </main><Footer /><Scrollup /></>)
    }
    </>
  )
}

export default App