import React from 'react';
import './Css/SkillCard.css';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register required elements
Chart.register(ArcElement, Tooltip, Legend);

const SkillCard = () => {
  const data = {
    labels: ['C', 'Java', 'JavaScript', 'HTML', 'CSS', 'Reactjs', 'Nodejs', 'Mongodb'],
    datasets: [
      {
        data: [15, 15, 15, 10, 10, 15, 10, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#FFCD56',
          '#4BC0C0'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="skill-card">
      <div className="description">
        <h2>About Me</h2>
        <p><strong>Skills:</strong></p>
        <ul>
          <li>Programming Languages: C, Java, JavaScript</li>
          <li>Data Structures and Algorithms (DSA)</li>
          <li>Database Management Systems (DBMS)</li>
          <li>Frontend: HTML, CSS, Reactjs</li>
          <li>Backend: Nodejs, MongoDB</li>
        </ul>
        <div className="horizontal-line"></div>
        <p>Check out my LeetCode profile for more:</p>
        <a href="https://leetcode.com/Tarunsingh956/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
          View LeetCode Profile
        </a>
      </div>
      <div className="vertical-line"></div>
      <div className="pie-chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillCard;
