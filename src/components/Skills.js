import React from "react";
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiGit,
  SiAndroidstudio,
  SiUnrealengine,
  SiPython,
  SiCsharp,
  SiMysql,
  SiUnity,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Impor alternatif untuk Java
import "./Skills.css";

const skills = [
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "React Js", icon: <SiReact /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "Unreal Engine", icon: <SiUnrealengine /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <FaJava /> }, // Gunakan FaJava
  { name: "C#", icon: <SiCsharp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <p>List of technologies that I've used in my several projects</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
