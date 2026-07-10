import React, { useState } from 'react';
import { LayoutTemplate, Database, Terminal, Code2, Cloud, Settings, Brain } from 'lucide-react';

// Official, highly attractive Devicon SVGs for instantly recognizable language & tool icons
const skillLogos = {
  'React.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 animate-[spin_15s_linear_infinite]" />,
  'Next.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-5 h-5 dark:invert" />,
  'Vue.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-5 h-5" />,
  'Tailwind CSS': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-5 h-5" />,
  'JavaScript': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 rounded-sm" />,
  'JavaScript (ES6+)': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 rounded-sm" />,
  'Bootstrap': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-5 h-5" />,
  'HTML5 & CSS3': (
    <div className="flex gap-1 items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-4 h-4" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-4 h-4" />
    </div>
  ),
  'Node.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5" />,
  'Express.js': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-5 h-5 dark:invert" />,
  'Django': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-5 h-5 dark:invert" />,
  'PHP': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-5 h-5" />,
  'MongoDB': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5" />,
  'MySQL': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-5 h-5" />,
  'Python': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />,
  'C / C++': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-5 h-5" />,
  'AWS (Basics)': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-6 h-6 dark:invert" />,
  'Amazon S3': <div className="w-5 h-5 bg-[#E05243] text-white rounded flex items-center justify-center font-bold text-[8px] select-none">S3</div>,
  'Vercel': (
    <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2z"/>
    </svg>
  ),
  'Render': (
    <div className="w-5 h-5 bg-[#46E3C3] text-black rounded flex items-center justify-center font-extrabold text-[8px] select-none">
      R
    </div>
  ),
  'Git & GitHub': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5" />,
  'VS Code': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5" />,
  'Postman': (
    <div className="w-5 h-5 bg-[#FF6C37] text-white rounded flex items-center justify-center font-black text-[7px] select-none">
      POST
    </div>
  ),
  'Figma (UI/UX)': <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-4 h-5" />,
  'npm / Vite': (
    <div className="flex gap-1 items-center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" className="w-5 h-5" />
    </div>
  )
};

const defaultSkillIcon = <Code2 size={18} className="text-purple-600 dark:text-accentTeal" />;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = [
    {
      id: 'Frontend',
      label: 'Frontend Development',
      icon: <LayoutTemplate size={20} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive Web Design', level: 95 },
      ]
    },
    {
      id: 'Backend',
      label: 'Backend & APIs',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 82 },
        { name: 'Django', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'REST API Development', level: 90 },
      ]
    },
    {
      id: 'Databases',
      label: 'Databases',
      icon: <Database size={20} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 88 },
        { name: 'SQL Query Optimization', level: 82 },
      ]
    },
    {
      id: 'Languages',
      label: 'Languages Known',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'PHP', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'C / C++', level: 70 },
      ]
    },
    {
      id: 'Cloud',
      label: 'Cloud & DevOps',
      icon: <Cloud size={20} />,
      skills: [
        { name: 'AWS (Basics)', level: 65 },
        { name: 'Amazon S3', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'Render', level: 80 },
      ]
    },
    {
      id: 'Tools',
      label: 'Tools & Platforms',
      icon: <Settings size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Figma (UI/UX)', level: 80 },
        { name: 'npm / Vite', level: 88 },
      ]
    },
    {
      id: 'Concepts',
      label: 'Core Concepts',
      icon: <Brain size={20} />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'Object-Oriented Programming (OOP)', level: 85 },
        { name: 'MVC Architecture', level: 85 },
        { name: 'System Design', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical & <span className="text-gradient-teal">Coding Skills</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 dark:bg-accentTeal rounded-full mt-3"></div>
          <p className="text-slate-650 dark:text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            A comprehensive outlook on technologies, programming languages, and tools I use to design and deploy software.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category Selection Panel */}
          <div className="lg:col-span-4 space-y-3">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border text-left font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/5 dark:from-accentTeal/15 dark:to-accentIndigo/5 border-purple-500 dark:border-accentTeal text-purple-700 dark:text-white shadow-sm dark:shadow-[0_0_15px_rgba(0,245,255,0.08)]'
                    : 'bg-white/0 border-slate-200/50 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-150/50 dark:hover:bg-white/5 text-slate-700 dark:text-textSecondary hover:text-slate-900 hover:bg-slate-100/30 dark:hover:text-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={activeCategory === category.id ? 'text-purple-600 dark:text-accentTeal' : 'text-slate-500 dark:text-textSecondary'}>
                    {category.icon}
                  </span>
                  <span>{category.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Skills Render */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-3xl min-h-[400px]">
            {skillCategories.map((category) => {
              if (category.id !== activeCategory) return null;
              
              return (
                <div key={category.id} className="space-y-8 animate-fade-in-up">
                  <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-white/5 pb-4">
                    <span className="text-purple-600 dark:text-accentTeal">{category.icon}</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.label}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-3 p-4 bg-white/50 dark:bg-white/[0.01] rounded-2xl border border-slate-200/40 dark:border-white/[0.03] hover:border-purple-500/10 dark:hover:border-accentTeal/10 transition-all duration-300">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl border border-slate-200/50 dark:border-white/5 shadow-sm overflow-hidden flex-shrink-0">
                              {skillLogos[skill.name] || defaultSkillIcon}
                            </div>
                            <span className="font-bold text-slate-900 dark:text-white/90 text-sm md:text-base">{skill.name}</span>
                          </div>
                          <span className="text-xs font-bold text-purple-600 dark:text-accentTeal">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-slate-200/60 dark:bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accentTeal dark:to-accentIndigo rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
