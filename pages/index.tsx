import Main from "../components/Main";
import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tim | Data Scientist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
