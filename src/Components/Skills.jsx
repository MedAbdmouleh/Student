import React from "react";

const skillsStyles = {
  section: {
    backgroundColor: '#fff',
    padding: '2em 1em', // Added padding for smaller screens
  },
  container: {
    width: '90%', // Adjusted width for better responsiveness
    maxWidth: '1200px', // Added maxWidth to maintain a good layout on large screens
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5em',
  },
  description: {
    maxWidth: '700px', // Increased maxWidth for better readability
    margin: '0 auto 2em',
    fontSize: '1rem',
    color: '#555',
  },
  skillsCards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centered items for better alignment
    gap: '1em',
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: '1.5em',
    borderRadius: '8px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    color: '#ff6600',
    fontSize: '1.2rem',
    marginBottom: '0.5em',
  },
  // Hover effect using CSS-in-JS
  cardHover: {
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
};

const skillsList = [
  { title: "Tech lead Power BI & Power Platform & ADF - Société Amaris Consulting", description: "Leading the development of innovative Power BI solutions and ADF integrations to drive business intelligence." },
  { title: "Consultant MSBI / Power BI | ERP - Société DELTASOFT", description: "Providing expert consultancy in MSBI and Power BI to enhance ERP systems and improve data-driven decision making." },
  { title: "Consultant en MSBI / Power BI - Société PERFAXIS", description: "Designing and implementing advanced MSBI and Power BI solutions to streamline business processes and improve analytics capabilities." },
];

const Skills = () => {
  return (
    <section style={skillsStyles.section} id="skills">
      <div style={skillsStyles.container}>
        <h2 style={skillsStyles.title}>Experience as a Consultant</h2>
        <p style={skillsStyles.description}>
          I'm a specialist in MSBI, Azure Data Factory, and Power BI. My passion is designing & solving problems through data analysis and business intelligence.
        </p>
        <div style={skillsStyles.skillsCards}>
          {skillsList.map((skill, index) => (
            <div
              key={index}
              style={skillsStyles.card}
              className="card-hover"
            >
              <h3 style={skillsStyles.cardTitle}>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
