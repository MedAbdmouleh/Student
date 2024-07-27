import React from "react";

const serviceStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem',
    backgroundColor: '#FDF7F0',
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
    maxWidth: '1200px',
  },
  service: {
    width: '100%',
    maxWidth: '300px',
    backgroundColor: '#FFA500',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textDecoration: 'none',
    display: 'block',
  },
  serviceHovered: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
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

const services = [
  { title: "Consulting", description: "Data Engineering, Azure, Power BI, and more.", link: "mailto:mohamedabdelmouleh0@gmail.com" },
  { title: "Training", description: "Power BI, Azure, Power Platform, MS Fabric.", link: "#certification" },
  { title: "Certification Practice Exams", description: "Selling mock exams with real certification questions and answers.", link: "https://www.udemy.com/user/abdmoulehmohamed/", target: "_blank" },
];

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={serviceStyles.container} id="services">
      <h2 style={serviceStyles.title}>Services</h2>
      <div style={serviceStyles.serviceCards}>
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            target={service.target} // Add target attribute
            rel={service.target === "_blank" ? "noopener noreferrer" : undefined} // Security best practice for new tab
            style={{
              ...serviceStyles.service,
              ...(hoveredIndex === index ? serviceStyles.serviceHovered : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 style={serviceStyles.serviceTitle}>{service.title}</h2>
            <p style={serviceStyles.serviceDescription}>{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Service;
