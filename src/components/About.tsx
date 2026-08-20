import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Copy, Check, GraduationCap, MapPin, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [codeCopied, setCodeCopied] = useState(false);

  const codeSnippet = `const engineer: SoftwareEngineer = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.role}",
  location: "${PERSONAL_INFO.location}",
  experience: 3.5, // years in enterprise & healthcare
  stack: {
    frontend: ["React Native", "React.js", "TypeScript"],
    cloud: ["AWS AppSync", "AWS Lambda", "AWS CDK", "Amplify"],
    database: ["PostgreSQL", "Redis Cache"],
    messaging: ["SNS / SQS", "GraphQL Subscriptions"]
  },
  impact: {
    monthlyReminders: "10,000+",
    dockerScaling: "2 -> 9 containers dynamic",
    clinicalModules: 12
  },
  status: "Open to High-Impact Opportunities"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2500);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono text-xs mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            Bridging clinician-focused user experiences with scalable, fault-tolerant cloud backends.
          </p>
        </div>

        {/* Bento Layout: Narrative + Photo & Code Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative & Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-white/10 shadow-xl space-y-5 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                I am a <strong className="text-white font-semibold">Senior Software Engineer</strong> based in Mysore, India with 3.5+ years of production experience designing and deploying high-availability applications for clinical operations and enterprise workflows.
              </p>
              <p>
                At <a href="https://urneeds.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline decoration-brand-teal/50 hover:text-brand-teal transition-colors">URNEEDS (urneeds.com ↗)</a>, I lead architecture and development across mobile (<strong className="text-brand-teal font-medium">React Native</strong>) and web (<strong className="text-brand-teal font-medium">React.js</strong>), powering hospital departments through OPD triage, inpatient ward telemetry, emergency trauma tags, client-side End-to-End Encryption (E2EE), real-time doctor-patient teleconsultations, and automated reminder pipelines.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-white font-semibold">user empathy</strong> and <strong className="text-white font-semibold">backend durability</strong>. When building for doctors, nurses, and patients, software cannot fail — which is why I focus deeply on type-safe TypeScript, real-time GraphQL synchronization, automated container scaling, and Redis caching.
              </p>

              {/* Education Highlight Card */}
              <div className="pt-6 border-t border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-teal uppercase tracking-wider font-semibold">
                    Academic Foundation
                  </div>
                  <h4 className="font-display font-bold text-base text-white mt-0.5">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs font-mono text-text-muted mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Code Inspector Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0F1117] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Code Card Window Header */}
              <div className="px-4 py-3 bg-surface-raised border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 text-[11px] text-text-muted">anirudh.config.ts</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-lg bg-surface-subtle hover:bg-white/10 text-text-secondary hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy code snippet"
                >
                  {codeCopied ? <Check className="w-3.5 h-3.5 text-brand-teal" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{codeCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 overflow-x-auto text-[11px] leading-relaxed text-text-secondary bg-[#0a0c10]">
                <pre>
                  <code>
                    <span className="text-[#C792EA]">const</span> <span className="text-brand-teal">engineer</span>: <span className="text-brand-cyan">SoftwareEngineer</span> = &#123;{'\n'}
                    {'  '}<span className="text-white/70">name</span>: <span className="text-[#C3E88D]">"{PERSONAL_INFO.name}"</span>,{'\n'}
                    {'  '}<span className="text-white/70">role</span>: <span className="text-[#C3E88D]">"{PERSONAL_INFO.role}"</span>,{'\n'}
                    {'  '}<span className="text-white/70">location</span>: <span className="text-[#C3E88D]">"{PERSONAL_INFO.location}"</span>,{'\n'}
                    {'  '}<span className="text-white/70">experience</span>: <span className="text-brand-amber">3.5</span>, <span className="text-text-muted">// years</span>{'\n'}
                    {'  '}<span className="text-white/70">stack</span>: &#123;{'\n'}
                    {'    '}<span className="text-white/70">mobile</span>: <span className="text-[#C3E88D]">"React Native"</span>,{'\n'}
                    {'    '}<span className="text-white/70">web</span>: <span className="text-[#C3E88D]">"React.js"</span>,{'\n'}
                    {'    '}<span className="text-white/70">cloud</span>: [<span className="text-[#C3E88D]">"AppSync"</span>, <span className="text-[#C3E88D]">"Lambda"</span>, <span className="text-[#C3E88D]">"CDK"</span>],{'\n'}
                    {'    '}<span className="text-white/70">cache</span>: <span className="text-[#C3E88D]">"Redis"</span>{'\n'}
                    {'  '}&#125;,{'\n'}
                    {'  '}<span className="text-white/70">openToOpportunities</span>: <span className="text-[#F78C6C]">true</span>{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Status footer inside code card */}
              <div className="p-4 bg-surface-subtle border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                  TypeScript 5.x Ready
                </span>
                <span className="text-emerald-400">Compilation Passed</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
