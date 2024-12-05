import React, { useState } from "react";
import Header from "../components/Header";
import { projectsData } from "./data/projectsData";
import "./styles/Projects.css";

const techTagColors = {
  react: "react",
  js: "js",
  node: "node.js",
  mongo: "mongo",
  css: "css",
  html: "html",
  java: "java",
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-page">
      <Header />
      <div className="projects-hero">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          Explore the things I've built with passion and creativity.
        </p>
        <input
          type="text"
          placeholder="Search Projects..."
          className="projects-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card pop-in">
            <div className="card-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`tech-tag ${
                      techTagColors[tech.toLowerCase()] || ""
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  GitHub
                </a>
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live-preview-btn"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
