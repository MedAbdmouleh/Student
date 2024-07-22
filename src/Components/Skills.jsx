import React from "react";

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
  { title: "Data Analysis", description: "Create user interface design with unique & modern ideas" },
  { title: "Business Intelligence", description: "Create digital user products with updated ideas" },
  { title: "Azure Data Factory", description: "Create advance design prototype with Figma apps." },
];

const Skills = () => {
  return (
    <section style={skillsStyles.section} id="skills">
      <div style={skillsStyles.container}>
        <h2 style={skillsStyles.title}>Why Hire Me For Your Next Project?</h2>
        <p style={skillsStyles.description}>
          I'm specialist in MSBI & Power BI. My passion is designing & solving problems through data analysis and business intelligence.
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
