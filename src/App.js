// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}

export default App;
