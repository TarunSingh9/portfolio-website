import React from 'react';
import './Css/style.css';

const Home = () => {


  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <header>
            <h1>I'm a Full Stack MERN Developer</h1>
            <p>I am a CSE student passionate about building dynamic web applications.</p>
          </header>
          <hr className="divider" />
          <h2>About Me</h2>
          <p>Hello! I'm a Computer Science and Engineering student with a focus on full stack development using the MERN stack. I enjoy creating efficient and scalable web applications.</p>
        </div>
        <img src="https://img.freepik.com/free-vector/friends-video-calling_52683-37086.jpg" alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Home;