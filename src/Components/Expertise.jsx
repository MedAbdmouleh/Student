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
  { title: "Strategy & Direction", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Branding & Logo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "UI & UX Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Webflow Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const Expertise = () => {
  return (
    <section style={expertiseStyles.section} id="expertise">
      <div style={expertiseStyles.container}>
        <h2 style={expertiseStyles.title}>My Expertise</h2>
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
