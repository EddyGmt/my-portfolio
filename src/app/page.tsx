import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="scrool-smooth">
      {/*  <Navbar /> */}
      <Hero />
      <Experience />
      <Skills />  
      <Projects />
    </div>
  );
}

