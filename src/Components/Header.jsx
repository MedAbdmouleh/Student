import React from "react";

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em',
    borderRight: '1px solid #ddd',
    position: 'fixed', // Fixed position
    top: 0,
    left: 0,
    height: '100vh', // Full viewport height
    width: '250px', // Fixed width for vertical layout
    zIndex: 1000, // Ensure it stays above other elements
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '2em',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%', // Full width for navigation items
  },
  navItem: {
    margin: '0.5em 0',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    padding: '0.5em',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#f4f4f4', // Change background on hover
  },
  btn: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '2em',
    display: 'block',
    width: '80%', // Full width for button
    textAlign: 'center',
  },
  '@media (max-width: 768px)': {
    header: {
      width: '100%',
      height: 'auto',
      position: 'relative',
      borderRight: 'none',
      borderBottom: '1px solid #ddd',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '1em',
    },
    navList: {
      display: 'flex',
      flexDirection: 'row',
    },
    navItem: {
      margin: '0 1em',
    },
    btn: {
      width: 'auto',
      marginTop: '0',
    },
  },
};

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logo}>Microsoft Educator</div>
      <nav>
        <ul style={headerStyles.navList}>
          <li style={headerStyles.navItem}><a href="#home" style={headerStyles.navLink}>Home</a></li>
          <li style={headerStyles.navItem}><a href="#about" style={headerStyles.navLink}>About Me</a></li>
          <li style={headerStyles.navItem}><a href="#skills" style={headerStyles.navLink}>Experience</a></li>
          <li style={headerStyles.navItem}><a href="#services" style={headerStyles.navLink}>Services</a></li>
          <li style={headerStyles.navItem}><a href="#footer" style={headerStyles.navLink}>Contact</a></li>
        </ul>
      </nav>
      <a href="#certification" style={headerStyles.btn}>Become Certified</a>
    </header>
  );
};

export default Header;
