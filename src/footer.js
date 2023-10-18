import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  function toMenu() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section className="footer-area" id="contacts">
      <div className="menu-area">
        <div className="open-menu" onClick={toMenu}>
          <span className="open-menu-span" id="span-one"></span>
          <span className="open-menu-span" id="span-two"></span>
          <span className="open-menu-span" id="span-three"></span>
        </div>
      </div>
      <div className="toProjects">
        <h4>Sylvia Rwenyo</h4>
        <p>Web Developer</p>
      </div>
      <div className="social-media">
        <Link to="mailto:rwenyosylvia@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></Link>
        <Link to="https://github.com/Sylvia-Rwenyo" target="_blank"><FontAwesomeIcon icon={faGithub}/></Link>
        <Link to="https://www.linkedin.com/in/sylvia-rwenyo-69a036212/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></Link>
      </div>
    </section>
  );
}

export default Footer;
