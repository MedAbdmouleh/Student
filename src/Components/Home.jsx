import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/DSC_0617.jpg";

const Home = ({ name, title }) => {
  const { width } = useWindowSize(); // Assume useWindowSize hook is defined as shown earlier

  const homeStyles = {
    section: {
      position: "relative",
      display: "flex",
      flexDirection: width < 768 ? 'column' : 'row',
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "100vh",
      padding: width < 768 ? '2rem' : '4rem',
    },
    textContainer: {
      position: "relative",
      zIndex: 1,
      maxWidth: width < 768 ? '90%' : '50%',
      marginRight: width < 768 ? '0' : '2rem',
      textAlign: width < 768 ? 'center' : 'left',
    },
    heading: {
      color: "#FFA500",
      fontSize: width < 768 ? '1.5em' : '2em',
    },
    image: {
      width: width < 768 ? '100%' : '50%',
      height: "auto",
      objectFit: "cover",
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: -1,
    },
    arrow: {
      position: "absolute",
      bottom: "3rem",
      left: "50%",
      transform: "translateX(-50%)",
      height: "3rem",
      width: "3rem",
    },
  };

  return (
    <section style={homeStyles.section} id="home">
      <div style={homeStyles.textContainer}>
        <h4>Hi I am</h4>
        <h2 style={homeStyles.heading}>{name}</h2>
        <b><h2 style={homeStyles.heading}>{title}</h2></b>
        <h4>Consultant and trainer specializing in Power BI and Power Platform.</h4>
        <a href="#services">
          <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#FFA500", color: "#fff", border: "none", borderRadius: "4px" }}>
            Service
          </button>
        </a>
      </div>
      <img src={image} alt="Consultant MSBI & Azure Data Factory & Power BI" style={homeStyles.image} />
      <div style={homeStyles.arrow}>
        <img src={arrowSvg} alt="Scroll down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Abdmouleh Mohamed",
  title: "Consultant MSBI & Azure Data Factory & Power BI",
};

export default Home;
