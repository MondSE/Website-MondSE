import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/hearder/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Project from "./components/project/Project";
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <PacmanLoader
            loading={loading}
            color={"#ffa500"}
            size={"40"}
            className="loading-screen"
          />
          <p className="loading-screen-text">Welcome Visitor</p>
          <p className="loading-screen-text2">
            please wait a moment my website is loading
          </p>
        </>
      ) : (
        <>
          <Header />
          <main className="name">
            <Home />
            <About />
            <Project />
            <Services />
            <Skills />
            <Qualification />
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </>
      )}
    </>
  );
};

export default App;
