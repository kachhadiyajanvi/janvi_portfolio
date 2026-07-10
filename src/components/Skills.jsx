import React, { useState } from 'react';
import { Code2, LayoutTemplate, Database, Terminal, Cloud, Settings, Brain } from 'lucide-react';

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
      label: 'Languages',
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
    <section id="skills" className="py-24 px-6 relative bg-darkBg/50">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Technical <span className="text-gradient-teal">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            A comprehensive outlook on technologies, tools, and methodologies I leverage to design and deploy software solutions.
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
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border text-left font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-accentTeal/15 to-accentIndigo/5 border-accentTeal text-white shadow-[0_0_15px_rgba(0,245,255,0.08)]'
                    : 'bg-white/0 border-white/5 hover:border-white/10 hover:bg-white/5 text-textSecondary hover:text-white'
                }`}
              >
                <span className={activeCategory === category.id ? 'text-accentTeal' : 'text-textSecondary'}>
                  {category.icon}
                </span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Detailed Skills Render */}
          <div className="lg:col-span-8 glass-panel p-8 rounded-3xl min-h-[400px]">
            {skillCategories.map((category) => {
              if (category.id !== activeCategory) return null;
              
              return (
                <div key={category.id} className="space-y-8 animate-fade-in-up">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <span className="text-accentTeal">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white">{category.label}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white/90 text-sm md:text-base">{skill.name}</span>
                          <span className="text-xs font-bold text-accentTeal">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-accentTeal to-accentIndigo rounded-full transition-all duration-1000 ease-out"
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
