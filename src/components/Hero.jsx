import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const words = ["Full-Stack Developer", "M.Sc (IT) Student", "MERN Stack Developer", "Web Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(100);

        if (currentText === fullWord) {
          setSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#contact');
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Background Neon Blobs specific to Hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accentIndigo/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-accentTeal/10 dark:bg-accentTeal/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1 animate-fade-in-up">
          <div>
            <span className="text-accentIndigo dark:text-accentTeal font-semibold uppercase tracking-widest text-xs bg-accentIndigo/10 dark:bg-accentTeal/10 px-4 py-1.5 rounded-full border border-accentIndigo/20 dark:border-accentTeal/20 inline-block mb-3">
              Welcome to my portfolio
            </span>
            <h2 className="text-xl md:text-2xl text-slate-500 dark:text-textSecondary font-light">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mt-1 mb-2">
              <span className="text-slate-900 dark:text-white">Janvi</span>{' '}
              <span className="text-gradient-teal text-glow">Kachhadiya</span>
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white h-10 flex items-center">
              I am a&nbsp;
              <span className="text-accentIndigo dark:text-accentTeal typing-caret pr-1">
                {currentText}
              </span>
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            A results-oriented Full Stack Web Developer and M.Sc (IT) student combining robust technical proficiency in modern frameworks (React, Vue, Node.js, PHP, Django) with academic excellence (B.Sc CGPA 9+). Dedicated to building accessible, responsive, and highly interactive user interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accentIndigo to-accentViolet dark:from-accentTeal dark:to-accentIndigo text-white dark:text-darkBg font-bold rounded-full shadow-[0_4px_15px_rgba(79,70,229,0.2)] dark:shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_4px_25px_rgba(79,70,229,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] hover:scale-105 transition-all duration-300 group"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="https://github.com/kachhadiyajanvi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-white border border-slate-200/50 dark:border-white/10 hover:border-accentIndigo/40 dark:hover:border-accentTeal/40 rounded-full transition-all duration-300"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/5 mt-4">
            <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-textSecondary font-semibold">Connect with me:</span>
            <a
              href="https://github.com/kachhadiyajanvi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 hover:bg-accentIndigo/20 hover:text-accentIndigo dark:bg-white/5 dark:hover:bg-accentTeal/20 dark:hover:text-accentTeal text-slate-600 dark:text-textSecondary rounded-full border border-slate-200/50 dark:border-white/5 hover:border-accentIndigo/30 dark:hover:border-accentTeal/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kachhadiyajanvi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 hover:bg-accentIndigo/20 hover:text-accentIndigo dark:bg-white/5 dark:hover:bg-accentTeal/20 dark:hover:text-accentTeal text-slate-600 dark:text-textSecondary rounded-full border border-slate-200/50 dark:border-white/5 hover:border-accentIndigo/30 dark:hover:border-accentTeal/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Glassmorphic Profile Photo */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 animate-fade-in-up delay-200">
          <div className="relative group">
            {/* Ambient background glows behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-accentIndigo to-accentViolet dark:from-accentTeal dark:to-accentIndigo rounded-full opacity-40 dark:opacity-60 group-hover:opacity-80 dark:group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-white dark:bg-darkBg border border-slate-200/50 dark:border-white/10 overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                <img
                  src="janvi.jpg"
                  alt="Janvi Kachhadiya"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            {/* Glowing badge */}
            <div className="absolute -bottom-4 -right-2 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 border border-slate-200/50 dark:border-white/10 shadow-lg animate-pulse-slow">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentIndigo dark:bg-accentTeal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accentIndigo dark:bg-accentTeal"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-white">Open to Work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
