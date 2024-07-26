import React from "react";
import image from "../images/motion-background.jpg";
import "src\styles.css"

const imageAltText = "purple and blue abstract background";

const description =
  "Consultant and trainer in Power BI and Power Platform, I have a proven track record in designing, developing, and implementing business intelligence solutions. I possess strong skills in database design, data extraction, transformation, and loading (ETL), as well as in creating reports, visualizations, and project management. Additionally, I have expertise in Azure and Azure Data Factory (ADF), enhancing my ability to deliver comprehensive data solutions.Consultant and trainer in Power BI and Power Platform, I have a proven track record in designing, developing, and implementing business intelligence solutions. I possess strong skills in database design, data extraction, transformation, and loading (ETL), as well as in creating reports, visualizations, and project management.";

const skillsList = [
  "Power BI",
  "Power Platform",
  "Azure",
  "Data Factory ",
  "MS Fabric",
  "Office 365",
];

const detailOrQuote =
  "My passion for data analysis is evident in every project I undertake. My goal is to provide strategic advice and high-quality training to enhance performance and support informed decision-making within organizations.";

const aboutStyles = {
  section: {
    padding: '2em 0',
    backgroundColor: '#FDF7F0',  // Updated background color
  },
  backgroundImg: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  container: {
    backgroundColor: 'white',
    width: '50%',
    padding: '4rem',
    margin: '3rem auto',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.1em',
    color: '#666',
  },
  skillsList: {
    textAlign: 'left',
    columns: 2,
    fontSize: '1.25rem',
    margin: '2rem 3rem',
    gap: '3rem',
  },
  quote: {
    padding: '1rem 3rem 0',
  },
};

const About = () => {
  return (
    <section style={aboutStyles.section} id="about">
      <img className="background" src={image} alt={imageAltText} style={aboutStyles.backgroundImg} />
      <div style={aboutStyles.container}>
        <h2>About Myself</h2>
        <p style={aboutStyles.description}>{description}</p>
        <hr />
        <ul style={aboutStyles.skillsList}>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={aboutStyles.quote}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
