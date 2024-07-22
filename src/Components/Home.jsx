import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/med.jpg";

const imageAltText = "Abdmouleh Mohamed - Consultant Power BI";

const homeStyles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    padding: '2em 0',
    backgroundColor: '#fff',
    position: 'relative',
  },
  heroContent: {
    flex: 1,
  },
  heroTitle: {
    fontSize: '2.5em',
  },
  heroSpan: {
    color: '#ff6600',
  },
  heroSubtitle: {
    color: '#666',
  },
  heroText: {
    margin: '1em 0',
  },
  heroButton: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  heroImage: {
    flex: 1,
  },
  heroImageImg: {
    width: '100%',
    borderRadius: '10px',
  },
};

const Home = ({ name, title }) => {
  return (
    <section id="home" style={homeStyles.hero}>
      <img className="background" src={image} alt="" style={homeStyles.heroImageImg} />
      <div style={{ position: 'absolute', top: '5rem', left: '2rem', width: '17rem' }}>
        <h1 style={homeStyles.heroTitle}>{name}</h1>
        <h2 style={homeStyles.heroSubtitle}>{title}</h2>
      </div>
      <div style={{ position: 'absolute', bottom: '3rem', left: '50%' }}>
        <img src={arrowSvg} style={{ height: '3rem', width: '3rem' }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

export default Home;
