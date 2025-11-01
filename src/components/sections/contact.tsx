import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/timothynn",
    username: "@timothynn",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/timothynn",
    username: "Timothy Nguyen",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/timothynn",
    username: "@timothynn",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@timothynn.com",
    username: "hello@timothynn.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat
          </p>
        </div>

        {/* Social Links */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                className="h-auto p-6 flex items-center justify-start gap-4 hover:bg-accent hover:scale-105 transition-all"
                asChild
              >
                <a
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{social.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {social.username}
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="mailto:hello@timothynn.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
