import React from "react";

const expertiseStyles = {
  section: {
    backgroundColor: '#FDF7F0',
    padding: '2em 1em', // Adjusted padding for smaller screens
  },
  container: {
    width: '90%',
    maxWidth: '1200px', // Added maxWidth to maintain a good layout on large screens
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5em',
  },
  expertiseCards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centered items for better alignment
    gap: '1em',
    marginTop: '2em',
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
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': {
    title: {
      fontSize: '1.5rem',
    },
    card: {
      padding: '1em',
    },
  },
};

const expertiseList = [
  { title: "Orange | Power BI Trainer", description: "Expert trainer specializing in Power BI." },
  { title: "The Way Center | Power BI Trainer", description: "Trainer specializing in Power BI certification (PL-300), Power Platform, Azure, and Fabric, offering in-depth expertise." },
  { title: "CTIG | Power BI Trainer", description: "Specialist in training for Power BI certification (PL-300) with extensive skills in Power Platform, Azure, and Fabric." },
  { title: "Ruspina | Power BI Trainer", description: "Expert trainer in Power BI certification (PL-300) and technologies such as Power Platform, Azure, and Fabric, providing advanced solutions." },
];

const Expertise = () => {
  return (
    <section style={expertiseStyles.section} id="expertise">
      <div style={expertiseStyles.container}>
        <h2 style={expertiseStyles.title}>Experience as an Expert Trainer</h2>
        <div style={expertiseStyles.expertiseCards}>
          {expertiseList.map((item, index) => (
            <div
              key={index}
              style={expertiseStyles.card}
             
            >
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
