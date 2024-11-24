import React from "react";
import "./FeaturedProjects.css";

// Projects data
const projects = [
  {
    title: "Metallica Web Project (incomplete)",
    description: `
      My very first successful web dev project. Here I learned HTML and CSS and 
      how they are used as a foundation to build the web that I see every day. 
      I was so excited that I went out of my way to build an additional page: 
      "Metallica-quotes.html," which is not included in the tutorial.
      
      There I tried CSS grid for the first time and I almost gave up to be honest (*.*).
      I also tried to download a font so the website would look more "Metallica" 
      and successfully applied it. Later I learned Git and GitHub, and I pushed this project to my repo.
    `,
    techStack: "HTML - CSS - Git - GitHub",
    links: {
      github: "https://github.com/ReynardHansel/Metallica-web-project",
      website: "https://reynardhansel.github.io/Metallica-web-project",
      tutorial:
        "https://www.youtube.com/watch?v=HfTXHrWMGY8&list=PLZIA0Gp_vH-cEDOofoUjFkntfZplk3a3",
    },
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    title: "GYCC Prayer Support",
    description: `
      My first real project that gets published/hosted online and used in real-time by my church community. 
      The idea is to support our user's prayer by collecting their prayer intention and then praying it together for them.
      
      I was so excited when I learned that it's possible to host a site online for free, even to gather data using forms! 
      I tried my best here for the first time on CSS animations to make a pleasing experience for my community and every user. 
      Finally, I hosted it on Netlify, and the project is online and is being used until this day.
      
      My first-ever project that is 'useful' and my way to give back to the community :D!
    `,
    techStack: "HTML - CSS - Git - GitHub",
    links: {
      github: "#",
      website: "#",
      tutorial: "#",
    },
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-scroll-panel">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-tech-links">
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <div className="project-links">
                  {Object.keys(project.links).map((key) => (
                    <a
                      key={key}
                      href={project.links[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description.trim()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;