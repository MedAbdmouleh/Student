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
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease', // Smooth transition for background color
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
    flexDirection: 'row',
  },
  navItem: {
    margin: '0 1em',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    padding: '0.5em 1em',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for background and text color
  },
  navLinkActive: {
    backgroundColor: '#ff6600', // Orange background for active link
    color: '#fff', // White text for active link
  },
  btn: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '0.5em 1em',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for button color and transform
  },
  btnHover: {
    backgroundColor: '#e65c00', // Darker orange on hover
    transform: 'scale(1.05)', // Slight scale effect on hover
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
    flexDirection: 'column',
  },
  mobileMenuItem: {
    padding: '1em',
    textAlign: 'center',
  },
  mobileMenuLink: {
    textDecoration: 'none',
    color: '#333',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  mobileMenuLinkActive: {
    backgroundColor: '#ff6600', // Orange background for active mobile link
    color: '#fff',
  },
  mobileMenuVisible: {
    display: 'flex',
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
            ...(window.innerWidth <= 768 && { display: 'none' }),
          }}
        >
          {['home', 'about', 'skills', 'services', 'Contact'].map(section => (
            <li key={section} style={headerStyles.navItem}>
              <a
                href={`#${section}`}
                style={{
                  ...headerStyles.navLink,
                  ...(activeSection === section && headerStyles.navLinkActive),
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <ul
          style={{
            ...headerStyles.mobileMenu,
            ...(window.innerWidth <= 768 && isMenuOpen && headerStyles.mobileMenuVisible),
          }}
        >
          {['home', 'about', 'skills', 'services', 'footer'].map(section => (
            <li key={section} style={headerStyles.mobileMenuItem}>
              <a
                href={`#${section}`}
                style={{
                  ...headerStyles.mobileMenuLink,
                  ...(activeSection === section && headerStyles.mobileMenuLinkActive),
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#certification"
        style={{
          ...headerStyles.btn,
          ':hover': headerStyles.btnHover, // Apply hover effect
        }}
      >
        Become Certified
      </a>
    </header>
  );
};

export default Header;
