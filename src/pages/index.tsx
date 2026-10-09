import Head from "next/head";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Menu, X, Sun, Moon,
  Plane, Database, Cpu, Terminal, ShieldCheck, Layers3, Workflow, ExternalLink,
} from "lucide-react";

type Category = "All" | "AI & Aviation" | "Data & Finance" | "Systems";
type Project = {
  name: string;
  number: string;
  category: Exclude<Category, "All">;
  eyebrow: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

const filters: Category[] = ["All", "AI & Aviation", "Data & Finance", "Systems"];

const projects: Project[] = [
  {
    name: "Nexus",
    number: "01",
    category: "AI & Aviation",
    eyebrow: "AI infrastructure / Rust",
    description: "A model-agnostic AI harness for composable agents, tools, permissions, sessions, worktrees, and multi-agent workflows.",
    tags: ["Rust", "Agent runtime", "Orchestration"],
    link: "https://github.com/timothynn/Nexus",
    featured: true,
  },
  {
    name: "Aviation Intelligence",
    number: "02",
    category: "AI & Aviation",
    eyebrow: "Aviation technology / Applied AI",
    description: "An open-source toolkit for evidence-grounded aviation document intelligence, regulatory retrieval, provenance, and human-reviewed workflows.",
    tags: ["Python", "RAG", "FastAPI"],
    link: "https://github.com/timothynn/aviation-intelligence",
    featured: true,
  },
  {
    name: "Market Data Infrastructure",
    number: "03",
    category: "Data & Finance",
    eyebrow: "Financial infrastructure / Distributed systems",
    description: "A market-data platform exploring ingestion, normalization, time-series persistence, low-latency APIs, and real-time distribution.",
    tags: ["Go", "PostgreSQL", "Redis"],
    link: "https://github.com/timothynn/market-data-infra",
    featured: true,
  },
  {
    name: "Warehouse Neuron",
    number: "04",
    category: "Systems",
    eyebrow: "Logistics / Event-driven systems",
    description: "An inventory management system combining barcode workflows, audit trails, a FastAPI backend, and Redis-based stock events.",
    tags: ["Python", "Redis Streams", "Flutter"],
    link: "https://github.com/timothynn/warehouse-neuron",
    featured: true,
  },
  {
    name: "Trading Pipeline",
    number: "05",
    category: "Data & Finance",
    eyebrow: "Streaming / Financial data",
    description: "A data-streaming and analytics project built around Kafka, PostgreSQL, Redis, risk controls, and trading-oriented workflows.",
    tags: ["Python", "Kafka", "Data pipelines"],
    link: "https://github.com/timothynn/trading-pipeline",
  },
  {
    name: "NixOS Config Manager",
    number: "06",
    category: "Systems",
    eyebrow: "Developer tooling / Reproducibility",
    description: "A CLI for managing NixOS configuration with flake support, templates, versioning, and repeatable development workflows.",
    tags: ["Rust", "NixOS", "CLI"],
    link: "https://github.com/timothynn/nixos-config-manager",
  },
];

const expertise = [
  { number: "01", icon: Plane, name: "Aviation technology", copy: "Software for complex operational environments, where traceability, reliability, and careful integration matter." },
  { number: "02", icon: Database, name: "Data & infrastructure", copy: "Pipelines, event-driven architectures, distributed services, and observable data platforms." },
  { number: "03", icon: Cpu, name: "Intelligent tooling", copy: "Agent runtimes, grounded retrieval, AI-assisted workflows, and developer experiences." },
];

const toolkit = [
  { label: "Languages", values: "Python · TypeScript · C# · SQL · Rust · Go" },
  { label: "Data systems", values: "PostgreSQL · Kafka · Redis · Spark · Airflow" },
  { label: "Infrastructure", values: "Linux · NixOS · Docker · Git · CI/CD" },
  { label: "Engineering", values: "APIs · .NET · Angular · Event-driven systems · AI agents" },
];

function SystemDiagram() {
  return (
    <div className="nv-system">
      <div className="nv-system-top"><span><span className="nv-status-dot" /> SYSTEMS / MAP</span><span>REF 01—26</span></div>
      <svg className="nv-system-svg" viewBox="0 0 480 290" role="img" aria-label="Diagram connecting aviation, data systems, and AI engineering">
        <defs>
          <pattern id="nv-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".075" strokeWidth="1" />
          </pattern>
          <linearGradient id="nv-line" x1="0" x2="1">
            <stop stopColor="#3f8e77" /><stop offset="1" stopColor="#9ce8cb" />
          </linearGradient>
        </defs>
        <rect width="480" height="290" fill="url(#nv-grid)" />
        <path d="M110 82L237 145L367 76M237 145L365 218M237 145L113 222" fill="none" stroke="url(#nv-line)" strokeWidth="1.4" strokeDasharray="4 7" />
        <circle cx="237" cy="145" r="54" fill="#142b28" stroke="#83e1b8" strokeOpacity=".65" />
        <circle cx="237" cy="145" r="71" fill="none" stroke="#83e1b8" strokeOpacity=".15" strokeDasharray="3 9" />
        <circle cx="237" cy="145" r="7" fill="#9ce8cb" />
        <g fill="#101c20" stroke="#55756b">
          <rect x="30" y="48" width="143" height="57" rx="8" />
          <rect x="308" y="40" width="144" height="57" rx="8" />
          <rect x="296" y="192" width="156" height="57" rx="8" />
          <rect x="28" y="196" width="149" height="57" rx="8" />
        </g>
        <g fontFamily="monospace" fontSize="10" fill="#a5c5b9">
          <text x="46" y="68">01 / DOMAIN</text><text x="46" y="88" fontSize="13" fill="#e4f5ec">AVIATION</text>
          <text x="326" y="60">02 / PLATFORM</text><text x="326" y="80" fontSize="13" fill="#e4f5ec">DATA</text>
          <text x="314" y="213">03 / ENGINEERING</text><text x="314" y="233" fontSize="13" fill="#e4f5ec">SYSTEMS</text>
          <text x="44" y="217">04 / INTELLIGENCE</text><text x="44" y="237" fontSize="13" fill="#e4f5ec">AI TOOLING</text>
          <text x="213" y="133" fontSize="9">BUILD</text><text x="209" y="171" fontSize="9">EVOLVE</text>
        </g>
      </svg>
      <div className="nv-system-bottom"><span>RELIABLE / OBSERVABLE / COMPOSABLE</span><span>NYX ◈</span></div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const visible = projects.filter((project) => active === "All" || project.category === active);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Head>
        <title>Timothy Nduati | Software Engineer · Aviation, Data & AI Systems</title>
        <meta name="description" content="Timothy Nduati is a software engineer working at the intersection of aviation technology, data platforms, distributed systems, and intelligent developer tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1110" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://timothynn.is-a.dev/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timothynn.is-a.dev/" />
        <meta property="og:title" content="Timothy Nduati | Engineering Systems" />
        <meta property="og:description" content="Engineering systems where software meets the real world. Aviation · Data · AI · Infrastructure." />
        <meta property="og:image" content="https://timothynn.is-a.dev/social-card.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timothy Nduati | Engineering Systems" />
        <meta name="twitter:description" content="Software engineer working across aviation technology, data infrastructure, and intelligent systems." />
        <meta name="twitter:image" content="https://timothynn.is-a.dev/social-card.svg" />
      </Head>
      <a className="nv-skip" href="#content">Skip to content</a>
      <div className="nv-page" data-skin={light ? "light" : "dark"}>
        <div className="nv-noise" aria-hidden="true" />
        <header className="nv-header">
          <div className="nv-shell nv-header-inner">
            <a href="#top" className="nv-brand" aria-label="Timothy Nduati — top" onClick={closeMenu}>
              <span className="nv-brand-mark">TN<span>.</span></span>
              <span className="nv-brand-sub">/ engineering systems</span>
            </a>
            <nav className={menuOpen ? "nv-nav nv-nav-open" : "nv-nav"} aria-label="Main navigation">
              <a onClick={closeMenu} href="#work">Work</a>
              <a onClick={closeMenu} href="#expertise">Expertise</a>
              <a onClick={closeMenu} href="#about">About</a>
              <a onClick={closeMenu} href="#connect">Connect</a>
            </nav>
            <div className="nv-header-actions">
              <button type="button" className="nv-icon-button" onClick={() => setLight(!light)} aria-label={light ? "Use dark theme" : "Use light theme"} title="Toggle color theme">
                {light ? <Moon size={17} /> : <Sun size={17} />}
              </button>
              <a className="nv-header-link" href="https://github.com/timothynn" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>
              <button type="button" className="nv-icon-button nv-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </header>

        <main id="content">
          <section className="nv-hero nv-shell" id="top" aria-labelledby="nv-hero-title">
            <div className="nv-hero-copy">
              <div className="nv-kicker"><span className="nv-status-dot" /> NAIROBI, KENYA <span className="nv-kicker-line" /> SOFTWARE ENGINEER</div>
              <p className="nv-overline">TIMOTHY NDUATI / PORTFOLIO 2026</p>
              <h1 id="nv-hero-title">Engineering systems <span>where software meets the real world.</span></h1>
              <p className="nv-hero-description">I build software for complex aviation environments and explore data platforms, financial infrastructure, and intelligent developer tools.</p>
              <div className="nv-hero-buttons">
                <a className="nv-button nv-button-primary" href="#work">Explore selected work <ArrowUpRight size={18} /></a>
                <a className="nv-button nv-button-plain" href="#about">A little about me <ArrowDown size={17} /></a>
              </div>
              <div className="nv-hero-foot"><span>ENGINEERING / AVIATION / DATA / AI</span><span>01 — 04</span></div>
            </div>
            <SystemDiagram />
          </section>

          <section className="nv-work nv-section" id="work" aria-labelledby="nv-work-title">
            <div className="nv-shell">
              <div className="nv-section-head">
                <div><p className="nv-overline">01 / SELECTED ENGINEERING</p><h2 id="nv-work-title">Systems I&apos;m building.</h2></div>
                <p>Open-source projects and technical explorations. Real repositories, no invented metrics or placeholder case studies.</p>
              </div>
              <div className="nv-filters" role="group" aria-label="Filter projects">
                {filters.map((filter) => (
                  <button key={filter} type="button" className={active === filter ? "nv-filter nv-filter-active" : "nv-filter"} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>
                ))}
              </div>
              <div className="nv-project-grid">
                {visible.map((project) => (
                  <article className="nv-project" key={project.name}>
                    <div className="nv-project-top">
                      <span className="nv-project-number">{project.number} / {project.eyebrow}</span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={"View " + project.name + " on GitHub"} className="nv-project-go"><ArrowUpRight size={19} /></a>
                    </div>
                    <div className="nv-project-ornament" aria-hidden="true"><span /><span /><span /></div>
                    <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                    <p>{project.description}</p>
                    <div className="nv-project-bottom">
                      <div className="nv-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      <span className="nv-project-kind">{project.featured ? "FEATURED" : "EXPLORATION"}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="nv-all-work"><span>More experiments, prototypes, and open-source code live on GitHub.</span><a href="https://github.com/timothynn?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories <ArrowUpRight size={16} /></a></div>
            </div>
          </section>

          <section className="nv-section nv-expertise" id="expertise" aria-labelledby="nv-expertise-title">
            <div className="nv-shell">
              <div className="nv-section-head"><div><p className="nv-overline">02 / AREAS OF INTEREST</p><h2 id="nv-expertise-title">One mindset. Different domains.</h2></div><p>Observability, reliability, and systems thinking connect the problems I like to solve.</p></div>
              <div className="nv-expertise-grid">
                {expertise.map((item) => {
                  const Icon = item.icon;
                  return <article key={item.number} className="nv-expertise-item">
                    <div className="nv-expertise-icon"><Icon size={23} strokeWidth={1.5}/><span>{item.number}</span></div>
                    <h3>{item.name}</h3><p>{item.copy}</p>
                  </article>;
                })}
              </div>
            </div>
          </section>

          <section className="nv-section nv-about" id="about" aria-labelledby="nv-about-title">
            <div className="nv-shell nv-about-grid">
              <div className="nv-about-intro"><p className="nv-overline">03 / ABOUT</p><h2 id="nv-about-title">A builder at heart.<br /><span>A systems thinker by habit.</span></h2><div className="nv-accent-rule" /></div>
              <div className="nv-about-body">
                <p>I&apos;m Timothy, a software engineer based in Nairobi. My day-to-day work is in aviation technology, building software for operationally complex environments.</p>
                <p>Outside work, I explore the intersections of data engineering, financial systems, AI agents, and developer infrastructure. I&apos;m drawn to problems where thoughtful architecture matters more than flashy features.</p>
                <p>The principle is simple: <strong>understand the system, design with intent, and keep improving it.</strong></p>
                <details className="nv-details">
                  <summary>Beyond the code <span><ArrowDown size={16}/></span></summary>
                  <p>I enjoy running, swimming, long walks, music, and learning how things work. Most days I&apos;m somewhere between a terminal, a good idea, and a cup of coffee.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="nv-section nv-toolkit" id="toolkit" aria-labelledby="nv-toolkit-title">
            <div className="nv-shell">
              <div className="nv-section-head"><div><p className="nv-overline">04 / THE TOOLKIT</p><h2 id="nv-toolkit-title">Tools, not trophies.</h2></div><p>Technologies I use and explore to design, build, and operate systems.</p></div>
              <div className="nv-tool-grid">
                {toolkit.map((group) => <div key={group.label} className="nv-tool-row"><span>{group.label}</span><p>{group.values}</p></div>)}
              </div>
              <div className="nv-code-note"><Terminal size={17}/><code>observe → understand → design → build → measure → evolve</code></div>
            </div>
          </section>

          <section className="nv-section nv-contact" id="connect" aria-labelledby="nv-contact-title">
            <div className="nv-shell nv-contact-inner">
              <div><p className="nv-overline">05 / CONNECT</p><h2 id="nv-contact-title">Building something interesting?</h2><p>Happy to connect with engineers, founders, and curious people working on thoughtful technical problems.</p></div>
              <div className="nv-contact-actions">
                <a href="https://www.linkedin.com/in/timothynn/" target="_blank" rel="noopener noreferrer" className="nv-button nv-button-primary">Connect on LinkedIn <ArrowUpRight size={18}/></a>
                <a href="https://github.com/timothynn" target="_blank" rel="noopener noreferrer" className="nv-button nv-button-outline"><Github size={17}/> Explore GitHub</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="nv-footer"><div className="nv-shell nv-footer-inner">
          <span className="nv-footer-name">TIMOTHY<span>.</span>N</span><span>BUILD. SOLVE. EVOLVE.</span>
          <div><a href="https://github.com/timothynn" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={18}/></a><a href="https://www.linkedin.com/in/timothynn/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a><a href="https://x.com/timothynn_" aria-label="X" target="_blank" rel="noopener noreferrer"><ExternalLink size={18}/></a></div>
          <span>© {new Date().getFullYear()} Timothy Nduati</span>
        </div></footer>
      </div>
    </>
  );
}
