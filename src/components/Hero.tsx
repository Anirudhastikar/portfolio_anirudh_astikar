import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Terminal, Cloud, Layers, Check, Copy, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO, HERO_METRICS } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  copied: boolean;
}

const ROLES = [
  "Senior Software Engineer",
  "Full Stack React & AWS Developer",
  "Healthcare Systems Architect",
  "GraphQL & Serverless Engineer"
];

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copied }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-teal/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-brand-amber/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-white/10 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span className="text-text-secondary">Available for Engineering Roles</span>
              <span className="text-white/20">|</span>
              <span className="text-brand-teal font-semibold">Mysore, IN</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-white mb-4">
              Anirudh <br className="hidden sm:inline" />
              <span className="text-gradient">Astikar</span>
            </h1>

            {/* Dynamic Role Ticker */}
            <div className="h-8 sm:h-10 mb-6 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2 font-mono text-sm sm:text-lg md:text-xl font-semibold text-brand-teal"
                >
                  <span className="text-brand-teal/50 font-normal">&gt;</span>
                  <span>{ROLES[roleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Value Proposition Description */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Building resilient, full-stack systems that power live hospital operations. 
              Specialized in <strong className="text-white font-medium">React Native</strong>, <strong className="text-white font-medium">React.js</strong>, <strong className="text-white font-medium">GraphQL</strong>, and <strong className="text-white font-medium">AWS cloud architecture</strong> that dynamically scales under real-time clinical loads.
            </p>

            {/* CTAs Button Group */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#08090C] bg-brand-teal hover:bg-[#34e2cb] shadow-lg shadow-brand-teal/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore HMS Case Study</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-text-primary bg-surface-subtle hover:bg-surface-raised border border-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-text-secondary bg-surface-subtle/70 hover:bg-surface-raised border border-white/10 hover:text-white transition-all active:scale-[0.98]"
              >
                {copied ? <Check className="w-4 h-4 text-brand-teal" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Skills Pills */}
            <div className="flex items-center flex-wrap gap-2 mt-8 pt-6 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider mr-1">Core:</span>
              {['React Native', 'React.js', 'TypeScript', 'GraphQL', 'AWS AppSync', 'AWS Lambda', 'AWS CDK', 'Redis'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-surface-subtle border border-white/5 rounded-md hover:border-brand-teal/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Hero Profile Bento Card with Interactive Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-brand-teal/30 via-white/5 to-white/0 shadow-2xl shadow-black/80">
              <div className="relative rounded-[22px] bg-[#0F1117] border border-white/10 p-6 overflow-hidden">
                
                {/* Subtle gradient shine inside card */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/10 blur-3xl rounded-full pointer-events-none" />

                {/* Profile Photo Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-teal/40 shadow-lg shadow-brand-teal/10 flex-shrink-0 bg-surface-raised">
                    <img
                      src="/IMG_6811.jpg"
                      alt="Anirudh Astikar"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Anirudh Astikar</h3>
                    <p className="text-xs font-mono text-brand-teal font-medium">Senior Software Engineer</p>
                    <p className="text-[11px] text-text-secondary mt-0.5">3.5+ Years Exp · Healthcare Tech</p>
                    <a
                      href="https://urneeds.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-mono text-emerald-400 hover:underline"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>URNEEDS (urneeds.com) ↗</span>
                    </a>
                  </div>
                </div>

                {/* Mini System Status Board */}
                <div className="space-y-2.5 p-3.5 rounded-xl bg-surface-subtle border border-white/5 font-mono text-xs">
                  <div className="flex items-center justify-between text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                      Hospital Ops Status
                    </span>
                    <span className="text-emerald-400 font-semibold">99.99% Live</span>
                  </div>

                  <div className="flex items-center justify-between text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-amber" />
                      AWS Cloud Pipeline
                    </span>
                    <span className="text-text-primary">CDK + Lambda</span>
                  </div>

                  <div className="flex items-center justify-between text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                      Architecture Scale
                    </span>
                    <span className="text-brand-cyan font-semibold">2 → 9 Replicas</span>
                  </div>
                </div>

                {/* Animated Node Graph Visualizer */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2">
                    <span>LIVE DATA PACKET FLOW</span>
                    <span className="text-brand-teal">AppSync ⇄ CDK</span>
                  </div>

                  <div className="h-20 w-full rounded-lg bg-surface-raised/60 border border-white/5 p-2 flex items-center justify-between relative overflow-hidden">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-7 h-7 rounded-lg bg-brand-teal/10 border border-brand-teal/40 flex items-center justify-center text-[10px] font-mono text-brand-teal">
                        RN
                      </div>
                      <span className="text-[9px] font-mono text-text-muted mt-1">Mobile</span>
                    </div>

                    {/* Animated Connection Line */}
                    <div className="flex-1 h-[2px] bg-white/10 relative mx-2">
                      <motion.div
                        animate={{ x: ['0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                        className="w-3 h-[2px] bg-brand-teal shadow-[0_0_8px_#2dd4bf]"
                      />
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-[10px] font-mono text-brand-cyan">
                        GQL
                      </div>
                      <span className="text-[9px] font-mono text-text-muted mt-1">AppSync</span>
                    </div>

                    {/* Animated Connection Line */}
                    <div className="flex-1 h-[2px] bg-white/10 relative mx-2">
                      <motion.div
                        animate={{ x: ['0%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.8, ease: 'linear' }}
                        className="w-3 h-[2px] bg-brand-amber shadow-[0_0_8px_#f59e0b]"
                      />
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center z-10">
                      <div className="w-7 h-7 rounded-lg bg-brand-amber/10 border border-brand-amber/40 flex items-center justify-center text-[10px] font-mono text-brand-amber">
                        AWS
                      </div>
                      <span className="text-[9px] font-mono text-text-muted mt-1">Lambda</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tag inside card */}
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>URNEEDS Hospital System</span>
                  <a
                    href="#projects"
                    className="text-brand-teal hover:underline inline-flex items-center gap-1"
                  >
                    View Specs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Bottom: Bento Metric Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/10"
        >
          {HERO_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-surface-subtle/70 border border-white/5 hover:border-brand-teal/30 hover:bg-surface-raised transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-brand-teal transition-colors mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-text-muted font-mono leading-relaxed">
                {metric.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
