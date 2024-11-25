import React from "react";
import "./FeaturedProjects.css";

// Projects data
const projects = [
  {
    title: "Assurance of Learning: Database",
    description: `
    My first project that touches Back-End and Database. 
    This project is the final assignment for my Database course in 
    college. Even as a team, I struggled hard at figuring out how to 
    make the connection between FrontEnd - BackEnd - Database works. 
    Tutorials were lacking in YouTube and on the web back then because 
    NextJS' App Router was still new.
    `,
    techStack: "Next - Tailwind - XAMPP - MySQL",
    links: {
      github: "https://github.com/Gruzli/AoL-Database.git",
      // website: "#",
      // tutorial: "#",
    },
    image: "../asset/Database.png", // Replace with actual image URL
  },
  {
    title: "Illegal Maritime Activities System",
    description: `
    A webapp designed to track and manage illegal maritime activities 
    across Indonesian EEZs. This system leverages GLobal Fishing Watch 
    API to provide almost real-time data analytics and monitoring 
    capabilities, ensuring maritime security and compliance with 
    international regulations.
    `,
    techStack: "React.js - Leaflet.js - Global Fishing Watch API - Protected Planet GeoJSON - Express.js - Flask - PostgreSQL",
    links: {
      github: "https://github.com/Gruzli/Illegal-Maritime-Activities-System.git",
      prototype:"https://github.com/Gruzli/Maritimal-Illegal-Ship-Warning-System.git",
      prototyping: {
        clientSide: {
          url: "https://lnkd.in/gxEmfp-E"
        },
        adminPage: {
          url: "https://lnkd.in/gnU-AGy6"
        }
      },
      // tutorial: "#",
    },
    image: "../asset/IllegalMaritimeActivitiesSystem.png", // Replace with actual image URL
  },

  {
    title: "CXR Radiology Analysis and Diagnosis System",
    description: `This AI system is designed to search and identify 
    symptoms from CXR input following a human radiologist methodology
    The system consisted of 3 AI, one for getting segmentation of chest 
    organs, one for searching for nodules that are prevalent in 
    tuberculosis viral pneumonia and cancer patient, and one for 
    classifying the lungs based on it's color and it's size.
    The system can identify the existence of cardiomegaly, Tuberculosis, 
    Viral Pneumonia, Bacterial Pneumnia, COVID-19 disease 
    (seperated from viral pneumonia family), Tumors, and abnormalities 
    that may exist in the CXR
    `,
    techStack: "Python - Jupyter Notebook",
    links: {
      github: "https://github.com/Gruzli/Lung-Pneumonia-Detection.git",
      // website: "#",
      // tutorial: "#",
    },
    image: "../asset/segmentation.png", // Replace with actual image URL
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
            className={`project-card ${index % 2 === 0 ? "image-left" : "image-right"}`}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-tech-links">
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <div className="project-links">
                  {/* Render regular links */}
                  {Object.keys(project.links).map((key) => {
                    if (key === 'prototyping') {
                      // Render the prototyping links separately without descriptions
                      return (
                        <div key={key} className="prototyping-links">
                          <a
                            href={project.links.prototyping.clientSide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="prototyping-link-item"
                          >
                            Client Side
                          </a>
                          <a
                            href={project.links.prototyping.adminPage.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="prototyping-link-item"
                          >
                            Admin Page
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <a
                          key={key}
                          href={project.links[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </a>
                      );
                    }
                  })}
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
