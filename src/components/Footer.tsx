import React from 'react';
import { ArrowUp, Mail, Linkedin, Download, GraduationCap, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative bg-[#08090C] text-text-secondary text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center font-bold text-brand-teal text-xs">
              AA
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Anirudh Astikar
              </div>
              <div className="text-[11px] text-text-muted">
                Senior Software Engineer · Mysore, IN
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-brand-teal transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              download="Anirudh_Astikar_Resume.pdf"
              className="hover:text-brand-amber transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-surface-subtle border border-white/10 hover:border-brand-teal/40 hover:text-white transition-all ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Education & Built With Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-text-muted">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-teal" />
            <span>
              {PERSONAL_INFO.education.degree} — <span className="text-text-secondary">{PERSONAL_INFO.education.institution}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-white font-medium">React, Vite & Tailwind CSS</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()} Anirudh Astikar</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
