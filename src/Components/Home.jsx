import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/websitedata.png";

const imageAltText = "Abdmouleh Mohamed - Consultant Power BI";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <img className="background" src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -1 }} />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" ,textAlign: "right"}}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
      <div style={{ position: "absolute", top: "5rem", right: "2rem", width: "20rem", textAlign: "right" }}>
        <p>Abdmouleh Mohamed - Consultant Power BI</p>
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
