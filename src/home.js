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
        <Link to="mailto:rwenyosylvia@gmail.com" className='zoom' target="_blank">Get in Touch</Link>
      </div>
      <section className="intro container">
        <div className="title">
          <h1>Sylvia Rwenyo</h1>
          <h4>Full Stack Developer</h4>
        </div>
        <div className="stacks-div">
          <img src={html} alt='HTML5'/>
          <img src={css} alt='CSS'/>
          <img src={js} alt='JavaScript'/>
          <img src={react} alt='React JS'/>
          <img src={node} alt='Node JS'/>
          <img src={php} alt='PHP'/>
          <img src={mysql} alt='MYSQL'/>
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
