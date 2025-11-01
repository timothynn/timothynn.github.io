import Head from "next/head";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Nguyen - Full-Stack Developer & Designer</title>
        <meta
          name="description"
          content="Portfolio of Timothy Nguyen, a full-stack developer and designer crafting elegant digital experiences through clean code and thoughtful design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timothynn.github.io/" />
        <meta
          property="og:title"
          content="Timothy Nguyen - Full-Stack Developer & Designer"
        />
        <meta
          property="og:description"
          content="Portfolio of Timothy Nguyen, a full-stack developer and designer crafting elegant digital experiences."
        />
        <meta
          property="og:image"
          content="https://timothynn.github.io/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://timothynn.github.io/" />
        <meta
          property="twitter:title"
          content="Timothy Nguyen - Full-Stack Developer & Designer"
        />
        <meta
          property="twitter:description"
          content="Portfolio of Timothy Nguyen, a full-stack developer and designer crafting elegant digital experiences."
        />
        <meta
          property="twitter:image"
          content="https://timothynn.github.io/og-image.jpg"
        />
      </Head>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
