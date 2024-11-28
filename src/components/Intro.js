import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from '../assets/profile.jpeg';
import "../style/Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>
            <Typewriter
              options={{
                strings: ["Hi, I’m Gregorius Cahyadi"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
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
