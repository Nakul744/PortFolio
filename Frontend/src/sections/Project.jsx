// src/sections/Project.jsx

import React from "react";
import "./project.css";

// Assuming images are moved to the public folder and imports are removed.

function Projects() {
  const projects = [
    {
      title: "Travlo – Travel Planning Web App",
      description:
        "A full-stack travel booking platform where users can explore listings, plan trips, and manage bookings. Built using Node.js, Express.js, MongoDB, and EJS with authentication and CRUD operations.",
      // Using absolute path to the public folder (required for deployment)
      image: '/travlo.png', 
      demoLink: "https://travlo-website-1.onrender.com",
      githubLink: "https://github.com/Nakul744/Travlo-webSite.git",
    },
    {
      title: "Zerodha Clone – Stock Trading Interface (Frontend)",
      description:
        "A frontend clone of Zerodha’s trading dashboard built purely with React.js and styled with Bootstrap. The focus was on replicating the complex, dynamic user interface (UI) structure and interaction design for order management.",
      image: '/Zerodha.png', 
      demoLink: "https://zerodha-frontend-rouge.vercel.app/",
      githubLink: "https://github.com/Nakul744",
    },
    {
      title: "Kite Dashboard – Full-Stack Trading Platform",
      description:
        "A complete trading dashboard interface inspired by Zerodha Kite, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include real-time data visualization via Chart.js, robust user authentication, and dynamic portfolio tracking.",
      image: '/kite.png',
      demoLink: "https://kite-dashboard.vercel.app/",
      githubLink: "https://github.com/Nakul744",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container pt-5">
        <h2 className="fw-bold mb-5 pb-5 text-primary">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              // 📐 Optimized Bootstrap Grid for all screen sizes:
              // col-12: Full width on mobile (xs)
              // col-sm-6: Two cards per row on small screens
              // col-md-6: Two cards per row on medium screens (tablets)
              // col-lg-4: Three cards per row on large screens
              className="col-12 col-sm-6 col-md-6 col-lg-4"
            >
              <div 
                // h-100 and d-flex flex-column ensure equal card heights in each row
                className="card border-0 shadow-sm h-100 project-card d-flex flex-column"
              >
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
                  {/* flex-grow-1 ensures the description takes up all available space, 
                      pushing the buttons down consistently */}
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