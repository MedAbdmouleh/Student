import React from 'react';
import PropTypes from 'prop-types';
import arrowSvg from '../images/down-arrow.svg'; // Ensure the correct path
import image from '../images/med.jpg'; // Ensure the correct path
import './Home.css'; // Import CSS for Home

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi I am <span>{name}</span></h1>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique ornare sed massa nibh lectus luctus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.</p>
        <a href="#" className="btn">Hire Me</a>
      </div>
      <div className="hero-image">
        <img src={image} alt="Mohamed Abdmouleh" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: 'Mohamed Abdmouleh',
  title: 'Consultant and Trainer in Power BI, MSBI, and Azure Data Factory',
};

Home.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Home;
