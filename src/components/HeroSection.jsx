import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-tagline">Building the future, one line of code at a time</h1>
          <p className="hero-intro">
            Hi, I'm Tarun Singh, a passionate software developer with a love for creating innovative solutions.
          </p>
          <p className="hero-story">
            Ever since I wrote my first "Hello World" program, I've been fascinated by the power of code to solve real-world problems. This passion drives me to continuously improve my skills and take on new challenges.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/TarunSingh9/" className="hero-button" target="_blank" rel="noopener noreferrer">View my GitHub Profile</a>
            <a href="https://www.linkedin.com/in/tarun-singh-697a55231" className="hero-button" target="_blank" rel="noopener noreferrer">View my LinkedIn Profile</a>
            <a href="https://leetcode.com/u/Tarunsingh956/" className="hero-button" target="_blank" rel="noopener noreferrer">View my Leetcode Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

