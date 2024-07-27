import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/DSC_0617.jpg";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  return (
    <section id="home" style={styles.section}>
      <link rel="stylesheet" href="/src/images/styles.css" />
      <div style={styles.textContainer}>
        <h4 style={styles.greeting}>Hi I am</h4>
        <h2 style={styles.name}>{name}</h2>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>
          Consultant and trainer specializing in Power BI and Power Platform.
        </p>
        <a href="#services">
          <button style={styles.button}>
            Service
          </button>
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
  section: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "2rem",
    textAlign: "center",
  },
  textContainer: {
    position: "relative",
    zIndex: 1,
    maxWidth: "90%",
  },
  greeting: {
    margin: 0,
  },
  name: {
    color: "#FFA500",
    margin: 0,
    fontSize: "2rem",
  },
  title: {
    color: "#FFA500",
    margin: "0.5rem 0",
    fontSize: "1.5rem",
  },
  description: {
    margin: "1rem 0",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#FFA500",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    display: "none",
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

Home.defaultProps = {
  name: "Abdmouleh Mohamed",
  title: "Consultant MSBI & Azure Data Factory & Power BI",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
