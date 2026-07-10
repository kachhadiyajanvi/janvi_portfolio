import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling changes on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for highlight
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for navbar height
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // Navbar height offset
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-darkBg/80 backdrop-blur-md border-b border-white/5' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')} 
          className="text-2xl font-bold tracking-tight text-glow flex items-center gap-1 group"
        >
          <span className="text-accentTeal group-hover:text-accentViolet transition-colors duration-300">Janvi</span>
          <span className="text-white font-light group-hover:text-accentTeal transition-colors duration-300">K.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-accentTeal ${
                  activeSection === link.href.substring(1) 
                    ? 'text-accentTeal border-b-2 border-accentTeal pb-1' 
                    : 'text-textSecondary'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2 text-sm font-semibold rounded-full border border-accentTeal/50 text-accentTeal bg-accentTeal/5 hover:bg-accentTeal hover:text-darkBg shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-accentTeal p-2 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-xs bg-darkBg/95 backdrop-blur-xl border-l border-white/5 flex flex-col justify-center p-8 z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-textSecondary hover:text-accentTeal transition-colors"
        >
          <X size={26} />
        </button>

        <ul className="flex flex-col gap-6 text-left my-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-xl font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-accentTeal ${
                  activeSection === link.href.substring(1) 
                    ? 'text-accentTeal' 
                    : 'text-textSecondary'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="block text-center py-3 text-lg font-semibold rounded-full border border-accentTeal text-accentTeal bg-accentTeal/5 hover:bg-accentTeal hover:text-darkBg transition-all duration-300 w-full mt-8"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
