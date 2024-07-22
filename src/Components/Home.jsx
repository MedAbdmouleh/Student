import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/medorange.png";

const imageAltText = "Consultant MSBI & Azure Data Factory & Power BI";

const Home = ({ name, title }) => {
  return (
    <section id="home" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "50%", marginRight: "2rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px" }}>
          Learn More
        </button>
      </div>
      <img src={image} alt={imageAltText} style={{ width: "50%", height: "auto", objectFit: "cover", position: "absolute", right: 0, top: 0, zIndex: -1 }} />
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
