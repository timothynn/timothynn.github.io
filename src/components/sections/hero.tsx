"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
        {/* Headshot */}
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
          <Image
            src="/headshot.jpg"
            alt="Profile picture"
            width={160}
            height={160}
            className="relative rounded-full ring-4 ring-border shadow-2xl object-cover"
            priority
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text">
            Timothy Nguyen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Full-Stack Developer & Designer
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Crafting elegant digital experiences through clean code and thoughtful
          design. Passionate about building products that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
