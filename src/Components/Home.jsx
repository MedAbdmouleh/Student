import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/DSC_0617.jpg";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  return (
    <section id="home" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "100vh", padding: "2rem" }}>
      <link rel="stylesheet" href="/src/images/styles.css" />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "50%", marginRight: "2rem" }}>
        <h4>Hi I am</h4>
        <h2 style={{ color: "#FFA500" }}>{name}</h2>
        <br />
        <b><h2 style={{ color: "#FFA500" }}>Consultant MSBI & Azure Data Factory & Power BI</h2></b>
        <br />
        <h4>Consultant and trainer specializing in Power BI and Power Platform.</h4>
        <a href="#services" style={{ textDecoration: 'none' }}>
          <button style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#E65C00", // Dark orange
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            outline: "none",
            display: "inline-block",
            lineHeight: "1.5",
          }}>
            Service
          </button>
        </a>
      </div>
      <img src={image} alt={imageAltText} style={{ width: "50%", height: "auto", objectFit: "cover", position: "absolute", right: 0, top: 0, zIndex: -1 }} />
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
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
