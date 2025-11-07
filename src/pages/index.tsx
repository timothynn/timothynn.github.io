import Head from "next/head";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Nduati - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Timothy Nduati, a developer, educator & lifelong learner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timothynn.github.io/" />
        <meta property="og:title" content="Timothy Nduati - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Timothy Nduati, a developer, educator & lifelong learner."
        />
        <meta
          property="og:image"
          content="https://timothynn.github.io/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://timothynn.github.io/" />
        <meta property="twitter:title" content="Timothy Nduati - Portfolio" />
        <meta
          property="twitter:description"
          content="Portfolio of Timothy Nduati, a developer, educator & lifelong learner."
        />
        <meta
          property="twitter:image"
          content="https://timothynn.github.io/og-image.jpg"
        />
      </Head>

      <div>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
