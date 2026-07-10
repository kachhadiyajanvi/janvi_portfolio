import React, { useState } from 'react';
import { Phone, Mail, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto hide success banner after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-gradient-teal">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accentTeal rounded-full mt-3"></div>
          <p className="text-textSecondary mt-4 max-w-xl text-sm md:text-base">
            Feel free to contact me for career opportunities, freelance jobs, or projects.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Let's discuss something great</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed">
                I am open to discussing full-time engineering roles, remote consulting, or academic research collaborations. Send a message or call directly!
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-accentTeal/20 transition-all duration-300">
                <div className="p-3 bg-accentTeal/10 rounded-xl text-accentTeal">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-textSecondary font-semibold">Call Me</span>
                  <p className="text-sm font-semibold text-white mt-0.5">+91 76005 86113</p>
                  <p className="text-xs text-textSecondary font-medium">+91 99794 82180</p>
                </div>
              </div>

              {/* Email */}
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-accentTeal/20 transition-all duration-300">
                <div className="p-3 bg-accentIndigo/10 rounded-xl text-accentIndigo">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-textSecondary font-semibold">Email Me</span>
                  <a href="mailto:janvikachhadiya1@gmail.com" className="text-sm font-semibold text-white hover:text-accentTeal transition-colors block mt-0.5">
                    janvikachhadiya1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <span className="text-xs uppercase text-textSecondary font-bold tracking-wider">Social Handles</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kachhadiyajanvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 hover:border-accentTeal/20 text-white rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  <Github size={16} className="text-accentTeal" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/kachhadiyajanvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 hover:border-accentTeal/20 text-white rounded-xl transition-all duration-300 text-sm font-medium"
                >
                  <Linkedin size={16} className="text-accentIndigo" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Contact Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl relative">
            
            {/* Success Alert Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-darkBg/95 backdrop-blur-sm z-20 rounded-3xl flex flex-col items-center justify-center p-8 text-center space-y-4 animate-fade-in-up">
                <CheckCircle size={56} className="text-accentTeal animate-bounce" />
                <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-textSecondary max-w-xs leading-relaxed">
                  Thank you for reaching out. I have received your email and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-darkBg bg-accentTeal hover:bg-white rounded-full transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label htmlFor="name" className="text-xs uppercase text-textSecondary font-semibold tracking-wider block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs uppercase text-textSecondary font-semibold tracking-wider block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase text-textSecondary font-semibold tracking-wider block mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Hey Janvi, let's collaborate on a project!"
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accentTeal to-accentIndigo text-darkBg font-bold text-sm md:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-darkBg border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
