// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      {/* <Project /> */}
      <Contact />
    </div>
  );
}

export default App;
