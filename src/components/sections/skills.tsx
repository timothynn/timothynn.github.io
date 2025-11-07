export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-title">
              <i className="fas fa-laptop-code"></i> Frontend
            </h3>
            <ul className="skills-list">
              <li>
                JavaScript (ES6+) <span className="skill-level">Expert</span>
              </li>
              <li>
                React.js <span className="skill-level">Expert</span>
              </li>
              <li>
                TypeScript <span className="skill-level">Advanced</span>
              </li>
              <li>
                Redux <span className="skill-level">Advanced</span>
              </li>
              <li>
                HTML5 / CSS3 / Sass{" "}
                <span className="skill-level">Advanced</span>
              </li>
              <li>
                Tailwind CSS <span className="skill-level">Advanced</span>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">
              <i className="fas fa-server"></i> Backend
            </h3>
            <ul className="skills-list">
              <li>
                Node.js <span className="skill-level">Expert</span>
              </li>
              <li>
                Express.js <span className="skill-level">Advanced</span>
              </li>
              <li>
                Python <span className="skill-level">Intermediate</span>
              </li>
              <li>
                RESTful APIs <span className="skill-level">Expert</span>
              </li>
              <li>
                GraphQL <span className="skill-level">Advanced</span>
              </li>
              <li>
                SQL & NoSQL Databases{" "}
                <span className="skill-level">Advanced</span>
              </li>
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="skill-title">
              <i className="fas fa-cloud"></i> DevOps & Tools
            </h3>
            <ul className="skills-list">
              <li>
                Git & GitHub <span className="skill-level">Expert</span>
              </li>
              <li>
                Docker <span className="skill-level">Intermediate</span>
              </li>
              <li>
                AWS <span className="skill-level">Intermediate</span>
              </li>
              <li>
                CI/CD <span className="skill-level">Advanced</span>
              </li>
              <li>
                Webpack <span className="skill-level">Advanced</span>
              </li>
              <li>
                Jest & Cypress <span className="skill-level">Advanced</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
