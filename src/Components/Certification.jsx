import React from "react";
import certification1 from "../images/pl300.jpg";
import certification2 from "../images/pl200.png";
import certification3 from "../images/fabric.png";
import certification4 from "../images/pl500.webp";
import certification5 from "../images/pl600.webp";
import certification6 from "../images/excel.png";
import certification7 from "../images/dp100.png";
import certification8 from "../images/AI102.png";

const certifications = [
  { title: "Microsoft Certified: Power Platform Solution Architect Expert", image: certification5 },
  { title: "Microsoft Certified: Power BI Data Analyst Associate", image: certification1 },
  { title: "Microsoft Certified: Azure Data Scientist Associate", image: certification7 },
  { title: "Microsoft Office Specialist: Microsoft Excel Expert", image: certification6 },
  { title: "Microsoft Certified: Azure AI Engineer Associate", image: certification8 },
  { title: "Microsoft Certified: Power Automate RPA Developer Associate", image: certification4 },
  { title: "Microsoft Certified: Fabric Analytics Engineer Associate", image: certification3 },
  { title: "Microsoft Certified: Power Platform Functional Consultant Associate", image: certification2 }
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Certification = () => {
  const { width } = useWindowSize();

  const certificationStyles = {
    section: {
      padding: '2em 1em', // Adjusted padding for better responsiveness
      backgroundColor: '#FDF7F0', // Added background color
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    certification: {
      width: width < 768 ? '100%' : 'calc(25% - 1rem)',
      textAlign: 'center',
      marginBottom: '2rem',
      border: '1px solid #d3d3d3',
      borderRadius: '8px',
      padding: '1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    image: {
      width: '100%',
      maxHeight: '150px',
      objectFit: 'contain',
      marginBottom: '1rem',
    },
    title: {
      marginTop: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#ff6600',
    },
    titlet: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '2rem',
      fontSize: width < 768 ? '1.5rem' : '2rem',
      color: '#333',
    },
  };

  return (
    <section style={certificationStyles.section} id="certifications">
      <h2 style={certificationStyles.titlet}>Certifications</h2>
      <div style={certificationStyles.container}>
        {certifications.map((certification, index) => (
          <div
            key={index}
            style={certificationStyles.certification}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={certification.image} alt={certification.title} style={certificationStyles.image} />
            <p style={certificationStyles.title}>{certification.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
