import React from 'react';
import { Cloud, PenTool, Award, Trophy, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS S3 for Web Hosting and Automation',
      issuer: 'GLS University',
      date: 'Mar. 2026',
      icon: <Cloud className="text-accentTeal" size={24} />,
      details: 'Completed a hands-on workshop on Amazon S3, static website hosting, and web automation using AWS cloud services.'
    },
    {
      title: 'Introduction to Figma',
      issuer: 'Figma',
      date: 'Jan. 2026',
      icon: <PenTool className="text-accentIndigo" size={24} />,
      details: 'Learned UI/UX fundamentals, wireframing, prototyping, component design, and collaborative interface development.'
    },
    {
      title: 'GLS Hackathon 2025',
      issuer: 'GLS University',
      date: '2025',
      icon: <Award className="text-accentViolet" size={24} />,
      details: 'Participated in a university-level hackathon, collaborating on innovative software solutions under tight time constraints.'
    },
    {
      title: 'Code Wars Coding Competition',
      issuer: 'Creative Design & Multimedia Institute',
      date: 'Nov. 2023',
      icon: <Trophy className="text-accentPink" size={24} />,
      details: 'Participated in a competitive programming contest demonstrating complex algorithmic problem-solving and clean coding skills.'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative bg-darkBg/50">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Honors & <span className="text-gradient-teal">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            Professional certifications, hackathons, and achievements verifying technical capacity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-4 text-left group"
            >
              <div className="space-y-3">
                {/* Icon & Date Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    {cert.icon}
                  </div>
                  <span className="text-xs font-semibold text-textSecondary">{cert.date}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accentTeal transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-accentIndigo mt-1">{cert.issuer}</p>
                </div>

                <p className="text-xs md:text-sm text-textSecondary leading-relaxed pt-2 border-t border-white/5">
                  {cert.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
