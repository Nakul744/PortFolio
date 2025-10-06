import React from "react";
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="Home d-flex flex-column justify-content-center align-items-center  text-center bg-light"
    >
      <div className="container-fluid">
        <h5 className="text-uppercase text-secondary mb-3">
          Welcome to my portfolio
        </h5>

        <h1 className="fw-bold display-4 mb-3">
          Hi, I’m <span className="text-primary">Nakul Thote</span>
        </h1>

        <h4 className="text-muted mb-4">
          Electronics & Telecommunication Engineer | Web Developer
        </h4>

        <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
          I specialize in creating responsive, interactive, and modern web
          applications using React, JavaScript, and Bootstrap. I’m passionate
          about building user-friendly interfaces and efficient solutions.
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <a href="#projects" className="btn btn-primary btn-lg px-4">
            View My Work
          </a>
          <a
            href="/Nakul_Thote.pdf"
            target="_blank"
            rel="/Nakul_Thote.pdf"
            className="btn btn-outline-dark btn-lg px-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
