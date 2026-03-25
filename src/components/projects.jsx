import { useState } from "react";

import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";

const projects = [
  {
    title: "Accident Prone Area Prediction",
    desc: "Analyzes crash data to identify high-risk locations and visualize insights.",
    tech: "Python, React",
    img: p1,
  },
  {
    title: "Alumni Hub",
    desc: "Platform connecting alumni and students to share opportunities.",
    tech: "React, MongoDB",
    img: p2,
  },
  {
    
    title: "Netflix Homepage Clone",
    desc: "Responsive Netflix-style homepage built using HTML, CSS, and JavaScript, featuring modern UI design, interactive elements, and smooth layout structure.",
    tech: "HTML, CSS, JavaScript",
    img: p3,

  },
  {
    title: "Personal Portfolio",
    desc: "A responsive portfolio showcasing my projects and development approach.",
    tech: "React, CSS",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const prev = () => {
    setSelected(null); // reset expanded
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const next = () => {
    setSelected(null); // reset expanded
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="section">
      <h2 className="projecthtwo">Projects</h2>

      <div className={`carousel ${selected !== null ? "expanded-mode" : ""}`}>

        {/* OVERLAY (click to close) */}
        {selected !== null && (
          <div
            className="overlay"
            onClick={() => setSelected(null)}
          ></div>
        )}

        {/* LEFT BUTTON */}
        <button className="nav left" onClick={prev}>⬅</button>

        {/* TRACK */}
        <div className="carousel-track">
          {projects.map((proj, i) => {
            const position =
              (i - index + projects.length) % projects.length;

            let className = "card";

            if (selected === i) {
              className += " expanded";
            } else if (selected !== null) {
              className += " hidden";
            } else if (position === 0) {
              className += " active";
            } else if (position === 1) {
              className += " side right";
            } else if (position === projects.length - 1) {
              className += " side left";
            } else {
              className += " hidden";
            }

            return (
              <div
                key={i}
                className={className}
                onClick={(e) => {
                  e.stopPropagation(); // prevent closing
                  setSelected(i);
                }}
              >
                <h3 className="project3">{proj.title}</h3>
                <p className="projectp">{proj.desc}</p>
                <p><strong>Tech:</strong> {proj.tech}</p>

                {/* IMAGE (BOTTOM, not for portfolio) */}
                {proj.title !== "Personal Portfolio" && (
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="project-img"
                  />
                )}

                {/* PORTFOLIO BUTTON */}
                {proj.title === "Personal Portfolio" && (
                  <a href="" className="project-btn">
                    View Portfolio
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav right" onClick={next}>➡</button>

      </div>
    </section>
  );
};

export default Projects;