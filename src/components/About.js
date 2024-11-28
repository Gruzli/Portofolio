import React from 'react';
import profilePic from '../assets/profile.jpeg';
import CV from '../assets/GregoriusCahyadi_Cv.pdf';
import '../style/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Gregorius Cahyadi" className="profile-pic" />
        <div className="about-text">
          <p>
            Hi! I’m <strong>Gregorius Cahyadi</strong>, an undergraduate student at 
            <strong> BINUS University</strong> with a passion for <strong>Web</strong> and 
            <strong> Software Development</strong>, specializing in <strong>Front-End Web Development</strong>.
          </p>
          <p>
            I have experience in creating <strong>responsive</strong>, user-friendly websites using technologies like 
            <strong> HTML, CSS, JavaScript</strong>, and frameworks such as <strong>React</strong>. My work prioritizes
            both functionality and user experience.
          </p>
          <p>
            Outside of coding, I enjoy working on <strong>team projects</strong>, staying updated on the latest 
            <strong>tech trends</strong>, and discovering new tools to improve my workflow. I’m open to 
            <strong>collaborative projects</strong> and always eager to tackle new challenges.
          </p>
          <p>
            <em>Scroll down to explore my projects, GitHub contributions, and more. Let’s build something great together!</em>
          </p>
            <a href={CV} download="GregoriusCahyadi_Cv.pdf" className="download-btn">
              Download CV
            </a>
            {/* <a 
              href="/assets/GregoriusCahyadi_Cv.pdf" 
              download="GregoriusCahyadi_Cv.pdf" 
              className="download-btn">
              Download CV
            </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
