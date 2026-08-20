import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('sde-2');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            3.5+ years of shipping enterprise healthcare workflows, real-time cloud architectures, and scalable microservices.
          </p>
        </div>

        {/* Timeline Bento Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  exp.isCurrent
                    ? 'bg-[#0F1117] border-brand-teal/30 shadow-xl shadow-brand-teal/5'
                    : 'bg-[#0F1117]/80 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Summary */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl flex-shrink-0 ${
                      exp.isCurrent
                        ? 'bg-brand-teal/10 border border-brand-teal/40 text-brand-teal'
                        : 'bg-white/5 border border-white/10 text-text-secondary'
                    }`}>
                      <Building2 className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Present
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-text-secondary mt-1.5 flex-wrap">
                        <a
                          href="https://urneeds.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-white font-medium hover:text-brand-teal underline decoration-brand-teal/40 transition-colors"
                        >
                          {exp.company} (urneeds.com ↗)
                        </a>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-text-muted" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-brand-teal">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                    {/* Key Metric Badge */}
                    <div className="px-3.5 py-1.5 rounded-xl bg-surface-subtle border border-white/10 font-mono text-xs text-brand-amber font-medium">
                      ⚡ {exp.keyMetric}
                    </div>

                    <button
                      className="p-2 rounded-xl bg-surface-subtle text-text-secondary hover:text-white"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-8 sm:px-8 pt-2 border-t border-white/5"
                  >
                    {/* Bullet Highlights */}
                    <div className="space-y-3 pt-4 mb-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-1" />
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stack Chips */}
                    <div>
                      <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2.5">
                        Technologies & Infrastructure
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 text-xs font-mono bg-surface-subtle border border-white/10 text-text-primary rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
