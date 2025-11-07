const projects = [
  {
    title: "Modern E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Implements cart functionality, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    stars: 142,
    forks: 24,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive dashboard for data visualization using D3.js and React. Features real-time updates and customizable widgets with complex filtering options.",
    technologies: ["React", "D3.js", "WebSockets", "Express"],
    stars: 87,
    forks: 15,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Open Source CLI Tool",
    description:
      "Developer utility CLI tool that automates common workflows. Published on npm with 5k+ weekly downloads.",
    technologies: ["Node.js", "TypeScript", "Commander.js", "npm"],
    stars: 210,
    forks: 42,
    demoLink: "#",
    codeLink: "#",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-stats">
                  <span className="project-stat">
                    <i className="fas fa-star"></i> {project.stars}
                  </span>
                  <span className="project-stat">
                    <i className="fas fa-code-branch"></i> {project.forks}
                  </span>
                </div>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.demoLink} className="btn btn-primary">
                    View Demo
                  </a>
                  <a href={project.codeLink} className="btn btn-secondary">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
