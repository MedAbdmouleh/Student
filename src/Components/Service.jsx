import React from "react";

const services = [
  {
    title: "Consulting",
    description: "Data Engineering, Azure, Power BI, and more.",
    color: "#FFA500", // Orange color for consulting block
  },
  {
    title: "Training",
    description: "Power BI, Azure, Power Platform, MS Fabric.",
    color: "#FFA500", // Orange color for training block
  },
  {
    title: "Certification Practice Exams",
    description: "Selling mock exams with real certification questions and answers.",
    color: "#FFA500", // Orange color for practice exams block
  },
];

const serviceStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  serviceCards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
  },
  service: {
    width: '30%',
    backgroundColor: '#FFA500', // Orange background color
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  serviceHovered: {
    transform: 'scale(1.05)',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  serviceDescription: {
    fontSize: '1rem',
  },
};

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={serviceStyles.container} id="services">
      <h2 style={serviceStyles.title}>Services</h2>
      <div style={serviceStyles.serviceCards}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              ...serviceStyles.service,
              ...(hoveredIndex === index ? serviceStyles.serviceHovered : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 style={serviceStyles.serviceTitle}>{service.title}</h2>
            <p style={serviceStyles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
