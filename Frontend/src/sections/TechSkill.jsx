import React, { useEffect, useState } from "react";
import "./TechSkill.css";

function TechSkill() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    console.log("Backend URL:", BACKEND_URL); 

    fetch(`${BACKEND_URL}/api/skills`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("NetWork response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failde to fetch skills:", err);
        setError("Failed to load Skills Please Check The API Connection");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-5 text-center">
        <div className="container pt-5">
          <h2 className="fw-bold mb-5 pb-3 text-primary">Technical Skills</h2>
          <p className="lead text-muted">Loading Skills... 🌐</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-5 text-center">
        <div className="container pt-5">
          <h2 className="fw-bold mb-5 pb-5 text-danger"> Technical Skills</h2>
          <p className="lead text-danger">{error}</p>
        </div>
      </section>
    );
  }

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
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{skill.name}</h5>
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
