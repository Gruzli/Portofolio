// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Add styles here

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Gregorius C.</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
