import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Expertise from "./Expertise";
import Footer from "./Footer";
import Header from "./Header";
import Certification from "./Certification";
import Service from "./Service";
import "./styles.css";

const Portfolio = () => {
  return (
    <div>
 
      <Skills />
      <Expertise />
      <Certification />
      <Service />
      <Footer />
    </div>
  );
};

export default Portfolio;
