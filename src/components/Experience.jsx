import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Vue.js & JavaScript Developer',
      company: 'Loggix',
      type: 'Remote Freelance',
      duration: 'Feb. 2025 – May 2025',
      location: 'Netherlands (Remote)',
      description: [
        'Developed dynamic and responsive user interfaces using Vue.js, JavaScript, HTML, CSS, and Tailwind.',
        'Implemented new frontend features and optimized existing components to improve usability and performance.',
        'Collaborated remotely with an international development team, ensuring timely delivery of project milestones.',
        'Integrated RESTful APIs, fixed visual and functional UI issues, and maintained clean, reusable, and scalable code.'
      ],
      skills: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'API Integration', 'Git']
    },
    {
      role: 'Frontend Web Developer',
      company: 'Wilysion Technology',
      type: 'Full-time',
      duration: 'May 2024 – July 2025',
      location: 'Surat, Gujarat, India',
      description: [
        'Developed and maintained responsive web applications using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, and PHP.',
        'Collaborated with designers and backend developers to deliver scalable, user-friendly, and high-performance websites.',
        'Built reusable UI components and optimized website assets, improving page load speeds and search engine indices.',
        'Integrated REST APIs, resolved complex frontend bugs, and ensured cross-browser compatibility across multiple client projects.',
        'Leveraged Git/GitHub for version control and actively participated in Agile/Scrum sprint ceremonies throughout 1.3 years of professional experience.'
      ],
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'PHP', 'REST APIs', 'Agile/Scrum']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Work <span className="text-gradient-teal">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            A chronological timeline detailing my professional journey, contributions, and hands-on corporate engineering roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-6 ml-2 md:ml-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0 relative animate-fade-in-up">
              
              {/* Chronological Circle Indicator */}
              <div className="absolute -left-[35px] top-1.5 p-2 bg-darkBg border-2 border-accentTeal rounded-full text-accentTeal z-10">
                <Briefcase size={16} />
              </div>

              {/* Glass Card Container */}
              <div className="glass-panel p-8 rounded-3xl space-y-4 hover:border-accentTeal/20 transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accentTeal transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-accentTeal mt-1">
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <span className="px-2.5 py-0.5 bg-accentTeal/10 rounded-full border border-accentTeal/20 text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Dates & Locations */}
                  <div className="text-xs md:text-sm text-textSecondary flex flex-col md:items-end gap-1.5 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accentTeal" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accentIndigo" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Job Bullet Points */}
                <ul className="list-disc pl-5 space-y-2 text-textSecondary text-sm md:text-base leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-white transition-colors duration-200">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Skills Utilized */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/5 hover:border-accentTeal/20 rounded-full text-xs text-textSecondary hover:text-white transition-colors"
                    >
                      {skill}
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
