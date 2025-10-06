import React from "react";
import "./project.css";

import travloImg from "../images/travlo.png";
import zerodhaImg from "../images/zerodha.png";
import kiteImg from "../images/kite.png";
function Projects() {
  const projects = [
  {
    title: "Travlo – Travel Planning Web App",
    description:
      "A full-stack travel booking platform where users can explore listings, plan trips, and manage bookings. Built using Node.js, Express.js, MongoDB, and EJS with authentication and CRUD operations.",
    image: travloImg,
    demoLink: "https://travlo-website-1.onrender.com",
    githubLink: "https://github.com/Nakul744/Travlo-webSite.git",
  },
  {
    title: "Zerodha Clone – Stock Trading Interface (Frontend)",
    description:
      "A frontend clone of Zerodha’s trading dashboard built purely with ( React.js ) and styled with Bootstrap. The focus was on replicating the complex, dynamic user interface (UI) structure and interaction design for order management.",
    image: zerodhaImg,
    demoLink: "https://zerodha-frontend-rouge.vercel.app/",
    githubLink: "https://github.com/Nakul744",
  },
  {
    title: "Kite Dashboard – Full-Stack Trading Platform",
    description:
      "A complete trading dashboard interface inspired by Zerodha Kite, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include real-time data visualization via Chart.js, robust user authentication, and dynamic portfolio tracking.", // 👈 UPDATED TO REFLECT FULL MERN STACK
    image:kiteImg,
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
            <div key={index} className="col-12  col-sm-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100  project-card">
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
