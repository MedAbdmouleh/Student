import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Certifications from "./Components/Certifcations";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed as properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abdmouleh Mohamed",
  title: "Consultant Power BI",
  email: "mohamedabdelmouleh0@gmail.com",
  gitHub: "MedAbdmouleh",
  linkedIn: "mohamed-abdmouleh",
  medium: "",
  twitter: "",
  youTube: "x0HPXgSzvP8", // YouTube ID for embedding
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const appStyles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '@media (max-width: 768px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    container: {
      width: '90%',
      margin: '0 auto',
    },
  },
};

const App = () => {
  return (
    <div id="main" style={appStyles.main}>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Certifications />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
