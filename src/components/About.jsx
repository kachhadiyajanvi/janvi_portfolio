import React from 'react';
import { Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'CGPA (B.Sc)', value: '9+', icon: <GraduationCap className="text-accentTeal" size={24} /> },
    { label: 'Professional Exp.', value: '1.3 Yrs', icon: <Briefcase className="text-accentIndigo" size={24} /> },
    { label: 'Projects Completed', value: '10+', icon: <BookOpen className="text-accentViolet" size={24} /> },
    { label: 'Certifications', value: '4+', icon: <Award className="text-accentPink" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-gradient-teal">Me</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            Get to know my professional journey, academic qualifications, and driving motivations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Bridging Creative Coding and Engineering Principles
            </h3>
            
            <div className="space-y-4 text-textSecondary leading-relaxed text-base md:text-lg">
              <p>
                I am a passionate <strong className="text-white">Full-Stack Web Developer</strong> and currently pursuing my <strong className="text-white">Master of Science (M.Sc.) in Information Technology</strong> at GLS University.
              </p>
              <p>
                Having graduated with a <strong className="text-white">First Class with Distinction (B.Sc IT, CGPA 9+)</strong> from Saurashtra University, I've successfully merged academic theory with practical application during my 1.3 years of experience as a Frontend Developer.
              </p>
              <p>
                My expertise spans the entire development lifecycle—from design workflows in Figma to responsive frontend implementations (React, Next.js, Vue) and robust backend management (Node.js, PHP, Django). I thrive on creating pixel-perfect, highly responsive interfaces that load fast and provide an exceptional user journey.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <span className="text-xs uppercase text-textSecondary font-semibold">Current Location</span>
                <p className="text-white font-medium">Surat, Gujarat, India</p>
              </div>
              <div>
                <span className="text-xs uppercase text-textSecondary font-semibold">Academic Status</span>
                <p className="text-white font-medium">M.Sc (IT) Candidate (2025 - 2027)</p>
              </div>
            </div>
          </div>

          {/* Right Block - Interactive Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-accentTeal transition-colors duration-300">
                  {stat.value}
                </h4>
                <p className="text-xs md:text-sm text-textSecondary font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
