import React from "react";
import { useWindowSize } from "../useWindowSize"; // Assume this hook is defined as shown earlier

const certifications = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Azure Data Engineer Associate (DP-203)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Power Platform Developer Associate (PL-400)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Power Platform Solution Architect Expert (PL-600)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Azure Administrator Associate (AZ-104)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Azure Developer Associate (AZ-204)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" },
  { name: "Microsoft Certified: Power Automate RPA Developer Associate (PL-500)", link: "https://forms.office.com/Pages/ResponsePage.aspx?id=oBzDhDusrk6tEVGdgCM-b6BKYgA2cu5Np6oUIlX8d5dUMkE2QTVPVDBFMVdGQlpIQjBVOVI2REIySy4u" }
];

const Certifications = () => {
  const { width } = useWindowSize();

  const certificationStyles = {
    section: {
      padding: '3em 0',
      backgroundColor: '#f4f4f4',
      textAlign: 'center',
    },
    container: {
      width: '80%',
      margin: '0 auto',
    },
    title: {
      fontSize: width < 768 ? '2em' : '2.5em',
      marginBottom: '1.5em',
      color: '#333',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    listItem: {
      margin: width < 768 ? '0.5em 0' : '1em',
      width: width < 768 ? '100%' : 'auto',
    },
    button: {
      backgroundColor: '#ff6600',
      color: '#fff',
      padding: width < 768 ? '0.5em 1em' : '1em 2em',
      textDecoration: 'none',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      fontSize: width < 768 ? '1em' : '1.2em',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
      textTransform: 'uppercase', // Uppercase text
      fontWeight: 'bold',
    },
    buttonHover: {
      backgroundColor: '#e65c00',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 10px rgba(0,0,0,0.15)',
      backgroundImage: 'linear-gradient(to right, #ff9068, #ff7e5f)', // Gradient background on hover
    },
  };

  return (
    <section style={certificationStyles.section} id="certification">
      <div style={certificationStyles.container}>
        <h2 style={certificationStyles.title}>Become Certified</h2>
        <ul style={certificationStyles.list}>
          {certifications.map((cert, index) => (
            <li key={index} style={certificationStyles.listItem}>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  ...certificationStyles.button,
                  ...(this.state.hoveredIndex === index && certificationStyles.buttonHover),
                }}
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={this.handleMouseLeave}
              >
                {cert.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
