import React from 'react';
import { Phone, Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const contactCards = [
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/kachhadiyajanvi',
      link: 'https://linkedin.com/in/kachhadiyajanvi',
      description: 'Connect professionally and check my network.',
      icon: <Linkedin size={28} />,
      colorClass: 'text-[#0077B5]',
      bgClass: 'bg-[#0077B5]/5 hover:bg-[#0077B5]/10 border-[#0077B5]/20 hover:border-[#0077B5]/50 hover:shadow-[#0077B5]/10',
      actionText: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      value: 'github.com/kachhadiyajanvi',
      link: 'https://github.com/kachhadiyajanvi',
      description: 'Explore my project repositories and contributions.',
      icon: <Github size={28} />,
      colorClass: 'text-slate-800 dark:text-white',
      bgClass: 'bg-slate-500/5 hover:bg-slate-500/10 border-slate-500/20 hover:border-slate-800/40 dark:hover:border-white/40 hover:shadow-slate-500/10',
      actionText: 'View Github Profile'
    },
    {
      name: 'Email',
      value: 'janvikachhadiya1@gmail.com',
      link: 'mailto:janvikachhadiya1@gmail.com',
      description: 'Drop an email for queries or opportunities.',
      icon: <Mail size={28} />,
      colorClass: 'text-[#EA4335]',
      bgClass: 'bg-[#EA4335]/5 hover:bg-[#EA4335]/10 border-[#EA4335]/20 hover:border-[#EA4335]/50 hover:shadow-[#EA4335]/10',
      actionText: 'Send Email'
    },
    {
      name: 'Phone / Call',
      value: '+91 76005 86113',
      link: 'tel:+917600586113',
      description: 'Call or WhatsApp directly for instant talks.',
      icon: <Phone size={28} />,
      colorClass: 'text-accentIndigo dark:text-accentTeal',
      bgClass: 'bg-accentIndigo/5 dark:bg-accentTeal/5 hover:bg-accentIndigo/10 dark:hover:bg-accentTeal/10 border-accentIndigo/20 dark:border-accentTeal/20 hover:border-accentIndigo/50 dark:hover:border-accentTeal/50 hover:shadow-accentIndigo/10 dark:hover:shadow-accentTeal/10',
      actionText: 'Call Now'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-gradient-teal">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accentIndigo dark:bg-accentTeal rounded-full mt-3"></div>
          <p className="text-slate-500 dark:text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            I am always open to discussing new opportunities, freelance web projects, or collaborative work. Let's connect!
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 shadow-md ${card.bgClass} group`}
            >
              <div className="space-y-4">
                {/* Icon Header */}
                <div className={`p-4 w-fit bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 ${card.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                {/* Information */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-accentIndigo dark:group-hover:text-accentTeal transition-colors">
                    {card.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-textSecondary mt-1 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action and Address details */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                <p className="text-xs font-mono text-slate-400 dark:text-textSecondary truncate">{card.value}</p>
                {card.name === 'Phone / Call' && (
                  <p className="text-xs font-mono text-slate-400 dark:text-textSecondary truncate">+91 99794 82180</p>
                )}
                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accentIndigo dark:text-accentTeal">
                  <span>{card.actionText}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
