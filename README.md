# Timothy Nduati — Systems Portfolio

Source for [timothynn.is-a.dev](https://timothynn.is-a.dev), built with Next.js, React and TypeScript, statically exported for GitHub Pages.

## Identity

**Engineering systems where software meets the real world.**

Software engineering across aviation technology, data platforms, financial infrastructure and intelligent tooling.

This is a personal portfolio, not an employer website. It does not represent or disclose proprietary client systems.

## Featured public projects

| Project | Focus |
| --- | --- |
| [Nexus](https://github.com/timothynn/Nexus) | AI harness, model-agnostic tools, worktrees and multi-agent orchestration |
| [Aviation Intelligence](https://github.com/timothynn/aviation-intelligence) | Evidence-grounded aviation AI and document intelligence |
| [Market Data Infrastructure](https://github.com/timothynn/market-data-infra) | Market-data ingestion, normalization and low-latency distribution |
| [Warehouse Neuron](https://github.com/timothynn/warehouse-neuron) | Event-driven inventory software |
| [Trading Pipeline](https://github.com/timothynn/trading-pipeline) | Streaming financial analytics |
| [NixOS Config Manager](https://github.com/timothynn/nixos-config-manager) | Reproducible developer tooling |

No made-up star counts, testimonials, client names or nonfunctional contact forms are included.

## Design system

- Dark-first graphite and muted emerald, with a manual light toggle.
- Responsive layout with typography-led sections, an original SVG system diagram, filterable projects, and collapsible personal notes.
- Accessible navigation, clear focus states and reduced-motion support.
- Self-hosted SVG social card and favicon; no third-party stats badges or tracking pixels.
- The personal **Nex Veyron / Nyx** motif is intentionally subtle. Professional identity comes first.

## Local development

Requires Node.js 20.9+ (Node.js 24 recommended).

\`\`\`bash
npm ci
npm run dev
npm run build
npx tsc --noEmit
\`\`\`

Build output lives in \`out/\`. The Next.js config uses \`output: "export"\` for static hosting.

## Deployment

The website source lives on the \`master\` branch. A GitHub Pages deployment workflow exists in \`.github/workflows/nextjs.yml\`. A second older deployment workflow also exists; it should be consolidated after confirming the repository's current Pages publishing source to avoid conflicting deployments.

The actual mapping for \`timothynn.is-a.dev\` is managed separately. Changing site content does not change DNS.

## Updating projects

Edit the typed \`projects\` array in \`src/pages/index.tsx\`. Keep each description grounded in the linked repository. Only include public personal projects; do not publish private repositories or customer work.

## Contact

- [GitHub](https://github.com/timothynn)
- [LinkedIn](https://www.linkedin.com/in/timothynn/)
- [X](https://x.com/timothynn_)
