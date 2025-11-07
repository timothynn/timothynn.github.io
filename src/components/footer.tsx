export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            Timothy<span>Nduati</span>
          </div>
          <p>Turning complex problems into elegant technical solutions</p>
          <div className="footer-links">
            <a
              href="https://github.com/timothynn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/timothynn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/timothynn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-x"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; {currentYear} Timothy Nduati. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
