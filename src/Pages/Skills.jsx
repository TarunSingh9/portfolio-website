import React from 'react';
import './Css/Skills.css';
import HeroSection from '../components/HeroSection';

const Skills = () => {
  return (
    <div className='skill-container'>
      <div className="animated-text">As a full-stack web developer, I turn complex problems into elegant solutions, bridging the gap between front-end beauty and back-end efficiency.</div>
      <div className="hero-left">
        <HeroSection />
      </div>
      <div className="hero-right">
        <div className='skill-progress-container'>
          <h1 className='title-text'> My Skills Showcase </h1>

          <div className='skill-box'>
            <span className='title'>Programming Languages: C, Python, Java, JS</span>
            <div className='skill-bar'>
              <span className='skill-per Progamming'>
                <span className='tooltip'>90%</span>
              </span>
            </div>
          </div>

          <div className='skill-box'>
            <span className='title'>Data Structures and Algorithms</span>
            <div className='skill-bar'>
              <span className='skill-per DSA'>
                <span className='tooltip'>75%</span>
              </span>
            </div>
          </div>

          <div className='skill-box'>
            <span className='title'>Problrm Solving Skills</span>
            <div className='skill-bar'>
              <span className='skill-per DBMS'>
                <span className='tooltip'>80%</span>
              </span>
            </div>
          </div>

          <div className='skill-box'>
            <span className='title'> Frontend: HTML, CSS, Reactjs</span>
            <div className='skill-bar'>
              <span className='skill-per Front'>
                <span className='tooltip'>80%</span>
              </span>
            </div>
          </div>

          <div className='skill-box'>
            <span className='title'>Backend: Nodejs, MongoDB</span>
            <div className='skill-bar'>
              <span className='skill-per Back'>
                <span className='tooltip'>70%</span>
              </span>
            </div>
          </div>

          <div className='skill-box'>
            <span className='title'>Spring framework</span>
            <div className='skill-bar'>
              <span className='skill-per spring'>
                <span className='tooltip'>60%</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;
