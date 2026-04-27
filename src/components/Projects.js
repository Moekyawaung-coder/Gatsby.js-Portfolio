import React from "react";

const projects = [
  {
    title: "E-Commerce App",
    description: "Full-featured Android & Flutter app with payment integration",
    github: "https://github.com/Moe-KyawAung/ecommerce"
  },
  {
    title: "Analytics Dashboard",
    description: "AI-powered dashboard with real-time data visualization",
    github: "https://github.com/Moe-KyawAung/analytics-dashboard"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
