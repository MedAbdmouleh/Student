import React, { useState, useEffect } from "react";

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em',
    borderBottom: '1px solid #ddd',
    position: 'fixed', // Fixed position
    top: 0,
    left: 0,
    width: '100%', // Full width
    zIndex: 1000, // Ensure it stays above other elements
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 1em',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    padding: '0.5em',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  navLinkActive: {
    backgroundColor: '#f4f4f4', // Change background color for active section
  },
  btn: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'block',
    textAlign: 'center',
  },
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logo}>Microsoft Educator</div>
      <nav>
        <ul style={headerStyles.navList}>
          <li style={headerStyles.navItem}>
            <a 
              href="#home" 
              style={{
                ...headerStyles.navLink,
                ...(activeSection === 'home' && headerStyles.navLinkActive),
              }}
            >
              Home
            </a>
          </li>
          <li style={headerStyles.navItem}>
            <a 
              href="#about" 
              style={{
                ...headerStyles.navLink,
                ...(activeSection === 'about' && headerStyles.navLinkActive),
              }}
            >
              About Me
            </a>
          </li>
          <li style={headerStyles.navItem}>
            <a 
              href="#skills" 
              style={{
                ...headerStyles.navLink,
                ...(activeSection === 'skills' && headerStyles.navLinkActive),
              }}
            >
              Experience
            </a>
          </li>
          <li style={headerStyles.navItem}>
            <a 
              href="#services" 
              style={{
                ...headerStyles.navLink,
                ...(activeSection === 'services' && headerStyles.navLinkActive),
              }}
            >
              Services
            </a>
          </li>
          <li style={headerStyles.navItem}>
            <a 
              href="#footer" 
              style={{
                ...headerStyles.navLink,
                ...(activeSection === 'footer' && headerStyles.navLinkActive),
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="#certification" style={headerStyles.btn}>Become Certified</a>
    </header>
  );
};

export default Header;
