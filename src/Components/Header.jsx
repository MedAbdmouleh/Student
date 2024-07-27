import React, { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Header = () => {
  const { width } = useWindowSize();

  const headerStyles = {
    header: {
      backgroundColor: '#fff',
      padding: width < 768 ? '0.5em 0' : '1em 0',
      borderBottom: '1px solid #ddd',
      display: 'flex',
      flexDirection: width < 768 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
    },
    container: {
      width: width < 768 ? '90%' : '80%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: width < 768 ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: width < 768 ? '1.2em' : '1.5em',
      fontWeight: 'bold',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: width < 768 ? 'column' : 'row',
      margin: 0,
    },
    navItem: {
      margin: width < 768 ? '0.5em 0' : '0 1em',
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
      marginTop: width < 768 ? '1em' : 0,
    },
  };

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
