import React from "react";
import "./FeaturedProjects.css";

// Projects data
const projects = [
  {
    title: "testing (incomplete)",
    description: `
      testingtesting testingtestingtestingtesting testingtestingtestingtestingtestingtestingtesting
      testingtestingtesting
       testingtestingtestingtesting testingvtestingtesting
       testingtestingtesting     testingtesting testingtestingtestingtesting testingtestingtestingtestingtestingtestingtesting
      testingtestingtesting
       testingtestingtestingtesting testingvtestingtesting
       testingtestingtesting
    `,
    techStack: "HTML - CSS - Git - GitHub",
    links: {
      github: "#",
      website: "#",
      tutorial: "#",
    },
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
  },
  {
    title: "testing",
    description: `
      testingtesting testingtestingtestingtesting testingtestingtestingtestingtestingtestingtesting
      testingtestingtesting
       testingtestingtestingtesting testingvtestingtesting
       testingtestingtesting
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