import React from "react";

const expertiseStyles = {
  section: {
    backgroundColor: '#FDF7F0', // Changed background color
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
    title: "Orange | Power BI Trainer", 
    description: "Expert trainer specializing in Power BI." 
  },
  { 
    title: "The Way Center | Power BI Trainer", 
    description: "Trainer specializing in Power BI certification (PL-300), Power Platform, Azure, and Fabric, offering in-depth expertise." 
  },
  { 
    title: "CTIG | Power BI Trainer", 
    description: "Specialist in training for Power BI certification (PL-300) with extensive skills in Power Platform, Azure, and Fabric." 
  },
  { 
    title: "Ruspina | Power BI Trainer", 
    description: "Expert trainer in Power BI certification (PL-300) and technologies such as Power Platform, Azure, and Fabric, providing advanced solutions." 
  },
];

const Expertise = () => {
  return (
    <section style={expertiseStyles.section} id="expertise">
      <div style={expertiseStyles.container}>
        <h2 style={expertiseStyles.title}>Experience as an Expert Trainer</h2>
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
