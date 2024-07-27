import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * Hook pour obtenir la taille de la fenêtre
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  const { width } = useWindowSize();

  const footerStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: width < 768 ? "1.5rem" : "2.5rem",
      padding: width < 768 ? "3rem 1rem" : "5rem 0 3rem",
      backgroundColor: primaryColor,
      width: "100vw",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: width < 768 ? "column" : "row",
      justifyContent: "center",
      gap: width < 768 ? "1rem" : "2.5rem",
    },
    icon: {
      width: width < 768 ? "30px" : "40px", // Ajuste la taille des icônes
      height: width < 768 ? "30px" : "40px",
    },
    smallText: {
      marginTop: 0,
      color: "white",
      fontSize: width < 768 ? "0.9rem" : "1rem",
    }
  };

  return (
    <div id="footer" style={footerStyles.container}>
      <div style={footerStyles.iconsContainer}>
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" style={footerStyles.icon} />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" style={footerStyles.icon} />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" style={footerStyles.icon} />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" style={footerStyles.icon} />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" style={footerStyles.icon} />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" style={footerStyles.icon} />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" style={footerStyles.icon} />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" style={footerStyles.icon} />
          </a>
        )}
      </div>
      <p style={footerStyles.smallText}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
  primaryColor: "#000", // Assure que primaryColor a une valeur par défaut
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
