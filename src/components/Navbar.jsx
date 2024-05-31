import React from 'react'
import { NavLink} from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <nav>
      <h1 to="/" className='title'>TechTarun</h1>
     <div className='menu' onClick={() => {
      setMenuOpen(!menuOpen);
     }}>
         <span></span>
         <span></span>
         <span></span>
     </div>
    <ul className={menuOpen ?  "open" : ""}>
      <li><NavLink to="/">Home Page</NavLink></li>
      <li><NavLink to="/Skills">Skill Showcase</NavLink></li>
      <li><NavLink to="/Work">Work Gallery</NavLink></li>
      <li><NavLink to="/Contact">Contract Us</NavLink></li>
    </ul>
  </nav>
  )
}

export default Navbar
