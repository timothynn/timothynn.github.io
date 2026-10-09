import { useEffect, useState } from "react";
import { Activity, ArrowUpRight, Play, Radar } from "lucide-react";

type SystemId = "aeris" | "strata" | "dispatch";
type SystemSpec = {
  label: string; number: string; family: string; title: string; detail: string;
  nodes: [string, string, string, string]; metrics: [string, string, string];
  repository: string; status: string;
};
const systems: Record<SystemId, SystemSpec> = {
  aeris: {
    label: "AERIS", number: "01", family: "AVIATION INTELLIGENCE",
    title: "Model the unexpected.", detail: "Trace a simulated operational disruption across flight, weather, and airport signals.",
    nodes: ["FLIGHT", "WEATHER", "IMPACT", "SCENARIO"],
    metrics: ["Sample flights", "Weather context", "Scenario replay"],
    repository: "https://github.com/timothynn/AERIS", status: "Scenario simulated"
  },
  strata: {
    label: "STRATA", number: "02", family: "DATA OBSERVABILITY",
    title: "See the blast radius.", detail: "Follow lineage from the first broken dataset to every affected downstream consumer.",
    nodes: ["SOURCE", "QUALITY", "LINEAGE", "IMPACT"],
    metrics: ["Lineage graph", "Fault injection", "Recovery"],
    repository: "https://github.com/timothynn/STRATA", status: "Incident simulated"
  },
  dispatch: {
    label: "DISPATCH", number: "03", family: "LOGISTICS OPTIMIZATION",
    title: "Find the smarter route.", detail: "Turn constraints, deliveries, and vehicles into a more deliberate operating plan.",
    nodes: ["ORDERS", "FLEET", "ROUTING", "PLAN"],
    metrics: ["Capacity-aware", "Time windows", "Route compare"],
    repository: "https://github.com/timothynn/DISPATCH", status: "Route simulated"
  }
};

export function SystemsConsole() {
  const [active, setActive] = useState<SystemId>("aeris");
  const [cycle, setCycle] = useState(0);
  const [running, setRunning] = useState(false);
  const current = systems[active];

  useEffect(() => {
    if (!running) return;
    const timeout = window.setTimeout(() => setRunning(false), 1150);
    return () => window.clearTimeout(timeout);
  }, [running, cycle, active]);

  const simulate = () => { setCycle(n => n + 1); setRunning(true); };
  const select = (id: SystemId) => { setActive(id); setCycle(0); setRunning(false); };

  return (
    <section className="lab-console" aria-label="Interactive systems lab">
      <div className="lab-console-top">
        <div className="lab-top-status"><span className="lab-led" /> SYSTEMS LAB / INTERACTIVE</div>
        <div className="lab-top-right"><Radar size={14} /> CONCEPT DEMO</div>
      </div>
      <div className="lab-console-tabs" role="group" aria-label="Select a system demonstration">
        {(Object.keys(systems) as SystemId[]).map((id) =>
          <button type="button" key={id} className={active === id ? "lab-tab lab-tab-on" : "lab-tab"} aria-pressed={active === id} onClick={() => select(id)}>
            <span>{systems[id].number}</span>{systems[id].label}
          </button>
        )}
      </div>
      <div className="lab-viewport">
        <div className="lab-viewport-label"><span>{current.family}</span><span>NODE MAP / 4</span></div>
        <div key={active + "-" + cycle} className={running ? "lab-schematic lab-running" : "lab-schematic"}>
          <svg viewBox="0 0 540 238" role="img" aria-label={current.label + " sample system graph with four connected nodes"} preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="lab-dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".13" />
              </pattern>
              <linearGradient id="lab-link" x1="0" x2="1"><stop stopColor="#5ee1b6" stopOpacity=".22"/><stop offset=".52" stopColor="#94f0cb" stopOpacity=".9"/><stop offset="1" stopColor="#5ee1b6" stopOpacity=".25"/></linearGradient>
            </defs>
            <rect width="540" height="238" fill="url(#lab-dotgrid)"/>
            <g fill="none" stroke="url(#lab-link)" strokeWidth="1.6">
              <path d="M74 122H465" strokeDasharray="5 6"/>
              <path d="M74 122Q190 25 270 122T465 122" opacity=".22"/>
            </g>
            {[74,204,335,465].map((cx,i) => (
              <g key={cx}>
                <circle cx={cx} cy={122} r="30" className="lab-node-ring"/>
                <circle cx={cx} cy={122} r="19" className={i === 2 ? "lab-node-core lab-node-core-accent" : "lab-node-core"}/>
                <circle cx={cx} cy={122} r="4" className="lab-node-dot"/>
                <text x={cx} y="174" textAnchor="middle" className="lab-svg-label">{current.nodes[i]}</text>
                <text x={cx} y="85" textAnchor="middle" className="lab-svg-number">0{i+1}</text>
              </g>
            ))}
            <g className="lab-packet" aria-hidden="true"><circle cx="0" cy="0" r="5" fill="#c3ffe0"><animateMotion dur="4.3s" repeatCount="indefinite" path="M74 122H465"/></circle></g>
          </svg>
          <div className="lab-schematic-overlay"><span><span className="lab-pulse-dot"/> SIGNAL ROUTED</span><span>TRACE {String(cycle+1).padStart(3,"0")}</span></div>
        </div>
        <div className="lab-console-details">
          <div>
            <p className="lab-details-label">ENGINEERING DEMO / {current.number}</p>
            <h3>{current.title}</h3>
            <p className="lab-details-copy">{current.detail}</p>
          </div>
          <div className="lab-mini-metrics">
            {current.metrics.map((m,i)=><span key={m}><b>0{i+1}</b>{m}</span>)}
          </div>
        </div>
      </div>
      <div className="lab-console-bottom">
        <button type="button" onClick={simulate} disabled={running} className="lab-run-btn" aria-label={"Run " + current.label + " conceptual simulation"}>
          {running ? <Activity size={15}/> : <Play size={15}/>} {running ? "Running simulation…" : "Run simulation"}
        </button>
        <a href={current.repository} rel="noopener noreferrer" target="_blank" className="lab-repo-link">{current.label} repository <ArrowUpRight size={15}/></a>
      </div>
      <p className="lab-disclaimer" aria-live="polite">{running ? "Conceptual signal moving through the system…" : cycle > 0 ? current.status + " · Run " + cycle + " complete" : "Illustrative interaction · no live operational data"}</p>
    </section>
  );
}
