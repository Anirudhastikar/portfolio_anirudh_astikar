import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Check, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import resumePdf from '../assets/resume.pdf';

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail, copied }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'architecture', 'experience', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Case Study', href: '#projects', id: 'projects' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0F1117]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
              : 'bg-[#0F1117]/60 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Brand / Name & Live Status */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-full pr-2"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono font-bold text-xs group-hover:scale-105 transition-transform">
              AA
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-brand-teal transition-colors">
                Anirudh Astikar
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-text-secondary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Senior SWE · AWS & React
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-subtle/80 border border-white/5 px-3 py-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-brand-teal/15 border border-brand-teal/40"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Resume & Copy Email & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onCopyEmail}
              title="Click to copy email address"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-text-secondary bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-all hover:border-white/20 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-brand-teal" />
                  <span className="text-brand-teal">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" />
                  <span>astikaranirudh2000@gmail.com</span>
                </>
              )}
            </button>

            <a
              href={resumePdf}
              download="Anirudh_Astikar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#08090C] bg-brand-teal hover:bg-[#34e2cb] shadow-lg shadow-brand-teal/20 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-text-secondary hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden p-5 rounded-2xl bg-[#0F1117]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">Navigation</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-brand-teal/10 text-brand-teal rounded-full border border-brand-teal/30">
                v3.5 Live
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-brand-teal hover:bg-brand-teal/10 transition-colors"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-brand-teal" />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  onCopyEmail();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs text-text-secondary bg-surface-raised border border-white/10 hover:text-white"
              >
                {copied ? <Check className="w-4 h-4 text-brand-teal" /> : <Mail className="w-4 h-4" />}
                {copied ? 'Email Copied!' : 'Copy Email Address'}
              </button>
              <a
                href={resumePdf}
                download="Anirudh_Astikar_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-background bg-brand-teal hover:bg-brand-teal/90"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
