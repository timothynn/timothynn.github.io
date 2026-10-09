import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X, Sun, Moon, Plane, Database, Cpu, Terminal, ExternalLink } from "lucide-react";
import { SystemsConsole } from "@/components/systems-console";

type Category = "All" | "Aviation" | "AI & Agents" | "Data Platforms" | "Logistics";
type Project = {
  name: string; number: string; category: Exclude<Category, "All">;
  eyebrow: string; description: string; tags: string[];
  link: string; preview?: string; featured?: boolean;
};
const filters: Category[] = ["All", "Aviation", "AI & Agents", "Data Platforms", "Logistics"];
const projects: Project[] = [
  { name: "AERIS", number: "01", category: "Aviation", eyebrow: "AVIATION OPERATIONS / SIMULATION",
    description: "Explore flight networks, weather context, disruption modeling and saved scenario replays in an aviation intelligence lab.",
    tags: ["FastAPI", "Simulation", "Python"], link: "https://github.com/timothynn/AERIS",
    preview: "https://raw.githubusercontent.com/timothynn/AERIS/master/docs/preview.png", featured: true },
  { name: "STRATA", number: "02", category: "Data Platforms", eyebrow: "DATA RELIABILITY / OBSERVABILITY",
    description: "Trace data lineage, inject pipeline faults, inspect downstream impact and work through incident recovery.",
    tags: ["Data lineage", "Observability", "Python"], link: "https://github.com/timothynn/STRATA",
    preview: "https://raw.githubusercontent.com/timothynn/STRATA/master/docs/preview.png", featured: true },
  { name: "DISPATCH", number: "03", category: "Logistics", eyebrow: "LOGISTICS / OPTIMIZATION",
    description: "Plan deliveries around fleet capacities and time-window constraints, compare routes and explore trade-offs.",
    tags: ["FastAPI", "Routing", "Operations"], link: "https://github.com/timothynn/DISPATCH",
    preview: "https://raw.githubusercontent.com/timothynn/DISPATCH/master/docs/preview.png", featured: true },
  { name: "Nexus", number: "04", category: "AI & Agents", eyebrow: "AI INFRASTRUCTURE / RUST",
    description: "A model-agnostic AI harness for agents, tools, permissions, workspace isolation, worktrees and multi-agent workflows.",
    tags: ["Rust", "Agents", "Orchestration"], link: "https://github.com/timothynn/Nexus", featured: true },
  { name: "Aviation Intelligence", number: "05", category: "Aviation", eyebrow: "AVIATION / GROUNDED AI",
    description: "Evidence-grounded aviation document retrieval, provenance, knowledge models and human-reviewed workflows.",
    tags: ["RAG", "FastAPI", "Provenance"], link: "https://github.com/timothynn/aviation-intelligence" },
  { name: "Market Data Infrastructure", number: "06", category: "Data Platforms", eyebrow: "FINANCIAL DATA / DISTRIBUTED SYSTEMS",
    description: "Explore market-data ingestion, normalization, time-series storage, streaming and high-performance API delivery.",
    tags: ["Go", "PostgreSQL", "Redis"], link: "https://github.com/timothynn/market-data-infra" },
  { name: "Warehouse Neuron", number: "07", category: "Logistics", eyebrow: "EVENT-DRIVEN / INVENTORY",
    description: "An inventory workflow platform with stock intake, auditable movements, Redis events and a Flutter web app.",
    tags: ["Python", "Redis Streams", "Flutter"], link: "https://github.com/timothynn/warehouse-neuron" },
];
const expertise = [
  { number: "01", icon: Plane, name: "Aviation technology", copy: "Software for complex operational environments, where traceability, reliability and thoughtful integration matter." },
  { number: "02", icon: Database, name: "Data & infrastructure", copy: "Pipelines, event-driven architecture, distributed services and observable platforms." },
  { number: "03", icon: Cpu, name: "Intelligent tooling", copy: "Agent runtimes, grounded retrieval, AI-assisted workflows and developer infrastructure." },
];
const toolkit = [
  { label: "Languages", values: "Python · TypeScript · C# · SQL · Rust · Go" },
  { label: "Data systems", values: "PostgreSQL · Kafka · Redis · Spark · Airflow" },
  { label: "Infrastructure", values: "Linux · NixOS · Docker · Git · CI/CD" },
  { label: "Engineering", values: ".NET · Angular · APIs · Event-driven systems · AI agents" },
];
export default function Home() {
  const [active, setActive] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const progress = useRef<HTMLDivElement | null>(null);
  const visible = projects.filter(p => active === "All" || p.category === active);

  useEffect(() => {
    const update = () => {
      if (!progress.current) return;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.current.style.transform = "scaleX(" + Math.min(1, window.scrollY / max) + ")";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.remove("nv-reveal-pending"); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 35px 0px" });
    targets.forEach(t => {
      if (t.getBoundingClientRect().top > window.innerHeight - 45) { t.classList.add("nv-reveal-pending"); observer.observe(t); }
    });
    return () => observer.disconnect();
  }, [active]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Head>
        <title>Timothy Nduati | Software Engineer · Aviation, Data & AI Systems</title>
        <meta name="description" content="Software engineer building thoughtful systems for aviation technology, AI infrastructure, data reliability, financial systems and logistics. Explore AERIS, STRATA, DISPATCH and Nexus." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1110" />
        <meta name="color-scheme" content="dark light" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://timothynn.is-a.dev/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timothynn.is-a.dev/" />
        <meta property="og:title" content="Timothy Nduati | Engineering Systems" />
        <meta property="og:description" content="Engineering systems where software meets the real world. Aviation · AI · Data · Logistics." />
        <meta property="og:image" content="https://timothynn.is-a.dev/social-card.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Timothy Nduati | Engineering Systems" />
        <meta name="twitter:image" content="https://timothynn.is-a.dev/social-card.svg" />
      </Head>
      <a className="nv-skip" href="#content">Skip to content</a>
      <div className="nv-page" data-skin={light ? "light" : "dark"}>
        <div className="nv-noise" aria-hidden="true" />
        <header className="nv-header">
          <div className="nv-scroll-progress" ref={progress} aria-hidden="true" />
          <div className="nv-shell nv-header-inner">
            <a href="#top" className="nv-brand" aria-label="Timothy Nduati — top" onClick={closeMenu}><span className="nv-brand-mark">TN<span>.</span></span><span className="nv-brand-sub">/ engineering systems</span></a>
            <nav className={menuOpen ? "nv-nav nv-nav-open" : "nv-nav"} aria-label="Main navigation">
              <a onClick={closeMenu} href="#work">Projects</a>
              <a onClick={closeMenu} href="#expertise">Expertise</a>
              <a onClick={closeMenu} href="#about">About</a>
              <a onClick={closeMenu} href="#connect">Connect</a>
            </nav>
            <div className="nv-header-actions">
              <button type="button" className="nv-icon-button" onClick={() => setLight(!light)} aria-label={light ? "Use dark theme" : "Use light theme"} title="Toggle color theme">{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
              <a className="nv-header-link" href="https://github.com/timothynn" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a>
              <button type="button" className="nv-icon-button nv-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
            </div>
          </div>
        </header>
        <main id="content">
          <section className="nv-hero nv-shell" id="top" aria-labelledby="nv-hero-title">
            <div className="nv-hero-copy">
              <div className="nv-kicker"><span className="nv-status-dot"/> NAIROBI, KENYA <span className="nv-kicker-line"/> SOFTWARE ENGINEER</div>
              <p className="nv-overline">TIMOTHY NDUATI / ENGINEERING SYSTEMS</p>
              <h1 id="nv-hero-title">Engineering systems <span>where software meets the real world.</span></h1>
              <p className="nv-hero-description">I build software for complex aviation environments and explore ambitious systems in AI infrastructure, data reliability, financial data and logistics. Explore the work—not just the stack.</p>
              <div className="nv-hero-buttons">
                <a className="nv-button nv-button-primary" href="#work">Explore the project lab <ArrowUpRight size={18}/></a>
                <a className="nv-button nv-button-plain" href="#about">A little about me <ArrowDown size={17}/></a>
              </div>
              <div className="nv-hero-foot"><span>AVIATION / AI / DATA / LOGISTICS</span><span>SCROLL TO EXPLORE ↓</span></div>
            </div>
            <SystemsConsole/>
          </section>
          <div className="nv-ticker" aria-label="Engineering disciplines">
            <div className="nv-ticker-track">
              <span>✳ AVIATION TECHNOLOGY</span><span>✳ ARTIFICIAL INTELLIGENCE</span><span>✳ DATA PLATFORMS</span><span>✳ DISTRIBUTED SYSTEMS</span><span>✳ LOGISTICS OPTIMIZATION</span>
              <span aria-hidden="true">✳ AVIATION TECHNOLOGY</span><span aria-hidden="true">✳ ARTIFICIAL INTELLIGENCE</span><span aria-hidden="true">✳ DATA PLATFORMS</span><span aria-hidden="true">✳ DISTRIBUTED SYSTEMS</span><span aria-hidden="true">✳ LOGISTICS OPTIMIZATION</span>
            </div>
          </div>
          <section className="nv-work nv-section" id="work" aria-labelledby="nv-work-title">
            <div className="nv-shell">
              <div className="nv-section-head" data-reveal>
                <div><p className="nv-overline">01 / PROJECT LAB</p><h2 id="nv-work-title">Ideas, turned into systems.</h2></div>
                <p>Three new interactive labs, an AI runtime, and engineering experiments across aviation, data, finance, and operations. Every card links to real source code.</p>
              </div>
              <div className="nv-filters" role="group" aria-label="Filter projects">
                {filters.map(filter => <button key={filter} type="button" className={active === filter ? "nv-filter nv-filter-active" : "nv-filter"} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
              </div>
              <div className="nv-project-grid">
                {visible.map(project => (
                  <article key={project.name} className={"nv-project" + (project.featured ? " nv-project-featured" : "")} data-reveal>
                    <div className="nv-project-top">
                      <span className="nv-project-number">{project.number} / {project.eyebrow}</span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="nv-project-go" aria-label={"View " + project.name + " on GitHub"}><ArrowUpRight size={19}/></a>
                    </div>
                    <div className={project.preview ? "nv-project-media" : "nv-project-media nv-project-media-abstract"}>
                      {project.preview ?
                        <img src={project.preview} alt={project.name + " application dashboard preview"} loading="lazy" decoding="async"/> :
                        <div className="nv-media-symbol" aria-hidden="true"><span className="nv-media-orbit"/><span className="nv-media-core">◈</span><span className="nv-media-ruler">OPEN SOURCE / {project.number}</span></div>}
                      <span className="nv-media-label">{project.preview ? "APPLICATION PREVIEW" : "SYSTEM EXPLORATION"}</span>
                    </div>
                    <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                    <p>{project.description}</p>
                    <div className="nv-project-bottom">
                      <div className="nv-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                      <span className="nv-project-kind">{project.featured ? "FEATURED" : "EXPLORATION"}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="nv-all-work"><span>Curious about the implementation? Explore the repositories and engineering notes.</span><a href="https://github.com/timothynn?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories <ArrowUpRight size={16}/></a></div>
            </div>
          </section>
          <section className="nv-section nv-expertise" id="expertise" aria-labelledby="nv-expertise-title">
            <div className="nv-shell">
              <div className="nv-section-head" data-reveal><div><p className="nv-overline">02 / MINDSET</p><h2 id="nv-expertise-title">Engineering beyond the interface.</h2></div><p>Systems are interesting because of what happens beneath the surface. These are the domains that keep me curious.</p></div>
              <div className="nv-expertise-grid">
                {expertise.map(item => { const Icon=item.icon; return (
                  <article key={item.number} className="nv-expertise-item" data-reveal>
                    <div className="nv-expertise-icon"><Icon size={23} strokeWidth={1.5}/><span>{item.number}</span></div>
                    <h3>{item.name}</h3><p>{item.copy}</p>
                  </article>
                ); })}
              </div>
            </div>
          </section>
          <section className="nv-section nv-about" id="about" aria-labelledby="nv-about-title">
            <div className="nv-shell nv-about-grid" data-reveal>
              <div className="nv-about-intro"><p className="nv-overline">03 / ABOUT</p><h2 id="nv-about-title">A builder at heart.<br/><span>A systems thinker by habit.</span></h2><div className="nv-accent-rule"/></div>
              <div className="nv-about-body">
                <p>I&apos;m Timothy, a software engineer based in Nairobi. My day-to-day work is in aviation technology, building software for complex operational environments.</p>
                <p>Outside work, I explore data engineering, financial systems, AI agents, developer infrastructure, and products that make complicated workflows more understandable.</p>
                <p>My approach: <strong>understand the system, design with intent, build thoughtfully, then keep improving it.</strong></p>
                <details className="nv-details"><summary>Beyond the code <span><ArrowDown size={16}/></span></summary><p>I enjoy running, swimming, long walks, music and discovering how things work. Most days I&apos;m somewhere between a terminal, a good idea and a cup of coffee.</p></details>
              </div>
            </div>
          </section>
          <section className="nv-section nv-toolkit" id="toolkit" aria-labelledby="nv-toolkit-title">
            <div className="nv-shell">
              <div className="nv-section-head" data-reveal><div><p className="nv-overline">04 / TOOLKIT</p><h2 id="nv-toolkit-title">Tools, not trophies.</h2></div><p>Technologies I use and explore to design, build and operate systems.</p></div>
              <div className="nv-tool-grid">{toolkit.map(group => <div key={group.label} className="nv-tool-row"><span>{group.label}</span><p>{group.values}</p></div>)}</div>
              <div className="nv-code-note"><Terminal size={17}/><code>observe → understand → design → build → measure → evolve</code></div>
            </div>
          </section>
          <section className="nv-section nv-contact" id="connect" aria-labelledby="nv-contact-title">
            <div className="nv-shell nv-contact-inner" data-reveal>
              <div><p className="nv-overline">05 / CONNECT</p><h2 id="nv-contact-title">Building something interesting?</h2><p>Happy to connect with engineers, founders and curious people working on thoughtful technical problems.</p></div>
              <div className="nv-contact-actions"><a className="nv-button nv-button-primary" href="https://www.linkedin.com/in/timothynn/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={18}/></a><a className="nv-button nv-button-outline" href="https://github.com/timothynn" target="_blank" rel="noopener noreferrer"><Github size={17}/> Explore GitHub</a></div>
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
