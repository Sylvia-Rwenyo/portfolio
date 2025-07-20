import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import './style2.css'; 
import Menu from './menu'; 
import Projects from './projects';
import Footer from './footer';
import { downloadCV } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import logo from './images/favicon.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import node from './images/node.png';
import php from './images/php.png';
import mysql from './images/mysql.png';
import pfp from './images/pfp.png';


function Home() {

  useEffect(() => {
    document.title = 'Sylvia Rwenyo | Web Developer';

    return () => {
      document.title = 'Sylvia Rwenyo'; 
    };
  }, []);

  return (
    <div className="home-page">
      <div className='page-header '>
        <img src={logo} alt='Sylvia Rwenyo Logo'/>
        <div>
          <Link to="https://drive.google.com/file/d/1Pkqjw4ER9uEDqpeTYK8mBrubIzRL5Tdo/view?usp=drive_link" className='zoom pos' target="_blank"> 
           View CV
          </Link>
          <Link to="mailto:rwenyosylvia@gmail.com" className='zoom neg' target="_blank">Get in Touch</Link>
        </div>
      </div>
      <section className="intro container">
        <div className="row title">
          <div className="col-md-8 text-md-start mb-4 mb-md-0">
            <h1>Sylvia Rwenyo</h1>
            <h3>Web Developer</h3>
            <p className="lead mt-3">
              Hi there! I’m a full-stack web developer who turns design ideas into scalable, responsive websites.  
              <br/>
              Whether you're launching an online store, integrating payment systems, or improving SEO,  
              let’s work together to help your business thrive online.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={pfp}
              alt="Sylvia Rwenyo"
              className="pfp img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* projects cards */}
      <Projects />
      {/* Include Footer component */}
      <Footer />
      {/* Script imports with corrected URLs */}
      <script async defer src="script.js"></script>
    </div>
  );
}

export default Home;
