import React from "react";

const aboutStyles = {
  section: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  content: {
    fontSize: '1rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '1rem auto',
  },
};

const About = () => {
  return (
    <section style={aboutStyles.section} id="about">
      <div style={aboutStyles.container}>
        <h2 style={aboutStyles.title}>About Me</h2>
        <p style={aboutStyles.content}>
          I am a Consultant and Trainer in Power BI, MSBI, and Azure Data Factory. My expertise lies in designing and implementing innovative solutions tailored to complex client needs.
        </p>
      </div>
    </section>
  );
};

export default About;
