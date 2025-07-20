import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark text-white py-4 mt-5 footer-area">
      <div className="container text-center">
        <h4 className="mb-4">Connect with me</h4>
        <div className="social-media d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <a
            href="mailto:rwenyosylvia@gmail.com"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            Send an Email
          </a>
          <a
            href="https://github.com/Sylvia-Rwenyo"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="me-2" />
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/sylvia-rwenyo-69a036212/"
            className="text-white text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="me-2" />
            LinkedIn Profile
          </a>
        </div>
        <button onClick={scrollToTop} className="btn toTop btn-outline-none btn-sm">
          <FontAwesomeIcon icon={faArrowUp} className="me-2" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
