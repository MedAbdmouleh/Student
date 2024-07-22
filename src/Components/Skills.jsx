import React from 'react';
import './Skills.css'; // Import CSS for Skills

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Why Hire Me For Your Next Project?</h2>
        <p>I'm specialist in MSBI & Power BI. My passion is designing & solving problems through data analysis and business intelligence.</p>
        <div className="skills-cards">
          <div className="card">
            <h3>Data Analysis</h3>
            <p>Create user interface design with unique & modern ideas</p>
          </div>
          <div className="card">
            <h3>Business Intelligence</h3>
            <p>Create digital user products with updated ideas</p>
          </div>
          <div className="card">
            <h3>Azure Data Factory</h3>
            <p>Create advance design prototype with Figma apps.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
