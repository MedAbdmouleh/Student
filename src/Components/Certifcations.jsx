import React from "react";

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

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
      screenWidth: window.innerWidth
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const isMobile = this.state.screenWidth <= 768;

    const styles = {
      section: {
        padding: '3em 0',
        backgroundColor: '#f4f4f4', // Light gray background
        textAlign: 'center',
      },
      container: {
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
      },
      title: {
        fontSize: '2.5em',
        marginBottom: '1.5em',
        color: '#ff6600', // Orange color for title
        fontWeight: 'bold',
      },
      list: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5em',
      },
      listItem: {
        flex: '1 1 220px', // Adjusted width for better responsiveness
        margin: '0.5em',
      },
      button: {
        display: 'inline-block',
        backgroundColor: '#ff6600', // Orange color
        color: '#fff',
        padding: '1em 2em',
        textDecoration: 'none',
        borderRadius: '8px', // Rounded corners
        border: 'none',
        cursor: 'pointer',
        fontSize: '1em',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Increased shadow for a floating effect
        transition: 'all 0.3s ease',
        backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
        textTransform: 'uppercase', // Uppercase text
        textAlign: 'center',
      },
      buttonHover: {
        backgroundColor: '#e65c00',
        transform: 'translateY(-3px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        backgroundImage: 'linear-gradient(to right, #ff9068, #ff7e5f)', // Gradient background on hover
      },
      generalLink: {
        display: 'inline-block',
        padding: '1em 2em',
        backgroundColor: '#0078d4',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
      },
      generalLinkHover: {
        backgroundColor: '#005a9e',
        transform: 'translateY(-3px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
      },
    };

    return (
      <section style={styles.section} id="certification">
        <div style={styles.container}>
          <h2 style={styles.title}>Become Certified</h2>
          <ul style={styles.list}>
            {certifications.map((cert, index) => (
              <li key={index} style={styles.listItem}>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    ...styles.button,
                    ...(this.state.hoveredIndex === index && styles.buttonHover),
                  }}
                  onMouseEnter={() => this.handleMouseEnter(index)}
                  onMouseLeave={this.handleMouseLeave}
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#footer" style={{ 
            ...styles.generalLink, 
            ...(this.state.hoveredIndex !== null && styles.generalLinkHover) 
          }}>Contact Us</a>
        </div>
      </section>
    );
  }
}

export default Certifications;
