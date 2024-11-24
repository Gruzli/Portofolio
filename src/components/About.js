// src/components/About.js
import React from 'react';
import profilePic from '../assets/profile.jpeg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Gregorius Cahyadi" />
        <p>
        Hi! i’m Gregorius Cahyadi an undergraduate student at 
        BINUS University with a passion for Web and Software Development, 
        specializing in Front-End Web Development.

        I have experience in creating responsive, user-friendly websites 
        using technologies like HTML, CSS, JavaScript, and frameworks 
        such as React.

        When I'm not coding, I'm usually working on team projects, 
        YouTube-ing new techs and tech updates, or looking for new tools 
        to upgrade my output. I'm always open to new challenges, whether 
        it's collaborating on a project or developing innovative 
        solutions. Feel free to reach out for any web development-related 
        discussions or collaborations!

        Scroll down a little bit more for my GitHub and project
        </p>
      </div>
    </section>
  );
};

export default About;
