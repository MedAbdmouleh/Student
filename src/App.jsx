

// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import TrainingForm from "./Components/TrainingForm"; // Import the new form component

import "./styles.css";

const siteProps = {
  name: "Abdmouleh Mohamed",
  title: "Consultant Power BI",
  email: "mohamedabdelmouleh0@gmail.com",
  gitHub: "MedAbdmouleh",
  youTube: "https://www.youtube.com/watch?v=x0HPXgSzvP8",
  linkedIn: "mohamed-abdmouleh",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home name={siteProps.name} title={siteProps.title} />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/training" element={<TrainingForm />} /> {/* Add route for the new form */}
        </Routes>
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </Router>
  );
};

export default App;
