import React from "react";
import Skills from "./Skills";
import Expertise from "./Expertise";
import Certification from "./Certification";
import Service from "./Service";
import Footer from "./Footer";
import Header from "./Header";

const portfolioStyles = {
  container: {
    padding: '2rem',
    backgroundColor: '#F9F9F9',  // Fond léger pour contraste
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem',
    },
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '0.5rem',
    },
  },
};

const Portfolio = () => {
  return (
    <div style={portfolioStyles.container}>
      <link rel="stylesheet" href="/src/images/styles.css" />
      <Skills />
      <Expertise />
      <Certification />
      <Service />
      <Footer />
    </div>
  );
};

export default Portfolio;
