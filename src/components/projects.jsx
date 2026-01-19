const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="projecthtwo">Projects</h2>

      <div className="projects">
        <div className="card">
          <h3 className="project3">Portfolio Website</h3>
          <p className="projectp">Personal portfolio built with React.</p>
        </div>

        <div className="card">
          <h3 className="project3">Todo App</h3>
          <p className="projectp">Task manager using React hooks.</p>
        </div>

        <div className="card">
          <h3 className="project3">Weather App</h3>
          <p className="projectp">Weather app using API integration.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
