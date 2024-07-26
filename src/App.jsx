import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";

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

const appStyles = {
  main: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@media (max-width: 768px)': {
    main: {
      padding: '1rem',
    },
  },
  '@media (max-width: 480px)': {
    main: {
      padding: '0.5rem',
    },
  },
};

const App = () => {
  return (
    <div id="main" style={appStyles.main}>
      <link rel="stylesheet" href="/src/images/styles.css" />
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Certifications />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
