// src/App.js
import { SpeedInsights } from "@vercel/speed-insights/react"
import React from 'react';
import Navbar from './components/Navbar';
import Intro from "./components/Intro";
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <SpeedInsights />
    </div>
  );
}

export default App;
