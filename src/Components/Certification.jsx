import React from "react";
import certification1 from "../images/pl300.jpg"; // Replace with your actual image paths
import certification2 from "../images/pl200.png";
import certification3 from "../images/fabric.png";
import certification4 from "../images/pl500.webp";
import certification5 from "../images/pl600.webp";
import certification6 from "../images/excel.png";
import certification7 from "../images/dp100.png";
import certification8 from "../images/AI102.png";
import "./styles.css";

const certifications = [
  { title: "Microsoft Certified: Power Platform Solution Architect Expert", image: certification5 },
  { title: "Microsoft Certified: Power BI Data Analyst Associate", image: certification1 },
  { title: "Microsoft Certified: Azure Data Scientist Associate", image: certification7 },
  { title: "Microsoft Office Specialist: Microsoft Excel Expert", image: certification6 },
  { title: "Microsoft Certified: Azure AI Engineer Associate", image: certification8 },
  { title: "Microsoft Certified : Power Automate RPA Developer Associate", image: certification4 },
  { title: "Microsoft Certified: Fabric Analytics Engineer Associate", image: certification3 },
  { title: "Microsoft Certified: Power Platform Functional Consultant Associate", image: certification2 }
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
    marginBottom: '2rem',
    border: '1px solid #d3d3d3', // Light gray border
    borderRadius: '8px', // Rounded corners
    padding: '1rem', // Space between border and content
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional shadow for better appearance
  },
  image: {
    width: '150px', // Fixed width
    height: '150px', // Fixed height
    objectFit: 'contain' // Ensure the image fits within the specified dimensions
  },
  title: {
    marginTop: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  titlet: {
    textAlign: 'center',
    width: '100%', // Ensures the title spans the full width of the container
    marginBottom: '2rem' // Adds some space below the title
  },
  
};

const Certification = () => {
  return (
    <section style={certificationStyles.container} id="certifications">
      <h2 style={certificationStyles.titlet}>Certifications</h2>
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
