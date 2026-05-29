import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Leadership from "../components/Leadership";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import CursorEffect from "../components/CursorEffect";
import NeuralBackground from "../components/NeuralBackground";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {

  return (

    <main
      className="
      bg-transparent
      text-white
      relative
      overflow-hidden
      min-h-screen
      "
    >

      <ScrollProgress/>

      <CursorEffect/>

      <NeuralBackground/>

      <Navbar/>

      <Hero/>

      <About/>

      <Skills/>

      <Experience/>

      <Projects/>

      <Leadership/>

      <Certifications/>

      <Contact/>

      <Footer/>

    </main>

  );

}