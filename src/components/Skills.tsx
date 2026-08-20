import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Cloud, Server, Cpu, Check, Filter } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            Full-stack engineering stack focused on high concurrency, clean type safety, and production-tested AWS cloud primitives.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-white/10 hover:border-brand-teal/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Cloud */}
                <div className="flex flex-wrap gap-2.5 pt-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl bg-surface-subtle border border-white/5 hover:border-brand-teal/40 hover:bg-surface-raised transition-all flex items-center gap-2 group/skill"
                    >
                      <span className="text-xs font-mono font-medium text-text-primary group-hover/skill:text-brand-teal transition-colors">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono uppercase tracking-wider text-text-muted bg-white/5 px-1.5 py-0.5 rounded">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>{cat.skills.length} core proficiencies</span>
                <span className="text-brand-teal font-semibold">Production Proven</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
