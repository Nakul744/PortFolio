// src/sections/Project.jsx

import React, { useState, useEffect } from "react";
import "./project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 🚨 Your live Render Backend URL for the API endpoint
    const BACKEND_URL = "https://portfolio-backend-dvf9.onrender.com"; 

    fetch(`${BACKEND_URL}/api/projects`)
      .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please check the API connection.");
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once after the component mounts

  // --- 1. Loading and Error States ---
  if (loading) {
    return (
      <section id="projects" className="py-5 text-center">
        <div className="container pt-5">
          <h2 className="fw-bold mb-5 pb-5 text-primary">Projects</h2>
          <p className="lead text-muted">Loading projects... 🌐</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-5 text-center">
        <div className="container pt-5">
          <h2 className="fw-bold mb-5 pb-5 text-danger">Projects</h2>
          <p className="lead text-danger">{error}</p>
        </div>
      </section>
    );
  }

  // --- 2. Render Projects ---
  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container pt-5">
        <h2 className="fw-bold mb-5 pb-5 text-primary">Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project._id} className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 project-card d-flex flex-column">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "180px",
                    objectFit: "contain",
                    padding: "1rem",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-dark">
                    {project.title}
                  </h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {project.description}
                  </p>
                  <div className="mt-3 d-flex justify-content-center gap-2">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;