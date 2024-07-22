import React from "react";
import certification1 from "../images/pl300.jpg"; // Replace with your actual image paths
import certification2 from "../images/pl200.png";
import certification3 from "../images/fabric.png";
import certification4 from "../images/pl500.webp";


const certifications = [
  { title: "Power BI Certification", image: certification1 },
  { title: "Azure Certification", image: certification2 },
  { title: "Power Platform Certification", image: certification3 },
  { title: "Fabric Certification", image: certification4 }
];

const certificationStyles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    padding: '2rem'
  },
  certification: {
    width: '20%',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  title: {
    marginTop: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
};

const Certification = () => {
  return (
    <section style={certificationStyles.container} id="certifications">
      {certifications.map((certification, index) => (
        <div key={index} style={certificationStyles.certification}>
          <img src={certification.image} alt={certification.title} style={certificationStyles.image} />
          <p style={certificationStyles.title}>{certification.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Certification;
