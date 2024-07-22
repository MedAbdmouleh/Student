import React from "react";

const expertiseStyles = {
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
  expertiseCards: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2em',
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: '1em',
    borderRadius: '5px',
    textAlign: 'center',
    width: '20%',
  },
  cardTitle: {
    color: '#ff6600',
  },
};

const expertiseList = [
    { 
        title: "Orange | Formateur Power BI", 
        description: "Expert formateur spécialisé dans  Power BI." 
      },
      { 
        title: "The Way Center | Formateur Power BI", 
        description: "Formateur spécialisé dans la certification Power BI (PL-300), Power Platform, Azure, et Fabric, offrant une expertise approfondie." 
      },
      { 
        title: "CTIG | Formateur Power BI", 
        description: "Spécialiste en formation pour la certification Power BI (PL-300) avec des compétences étendues en Power Platform, Azure, et Fabric." 
      },
      { 
        title: "Ruspina | Formateur Power BI", 
        description: "Formateur expert dans la certification Power BI (PL-300) et les technologies Power Platform, Azure, et Fabric, fournissant des solutions avancées." 
      },
];

const Expertise = () => {
  return (
    <section style={expertiseStyles.section} id="expertise">
      <div style={expertiseStyles.container}>
        <h2 style={expertiseStyles.title}>Experience as an expert trainer</h2>
        <div style={expertiseStyles.expertiseCards}>
          {expertiseList.map((item, index) => (
            <div key={index} style={expertiseStyles.card}>
              <h3 style={expertiseStyles.cardTitle}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
