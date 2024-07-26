import React from "react";
import './styles.css';

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em 0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed', // Fixed position
    top: 0,
    width: '100%', // Full width
    zIndex: 1000, // Ensure it stays above other elements
  },
  container: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
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
    display: 'flex',
    margin: 0,
  },
  navItem: {
    margin: '0 1em',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
  },
  btn: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
  },
 
};

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.container}>
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
        <a href="#certification" style={headerStyles.btn}>
        Become Certified
        </a>

      </div>
    </header>
  );
};

export default Header;
