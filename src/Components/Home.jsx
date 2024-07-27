import React from "react";
import PropTypes from "prop-types";
import image from "../images/DSC_0617.jpg";
import arrowSvg from "../images/down-arrow.svg";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between",
    minHeight: "100vh",
    padding: "2rem",
    textAlign: isMobile ? "center" : "left",
  };

  const textContainerStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: isMobile ? "90%" : "50%",
    marginRight: isMobile ? "0" : "2rem",
  };

  const imageStyle = {
    width: isMobile ? "100%" : "50%",
    height: "auto",
    objectFit: "cover",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: -1,
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#FFA500",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  };

  const scrollDownStyle = {
    position: "absolute",
    bottom: "3rem",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <section id="home" style={containerStyle}>
      <div style={textContainerStyle}>
        <h4>Hi I am</h4>
        <h2 style={{ color: "#FFA500" }}>{name}</h2>
        <br />
        <b><h2 style={{ color: "#FFA500" }}>{title}</h2></b>
        <br />
        <h4>Consultant and trainer specializing in Power BI and Power Platform.</h4>
        <a href="#services">
          <button style={buttonStyle}>Service</button>
        </a>
      </div>
      <img src={image} alt={imageAltText} style={imageStyle} />
      <div style={scrollDownStyle}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Abdmouleh Mohamed",
  title: "Consultant MSBI & Azure Data Factory & Power BI",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
