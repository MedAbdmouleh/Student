import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/DSC_0617.jpg";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#F9F9F9", // Légère couleur de fond pour le contraste
        overflow: "hidden",
      }}
    >
      <link rel="stylesheet" href="/src/images/styles.css" />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "90%",
          marginBottom: "2rem",
          padding: "1rem",
        }}
      >
        <h4>Hi I am</h4>
        <h2 style={{ color: "#FFA500" }}>{name}</h2>
        <br />
        <b>
          <h2 style={{ color: "#FFA500" }}>{title}</h2>
        </b>
        <br />
        <h4>Consultant and trainer specializing in Power BI and Power Platform.</h4>
        <a href="#services">
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#FFA500",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Service
          </button>
        </a>
      </div>
      <img
        src={image}
        alt={imageAltText}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          minHeight: "100%",
          maxWidth: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
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
