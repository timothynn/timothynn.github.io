export function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
              color: "var(--subtext1)",
            }}
          >
            I&apos;m a passionate developer with expertise in JavaScript
            ecosystems, modern web frameworks, and cloud technologies. With 5+
            years of experience in full-stack development, I create scalable,
            efficient solutions to complex problems. I believe in clean,
            maintainable code and staying on the cutting edge of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
