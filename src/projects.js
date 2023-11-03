import React, { useEffect } from 'react';
import './style.css';
import hhsPic from './images/hhs.png';
import tibaPic from './images/tiba.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  useEffect(() => {
    const project1 = document.getElementById('project1');
    const shortDescription1 = document.getElementById('project1-description');
    const project2 = document.getElementById('project2');
    const shortDescription2 = document.getElementById('project2-description');

    if (project1 && shortDescription1) {
      project1.addEventListener('mouseover', () => {
        shortDescription1.style.opacity = '1';
      });

      project1.addEventListener('mouseout', () => {
        shortDescription1.style.opacity = '0';
      });
    }

    if (project2 && shortDescription2) {
      project2.addEventListener('mouseover', () => {
        shortDescription2.style.opacity = '1';
      });

      project2.addEventListener('mouseout', () => {
        shortDescription2.style.opacity = '0';
      });
    }

    // Clean up event listeners if the component unmounts
    return () => {
      if (project1 && shortDescription1) {
        project1.removeEventListener('mouseover', () => {
          shortDescription1.style.opacity = '1';
        });
        project1.removeEventListener('mouseout', () => {
          shortDescription1.style.opacity = '0';
        });
      }

      if (project2 && shortDescription2) {
        project2.removeEventListener('mouseover', () => {
          shortDescription2.style.opacity = '1';
        });
        project2.removeEventListener('mouseout', () => {
          shortDescription2.style.opacity = '0';
        });
      }
    };
  }, []);

  return (
    <>
      <div className='slide-title'></div>
      <section className="all-projects">
        <div className="projects-list" id="project1">
          <div className="list-card">
            <img src={tibaPic} alt="e-Tiba's landing page" />
          </div>
          <div className="short-description" id="project1-description">
            Mobile Healthcare platform with progress tracking and risk prediction
            <a href="https://nafuu.xyz/" className="btn lg to-link zoom">
              Visit Site
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
        <div className="projects-list" id="project2">
          <div className="list-card">
            <img src={hhsPic} alt="view nyumba landing page" />
          </div>
          <div className="short-description" id="project2-description">
            Personalized real estate catalog with premium access to property information.
            <a href="https://viewnyumba.co.ke" target="_blank" className="btn lg to-link zoom">
              Visit Site
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
