import React from "react";
import './styles.css';
const skillsStyles = {
  section: {
    backgroundColor: '#fff',
    padding: '2em 0',
  },
  container: {
    width: '80%',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  skillsCards: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2em',
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: '1em',
    borderRadius: '5px',
    textAlign: 'center',
    width: '30%',
  },
  cardTitle: {
    color: '#ff6600',
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
        <h2 style={skillsStyles.title}>Experience as a consultant</h2>
        <p style={skillsStyles.description}>
          I'm specialist in MSBI & Azure Data Factory & Power BI. My passion is designing & solving problems through data analysis and business intelligence.
        </p>
        <div style={skillsStyles.skillsCards}>
          {skillsList.map((skill, index) => (
            <div key={index} style={skillsStyles.card}>
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
