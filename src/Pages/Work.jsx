import React from 'react';
import './Css/Work.css';

const projects = [
  { title: 'Linkedin-Job-Portal ', description:'The LinkedIn Job Portal project, built with the MERN stack, helps users connect to the professional world by leveraging graphs and charts to visualize career connections and job trends. This tool enhances networking and job search efficiency, providing valuable insights for career development.', link: 'https://github.com/TarunSingh9/Linkedin-Job-Portal' },
  { title: 'Scholar-Search-Bar', description: 'The Scholar Search Hub project simplifies B.Tech CSE students research by offering a user-friendly platform to explore books, authors, and subject details. With semester-specific categorization, it provides a centralized resource for efficient academic navigation.', link: 'https://github.com/TarunSingh9/Scholar-Search-Bar' },
  { title: 'JavaScript-Problem-Question ', description: 'JavaScript interviewers often inquire about fundamental coding challenges to gauge a candidate problem-solving skills and understanding of core concepts. These problems often cover topics like algorithms, data structures, and JavaScript language intricacies.', link: 'https://github.com/TarunSingh9/JavaScript_Problem_Question' },
  { title: 'PassWord-Generater ', description: 'A secret phrase generator makes solid, irregular passwords. While making another secret word, you can pick how long and how complex you maintain that it should be. The generator will then propose areas of strength for a that meets your particulars.', link: 'https://github.com/TarunSingh9/PassWordGenerater' },
  { title: 'Car-Racing-Game', description: 'In my car racing project, I crafted a captivating web-based racing game, blending HTML, CSS, and JavaScript for immersive gameplay and dynamic user interaction. With sleek design and responsive controls, it delivers an adrenaline-fueled experience for players of all levels.', link: 'https://github.com/TarunSingh9/Car-Racing' },
  { title: 'chat-Application', description: 'A Node.js chat application project facilitates real-time messaging, utilizing technologies like Socket.io and Express.js. It enables users to engage in instant communication, supporting features such as group chats and message broadcasting.', link: 'https://github.com/TarunSingh9/chatapplication' }
];

const Work = () => {
  return (
    <div className="work-container">
      <div className="description">
        <h1 className="work-h1">My Coding Projects</h1>
        <p className="para">I am a passionate developer with expertise in building web applications using modern technologies. Below are some of the projects I have worked on.</p>
      </div>
      <h2 className="work-h2">Here are some of my projects:</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card1">
            <h2>{project.title}</h2>
            <div className="divider"></div>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
