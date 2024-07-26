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

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
        backgroundColor: primaryColor,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <link rel="stylesheet" href="/src/images/styles.css" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={envelopeIcon}
              alt="email"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img
              src={devDotToIcon}
              alt="Dev.to"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img
              src={gitHubIcon}
              alt="GitHub"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img
              src={mediumIcon}
              alt="Medium"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" rel="noopener noreferrer">
            <img
              src={youTubeIcon}
              alt="YouTube"
              className="socialIcon"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        )}
      </div>
      <p
        className="small"
        style={{ marginTop: 0, color: "white", fontSize: "0.9rem" }}
      >
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
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
