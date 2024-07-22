import React from "react";

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em 0',
    borderBottom: '1px solid #ddd',
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
      <div className="container">
        <div style={headerStyles.logo}>LOGO</div>
        <nav>
          <ul style={headerStyles.navList}>
            <li style={headerStyles.navItem}><a href="#home" style={headerStyles.navLink}>Home</a></li>
            <li style={headerStyles.navItem}><a href="#about" style={headerStyles.navLink}>About Me</a></li>
            <li style={headerStyles.navItem}><a href="#services" style={headerStyles.navLink}>Services</a></li>
            <li style={headerStyles.navItem}><a href="#projects" style={headerStyles.navLink}>Projects</a></li>
            <li style={headerStyles.navItem}><a href="#contact" style={headerStyles.navLink}>Contact</a></li>
          </ul>
        </nav>
        <a href="#" style={headerStyles.btn}>Download CV</a>
      </div>
    </header>
  );
};

export default Header;
