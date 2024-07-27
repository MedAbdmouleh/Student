import React, { useState, useEffect } from "react";

const headerStyles = {
  header: {
    backgroundColor: '#fff',
    padding: '1em',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box', // Add this for padding and border to be included in the width
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
    flexDirection: 'row', // Ensure horizontal layout for larger screens
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
    backgroundColor: '#f4f4f4',
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
  menuIcon: {
    display: 'none',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'none',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '100%',
    flexDirection: 'column', // Stack items vertically for mobile menu
  },
  mobileMenuItem: {
    padding: '1em',
    textAlign: 'center',
  },
  mobileMenuLink: {
    textDecoration: 'none',
    color: '#333',
  },
  mobileMenuVisible: {
    display: 'flex', // Show menu as a flex container when open
  },
  menuIconVisible: {
    display: 'block',
  },
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logo}>Microsoft Educator</div>
      <div
        style={{
          ...headerStyles.menuIcon,
          ...(window.innerWidth <= 768 && headerStyles.menuIconVisible),
        }}
        onClick={toggleMenu}
      >
        ☰
      </div>
      <nav>
        <ul
          style={{
            ...headerStyles.navList,
            ...(window.innerWidth <= 768 && { display: 'none' }), // Hide horizontal menu on small screens
          }}
        >
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
        <ul
          style={{
            ...headerStyles.mobileMenu,
            ...(window.innerWidth <= 768 && isMenuOpen && headerStyles.mobileMenuVisible),
          }}
        >
          <li style={headerStyles.mobileMenuItem}>
            <a
              href="#home"
              style={{
                ...headerStyles.mobileMenuLink,
                ...(activeSection === 'home' && headerStyles.navLinkActive),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li style={headerStyles.mobileMenuItem}>
            <a
              href="#about"
              style={{
                ...headerStyles.mobileMenuLink,
                ...(activeSection === 'about' && headerStyles.navLinkActive),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li style={headerStyles.mobileMenuItem}>
            <a
              href="#skills"
              style={{
                ...headerStyles.mobileMenuLink,
                ...(activeSection === 'skills' && headerStyles.navLinkActive),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
          </li>
          <li style={headerStyles.mobileMenuItem}>
            <a
              href="#services"
              style={{
                ...headerStyles.mobileMenuLink,
                ...(activeSection === 'services' && headerStyles.navLinkActive),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li style={headerStyles.mobileMenuItem}>
            <a
              href="#footer"
              style={{
                ...headerStyles.mobileMenuLink,
                ...(activeSection === 'footer' && headerStyles.navLinkActive),
              }}
              onClick={() => setIsMenuOpen(false)}
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
