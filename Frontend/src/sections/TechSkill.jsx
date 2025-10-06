import React from "react";
import "./TechSkill.css";

function TechSkill() {
  const skills = [
    {
      name: "HTML5",
      description: "Building structured and semantic web pages.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      description: "Creating responsive and modern UI designs.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      description: "Adding interactivity and logic to web apps.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      description: "Object-oriented programming and application development.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "React.js",
      description: "Building dynamic and reusable front-end components.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      description: "Designing mobile-first responsive layouts.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

    },
    {
      name: "Node.js",
      description: "Creating backend services and REST APIs.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      description: "Building server-side applications and APIs.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MySQL",
      description: "Managing relational databases and data.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      description: "Working with NoSQL databases for data storage.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git & GitHub",
      description: "Version control and collaborative development.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-5 text-center">
      <div className="container pt-5">
        <h2 className="fw-bold mb-5 pb-3 text-primary">Technical Skills</h2>
        <div className="row g-4 mt-5 px-1">
          {skills.map((skill, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
              <div className="card border-0 shadow-sm h-100 text-center skill-card">
                <img
                  src={skill.image}
                  className="card-img-top mx-auto mt-4"
                  alt={skill.name}
                  style={{ width: "70px", height: "70px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {skill.name}
                  </h5>
                  <p className="card-text text-muted small">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSkill;
