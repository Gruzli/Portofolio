import React, { useState, useEffect } from "react";
import "../style/FeaturedProjects.css";

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
    },
    images: [
      "/asset/Database1.png", // Add multiple images for rotation
      "/asset/Database2.png",
      "/asset/Database3.png",
    ],
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
      prototype: "https://github.com/Gruzli/Maritimal-Illegal-Ship-Warning-System.git",
      clientSide: "https://lnkd.in/gxEmfp-E",
      adminPage: "https://lnkd.in/gnU-AGy6",
    },
    images: [
      "/asset/IllegalMaritimeActivitiesSystem.png",
    ],
  },
  {
    title: "CXR Radiology Analysis and Diagnosis System",
    description: `
    This AI system is designed to search and identify symptoms from CXR 
    input following a human radiologist methodology. The system consisted 
    of 3 AI, one for getting segmentation of chest organs, one for 
    searching for nodules that are prevalent in tuberculosis viral 
    pneumonia and cancer patient, and one for classifying the lungs based 
    on it's color and it's size. The system can identify the existence of 
    cardiomegaly, Tuberculosis, Viral Pneumonia, Bacterial Pneumnia, 
    COVID-19 disease (seperated from viral pneumonia family), Tumors, 
    and abnormalities that may exist in the CXR.
    `,
    techStack: "Python - Jupyter Notebook",
    links: {
      github: "https://github.com/Gruzli/Lung-Pneumonia-Detection.git",
    },
    images: [
      "/asset/segmentation.png",
      "/asset/nodule.png",
    ],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="featured-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-scroll-panel">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 3000); // Ganti gambar setiap 3 detik

      return () => clearInterval(intervalId);
    }
  }, [project.images]);

  return (
    <div className="project-card">
      {/* Gambar Proyek */}
      <div className="project-image">
        {project.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <img
              key={index}
              src={image} // Perhatikan jalur gambar
              alt={`${project.title} - ${index + 1}`}
              className={`project-image-img ${index === currentImageIndex ? "visible" : ""}`}
            />
          ))
        ) : (
          <p className="no-image">No image available</p> // Placeholder jika tidak ada gambar
        )}
      </div>

      {/* Informasi Proyek */}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description.trim()}</p>
        <div className="project-tech-links">
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <div className="project-links">
            {project.links &&
              Object.keys(project.links).map((key) => (
                <a key={key} href={project.links[key]} target="_blank" rel="noopener noreferrer">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
