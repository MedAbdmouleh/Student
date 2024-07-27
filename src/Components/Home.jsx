import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/DSC_0617.jpg";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  return (
    <section id="home" style={styles.container}>
      <link rel="stylesheet" href="/src/images/styles.css" />
      <div style={styles.textContainer}>
        <h4>Hi I am</h4>
        <h2 style={styles.name}>{name}</h2>
        <br />
        <b><h2 style={styles.title}>{title}</h2></b>
        <br />
        <h4>Consultant and trainer specializing in Power BI and Power Platform.</h4>
        <a href="#services" style={{ textDecoration: 'none' }}>
          <button style={buttonStyles}>Service</button>
        </a>
      </div>
      <img src={image} alt={imageAltText} style={styles.image} />
      <div style={styles.arrowContainer}>
        <img src={arrowSvg} style={styles.arrow} alt="Scroll down arrow" />
      </div>
    </section>
  );
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    flexDirection: "column",
    textAlign: "center", // Center align text for mobile
  },
  textContainer: {
    position: "relative",
    zIndex: 1,
    maxWidth: "90%", // Adjust max width for mobile
    marginBottom: "2rem", // Add space below text container
  },
  name: {
    color: "#FFA500",
  },
  title: {
    color: "#FFA500",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: -1,
    maxWidth: "100%",
  },
  arrowContainer: {
    position: "absolute",
    bottom: "3rem",
    left: "50%",
    transform: "translateX(-50%)",
  },
  arrow: {
    height: "3rem",
    width: "3rem",
  },
};

const buttonStyles = {
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  backgroundColor: "#FFA500",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "background-color 0.3s, transform 0.3s",
  fontWeight: "bold",
};

const hoverStyles = {
  backgroundColor: "#e59400",
  transform: "scale(1.05)",
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
