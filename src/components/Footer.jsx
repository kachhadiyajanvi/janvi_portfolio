import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-darkBg border-t border-white/5 py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand/Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm text-textSecondary">
            &copy; {currentYear} <span className="text-white font-semibold">Janvi Kachhadiya</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed & Developed in React & Tailwind CSS
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/kachhadiyajanvi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-accentTeal/20 hover:text-accentTeal text-textSecondary rounded-full border border-white/5 hover:border-accentTeal/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/kachhadiyajanvi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-accentTeal/20 hover:text-accentTeal text-textSecondary rounded-full border border-white/5 hover:border-accentTeal/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-white/5 hover:bg-accentTeal border border-white/5 hover:border-accentTeal hover:text-darkBg text-textSecondary rounded-full transition-all duration-300 shadow-md group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>

      </div>
    </footer>
  );
}
