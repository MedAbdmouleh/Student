import React from "react";

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em 0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically on small screens
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  container: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically on small screens
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '0.5em', // Space between logo and nav
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: '0.5em 0', // Space around nav items
    display: 'flex',
    flexDirection: 'column', // Stack nav items vertically on small screens
  },
  navItem: {
    margin: '0.5em 0', // Space between nav items
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1em',
  },
  btn: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '1em', // Space above button
  },
  // Media queries for responsiveness
  '@media (min-width: 768px)': {
    header: {
      flexDirection: 'row', // Horizontal layout on larger screens
    },
    container: {
      flexDirection: 'row', // Horizontal layout on larger screens
      justifyContent: 'space-between', // Space between logo and nav
      alignItems: 'center',
    },
    navList: {
      flexDirection: 'row', // Horizontal layout for nav items on larger screens
    },
    navItem: {
      margin: '0 1em', // Horizontal margin for nav items
    },
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
