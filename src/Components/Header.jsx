import React from 'react';
//import { Link } from 'react-router-dom'; // If using React Router for navigation
import './Header.css'; // Import CSS for Header

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About Me</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
        <a href="#" className="btn">Download CV</a>
      </div>
    </header>
  );
};

export default Header;