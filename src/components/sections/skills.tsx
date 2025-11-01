import { Badge } from "@/components/ui/badge";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
    "HTML/CSS",
  ],
  Backend: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
  ],
  "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Agile/Scrum",
    "Technical Writing",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
