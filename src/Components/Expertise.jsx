import React from "react";

const expertiseStyles = {
  section: {
    backgroundColor: '#fff',
    padding: '2rem',
  },
  container: {
    width: '80%',
    margin: '0 auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  item: {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
    borderRadius: '5px',
    textAlign: 'center',
    width: '80%',
  },
};

const expertiseList = [
  { title: "Data Engineering", description: "Expert in data engineering with a focus on Azure and Power BI." },
  { title: "Business Intelligence", description: "Advanced skills in BI tools and technologies to drive business insights." },
  { title: "Cloud Solutions", description: "Experience with cloud solutions, including Azure Data Factory and other Azure services." },
];

const Expertise = () => {
  return (
    <section style={expertiseStyles.section} id="expertise">
      <div style={expertiseStyles.container}>
        <h2 style={expertiseStyles.title}>Expertise</h2>
        <div style={expertiseStyles.items}>
          {expertiseList.map((item, index) => (
            <div key={index} style={expertiseStyles.item}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
