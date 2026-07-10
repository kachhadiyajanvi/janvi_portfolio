import React from 'react';
import { ExternalLink, Github, Trophy, Home, UserCheck, Sprout } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-GAMESCOUT',
      subtitle: 'eSports Scouting Platform',
      icon: <Trophy className="text-accentTeal" size={24} />,
      bgGradient: 'from-[#00F5FF]/20 to-[#4F46E5]/20',
      tags: ['Django', 'Python', 'MySQL', 'Tailwind CSS', 'REST API'],
      bullets: [
        'Developed a full-stack eSports scouting platform connecting players, organizations, and tournament organizers.',
        'Implemented secure authentication, role-based dashboards, tournament management, and player profile modules.',
        'Designed MySQL database schema and integrated REST APIs for efficient data management.',
        'Built responsive interfaces and optimized application performance for an enhanced user experience.'
      ],
      github: 'https://github.com/kachhadiyajanvi',
    },
    {
      title: 'FarmStayHub',
      subtitle: 'Booking Platform',
      icon: <Home className="text-accentIndigo" size={24} />,
      bgGradient: 'from-[#4F46E5]/20 to-[#8B5CF6]/20',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      bullets: [
        'Developed a full-stack farm stay booking platform with secure user authentication and booking management.',
        'Designed responsive UI components to provide a seamless user experience across all devices.',
        'Integrated real-time database queries to display availability and handle dynamic booking schedules.'
      ],
      github: 'https://github.com/kachhadiyajanvi',
    },
    {
      title: 'GLS FDP Portal',
      subtitle: 'Faculty Development Program Portal',
      icon: <UserCheck className="text-accentViolet" size={24} />,
      bgGradient: 'from-[#8B5CF6]/20 to-[#EC4899]/20',
      tags: ['PHP', 'HTML5', 'CSS3', 'Tailwind CSS'],
      bullets: [
        'Built a Faculty Development Program portal for managing registrations, events, and participant information.',
        'Focused on responsive design, performance optimization, and intuitive user experience.',
        'Created secure administration panels for program coordinators to review registrations and verify attendance.'
      ],
      github: 'https://github.com/kachhadiyajanvi',
    },
    {
      title: 'DFarm React Template',
      subtitle: 'Agriculture Frontend Template',
      icon: <Sprout className="text-accentPink" size={24} />,
      bgGradient: 'from-[#EC4899]/20 to-[#00F5FF]/20',
      tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
      bullets: [
        'Created a reusable React frontend template for agriculture-related web applications.',
        'Designed responsive layouts using Tailwind CSS with reusable UI components.',
        'Optimized component architecture for scalability and maintainability, ensuring modular code structure.'
      ],
      github: 'https://github.com/kachhadiyajanvi',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-darkBg/30">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-gradient-teal">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            A showcase of selected academic and full-stack software applications I have built, ranging from eSports platforms to templates.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-3xl overflow-hidden hover:border-accentTeal/20 transition-all duration-300 flex flex-col group"
            >
              
              {/* Project Card Header Visual */}
              <div className={`h-32 bg-gradient-to-br ${project.bgGradient} flex items-center justify-between px-8 relative overflow-hidden border-b border-white/5`}>
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full blur-lg group-hover:scale-150 transition-all duration-500"></div>
                <div className="flex items-center gap-4 z-10">
                  <div className="p-3 bg-darkBg/60 rounded-2xl border border-white/10">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-xs text-textSecondary font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Quick Link Buttons in Header */}
                <div className="flex gap-2 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-darkBg/60 hover:bg-accentTeal text-white hover:text-darkBg rounded-full border border-white/10 transition-all duration-300"
                    aria-label="GitHub Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                
                {/* Bullets */}
                <ul className="list-disc pl-5 space-y-2 text-textSecondary text-sm md:text-base leading-relaxed flex-grow">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-white transition-colors duration-200">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-semibold text-accentTeal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
