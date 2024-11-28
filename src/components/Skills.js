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
import { FaJava } from "react-icons/fa"; // Import alternative for Java
import "../style/Skills.css";

const skills = [
  { name: "Typescript", icon: <SiTypescript />, color: "#007acc" },
  { name: "React Js", icon: <SiReact />, color: "#61dafb" },
  { name: "Javascript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "Git", icon: <SiGit />, color: "#f34f29" },
  { name: "Android Studio", icon: <SiAndroidstudio />, color: "#3ddc84" },
  { name: "Unreal Engine", icon: <SiUnrealengine />, color: "#0e1128" },
  { name: "Python", icon: <SiPython />, color: "#3776ab" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "C#", icon: <SiCsharp />, color: "#68217a" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
  { name: "Unity", icon: <SiUnity />, color: "#000000" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
  { name: "CSS", icon: <SiCss3 />, color: "#1572b6" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <p>List of technologies that I've used in several projects:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div
              className="skill-icon"
              style={{ color: skill.color }} // Set the icon color dynamically
            >
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
