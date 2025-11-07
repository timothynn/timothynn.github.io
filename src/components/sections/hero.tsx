export function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="welcome">Welcome to my portfolio</p>
            <h1>
              Hi, I&apos;m <span>Timothy Nduati</span>
            </h1>
            <p className="hero-bio">Developer, Educator & Lifelong Learner</p>
            <div className="social-links">
              <a
                href="https://github.com/timothynn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://linkedin.com/in/timothynn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://x.com/timothynn"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="fab fa-x"></i> Twitter
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar">
              {/* <img src="/public/headshot.png" alt="Timothy Nduati" />
               */}
              <img src="/headshot.png" alt="Timothy Nduati" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
