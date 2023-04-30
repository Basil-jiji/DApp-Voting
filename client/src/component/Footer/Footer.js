import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/arlbibek/dVoting"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://Basil-jiji.github.io/DApp Evote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Basil Jiji
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
