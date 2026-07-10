import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
      const offset = 80;
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
        ? 'py-3 bg-white/80 dark:bg-darkBg/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5 shadow-md shadow-slate-100/10 dark:shadow-none' 
        : 'py-5 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')} 
          className="text-2xl font-bold tracking-tight text-glow flex items-center gap-1 group"
        >
          <span className="text-accentIndigo dark:text-accentTeal group-hover:text-pink-500 transition-colors duration-300">Janvi</span>
          <span className="text-slate-800 dark:text-white font-light group-hover:text-accentIndigo dark:group-hover:text-accentTeal transition-colors duration-300">K.</span>
        </a>

        {/* Desktop Links & Controls */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-accentIndigo dark:text-accentTeal border-b-2 border-accentIndigo dark:border-accentTeal pb-1' 
                      : 'text-slate-500 dark:text-textSecondary hover:text-accentIndigo dark:hover:text-accentTeal'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-white rounded-full border border-slate-200/50 dark:border-white/5 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border border-accentIndigo/30 dark:border-accentTeal/50 text-accentIndigo dark:text-accentTeal bg-accentIndigo/5 dark:bg-accentTeal/5 hover:bg-accentIndigo hover:text-white dark:hover:bg-accentTeal dark:hover:text-darkBg transition-all duration-300 shadow-[0_4px_15px_rgba(79,70,229,0.08)] dark:shadow-[0_0_15px_rgba(0,245,255,0.1)]"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white rounded-full border border-slate-200/50 dark:border-white/5 transition-colors mr-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-white hover:text-accentIndigo dark:hover:text-accentTeal p-2 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Drawer) */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[80vw] bg-white/95 dark:bg-darkBg/95 backdrop-blur-xl border-l border-slate-200/50 dark:border-white/5 flex flex-col justify-between p-8 z-40 lg:hidden shadow-2xl transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center border-b border-slate-100 dark:border-white/5 pb-4">
          <span className="font-bold text-accentIndigo dark:text-accentTeal">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-slate-900 dark:text-textSecondary dark:hover:text-accentTeal transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-left my-6 flex-grow justify-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-lg font-bold tracking-wide uppercase transition-colors duration-300 block py-1 border-b border-transparent ${
                  activeSection === link.href.substring(1) 
                    ? 'text-accentIndigo dark:text-accentTeal border-accentIndigo/20 dark:border-accentTeal/20' 
                    : 'text-slate-600 dark:text-textSecondary hover:text-accentIndigo dark:hover:text-accentTeal'
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
          className="block text-center py-3.5 text-sm font-bold uppercase tracking-wider rounded-xl border border-accentIndigo dark:border-accentTeal text-accentIndigo dark:text-accentTeal bg-accentIndigo/5 dark:bg-accentTeal/5 hover:bg-accentIndigo dark:hover:bg-accentTeal hover:text-white dark:hover:text-darkBg transition-all duration-300 w-full"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
