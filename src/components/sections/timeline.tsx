import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    organization: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    organization: "Startup XYZ",
    period: "2020 - 2022",
    description:
      "Built and shipped multiple features for B2B SaaS platform, improved performance by 40%, and implemented CI/CD pipelines.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University Name",
    period: "2016 - 2020",
    description:
      "Graduated with honors. Focus on software engineering, algorithms, and web development.",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Digital Agency",
    period: "2019 - 2020",
    description:
      "Developed responsive websites for clients using React and modern CSS. Collaborated with designers and backend teams.",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="p-3 rounded-full bg-background border-2 border-primary shadow-lg">
                    {item.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-primary" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="glass rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-sm text-primary font-semibold mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
