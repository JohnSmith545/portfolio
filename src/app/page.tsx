import { Nav } from "@/components/Nav"; // Sticky top navigation
import { Hero } from "@/components/Hero"; // Name, pitch and stats
import { Highlights } from "@/components/Highlights"; // AI feature overview
import { Projects } from "@/components/Projects"; // Project cards and Reviva case study
import { HowIWork } from "@/components/HowIWork"; // Client communication and delivery
import { Skills } from "@/components/Skills"; // Grouped skills
import { Certifications } from "@/components/Certifications"; // Certificates
import { Experience } from "@/components/Experience"; // Timeline
import { Contact } from "@/components/Contact"; // Contact links and footer

// Single-page portfolio
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Projects />
        <HowIWork />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
