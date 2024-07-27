import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Expertise from "./Expertise";
import Certification from "./Certification";
import Service from "./Service";
import Footer from "./Footer";
import Header from "./Header";

const portfolioStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '0 1em',
    },
  },
};

const Portfolio = () => {
  return (
    <div style={portfolioStyles.container}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Expertise />
      <Certification />
      <Service />
      <Footer />
    </div>
  );
};

export default Portfolio;
