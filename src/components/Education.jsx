import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const academicDegrees = [
    {
      degree: 'Master of Science (M.Sc.) in IT',
      institution: 'GLS University',
      location: 'Ahmedabad, Gujarat',
      duration: 'Jul. 2025 – 2027',
      status: 'Ongoing',
      details: 'Relevant Skills: Full-Stack Development, Web Development, Software Engineering.'
    },
    {
      degree: 'Bachelor of Science (B.Sc.) in IT',
      institution: 'Saurashtra University',
      location: 'Rajkot, Gujarat',
      duration: 'Aug. 2022 – Mar. 2025',
      status: 'First Class with Distinction',
      details: 'Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Software Engineering.'
    }
  ];

  const additionalEducation = [
    {
      course: 'Master in Full Stack Web Development',
      academy: 'Creative Design & Multimedia Institute',
      location: 'Surat, Gujarat',
      duration: 'Aug. 2022 – May 2024',
      grade: 'Grade: A+',
      details: 'Completed professional training in Full Stack Web Development with hands-on projects. Covered HTML5, CSS3, JavaScript (ES6+), PHP, React.js, Next.js, Vue.js, Node.js, Express.js, Django, MySQL, MongoDB, Git, GitHub, REST APIs, and Responsive Web Design.'
    },
    {
      course: 'Computer Master Course (CCC, HTML, CSS)',
      academy: 'IACT Education',
      location: 'Surat, Gujarat',
      duration: 'May 2022 – Jul. 2022',
      grade: 'Grade: A',
      details: 'Completed foundational computer training covering MS Office, Internet Fundamentals, HTML, and CSS. Built a strong foundation in computer applications and basic web development technologies.'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-gradient-teal">Education</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            Academic degrees and professional training programs that shaped my engineering foundation.
          </p>
        </div>

        {/* Education Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Column 1: Academic Degrees */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <GraduationCap className="text-accentTeal" size={26} />
              <h3 className="text-2xl font-extrabold text-white">Academic Degrees</h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-3">
              {academicDegrees.map((item, index) => (
                <div key={index} className="relative group animate-fade-in-up">
                  {/* Bullet */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-darkBg border-2 border-accentTeal rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-accentTeal/10 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accentTeal transition-colors">
                          {item.degree}
                        </h4>
                        <p className="text-sm font-semibold text-textSecondary">{item.institution}</p>
                      </div>
                      <span className="px-2.5 py-0.5 bg-accentTeal/10 border border-accentTeal/20 rounded-full text-xs font-semibold text-accentTeal">
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-textSecondary font-medium">
                      <Calendar size={13} className="text-accentTeal" />
                      <span>{item.duration}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full mx-1"></span>
                      <span>{item.location}</span>
                    </div>

                    <p className="text-sm text-textSecondary leading-relaxed pt-2 border-t border-white/5">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Additional Education / Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <BookOpen className="text-accentIndigo" size={26} />
              <h3 className="text-2xl font-extrabold text-white">Professional Training</h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-3">
              {additionalEducation.map((item, index) => (
                <div key={index} className="relative group animate-fade-in-up">
                  {/* Bullet */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-darkBg border-2 border-accentIndigo rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                  
                  <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-accentIndigo/20 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accentIndigo transition-colors">
                          {item.course}
                        </h4>
                        <p className="text-sm font-semibold text-textSecondary">{item.academy}</p>
                      </div>
                      <span className="px-2.5 py-0.5 bg-accentIndigo/15 border border-accentIndigo/30 rounded-full text-xs font-semibold text-accentIndigo">
                        {item.grade}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-textSecondary font-medium">
                      <Calendar size={13} className="text-accentIndigo" />
                      <span>{item.duration}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full mx-1"></span>
                      <span>{item.location}</span>
                    </div>

                    <p className="text-sm text-textSecondary leading-relaxed pt-2 border-t border-white/5">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
