import React from "react";
import profilePic from '../assets/profile.jpeg';
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Hi, I’m Gregorius Cahyadi</h1>
          <p>
            I am a Bachelor of Computer Science graduate from{" "}
            Bina Nusantara University, passionate about{" "}
            Web Development and{" "}
            Software Engineering. I have a deep passion for{" "}
            coding and solving complex problems. I love exploring
            new technologies, staying adaptable in the fast-paced tech world, and
            collaborating effectively within teams to bring innovative ideas to
            life.
          </p>
        </div>
        <div className="intro-image">
          <div className="fog-effect">
            <img src={profilePic} alt="Gregorius Cahyadi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
