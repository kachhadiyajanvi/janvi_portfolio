import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accentTeal/30 selection:text-white">
      
      {/* Background Animated Neon Blobs (Global) */}
      <div className="bg-blob blob-teal"></div>
      <div className="bg-blob blob-purple"></div>
      <div className="bg-blob blob-indigo"></div>

      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Content */}
      <Footer />
      
    </div>
  );
}
