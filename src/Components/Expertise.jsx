import React from 'react';
import './Expertise.css'; // Import CSS for Expertise

const Expertise = () => {
  return (
    <section id="expertise">
      <div className="container">
        <h2>My Expertise</h2>
        <div className="expertise-cards">
          <div className="card">
            <h3>Strategy & Direction</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <h3>Branding & Logo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <h3>UI & UX Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <h3>Webflow Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
