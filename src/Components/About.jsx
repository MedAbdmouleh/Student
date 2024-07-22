import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Consultant et formateur en Power BI/Power Platform, j'ai une expérience avérée dans la conception, le développement et la mise en œuvre de solutions BI. Fortes compétences en matière de conception de bases de données, d'extraction, de transformation et de chargement de données (ETL), de création de rapports et de visualisations, et de gestion de projet.";

const skillsList = [
  "Power BI",
  "Power Automate",
  "Azure",
  "Data Factory ",
  "Fabric",
  "Office 365",
];

const detailOrQuote =
  "Ma passion pour l'analyse de données se reflète dans chacune de mes interventions. Mon objectif est d'offrir des conseils stratégiques et des formations de qualité, afin d'améliorer les performances et de favoriser une prise de décision éclairée au sein des organisations.";

const aboutStyles = {
  section: {
    padding: '2em 0',
    backgroundColor: '#FFE5B4',  // Light orange background
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
