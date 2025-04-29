import Hero from "./components/hero";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="scrool-smooth">
      <Navbar /> 
      <Hero />
      <Experience />
      <Skills />  
      <Projects />
      <ContactForm/>
      <Footer />
    </div>
  );
}

