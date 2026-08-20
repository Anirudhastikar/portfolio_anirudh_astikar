import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, Copy, Check, Send, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, copied }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Open mailto with prefilled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Anirudh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-brand-teal/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
            Interested in building scalable systems, discussing technical architecture, or exploring senior engineering opportunities? My inbox is always open.
          </p>
        </div>

        {/* Bento Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0F1117] border border-white/10 hover:border-brand-teal/30 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={onCopyEmail}
                  className="p-2 rounded-xl bg-surface-subtle hover:bg-white/10 text-text-secondary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-brand-teal" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                Email Address
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-mono font-semibold text-white hover:text-brand-teal transition-colors block truncate"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0F1117] border border-white/10 hover:border-brand-teal/30 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl bg-surface-subtle hover:bg-white/10 text-text-secondary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="Copy phone number"
                >
                  {phoneCopied ? <Check className="w-4 h-4 text-brand-cyan" /> : <Copy className="w-4 h-4" />}
                  <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
                Direct Phone / WhatsApp
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="text-base sm:text-lg font-mono font-semibold text-white hover:text-brand-cyan transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Quick Action Links: Resume & LinkedIn */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="/resume.pdf"
                download="Anirudh_Astikar_Resume.pdf"
                className="p-5 rounded-2xl bg-[#0F1117] border border-white/10 hover:border-brand-teal/40 hover:bg-surface-raised transition-all flex flex-col justify-between group"
              >
                <Download className="w-5 h-5 text-brand-teal group-hover:scale-110 transition-transform mb-3" />
                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">PDF File</div>
                  <div className="font-display font-bold text-sm text-white mt-0.5 group-hover:text-brand-teal transition-colors">
                    Download Resume
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F1117] border border-white/10 hover:border-brand-cyan/40 hover:bg-surface-raised transition-all flex flex-col justify-between group"
              >
                <Linkedin className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform mb-3" />
                <div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Connect</div>
                  <div className="font-display font-bold text-sm text-white mt-0.5 group-hover:text-brand-cyan transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Direct Message Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/10">
                <MessageSquare className="w-5 h-5 text-brand-teal" />
                <h3 className="font-display font-bold text-lg text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-center space-y-3"
                >
                  <Check className="w-10 h-10 text-brand-teal mx-auto" />
                  <h4 className="font-display font-bold text-xl text-white">
                    Mail Client Opened!
                  </h4>
                  <p className="text-xs font-mono text-text-secondary max-w-sm mx-auto">
                    Your message draft has been prepared. If your mail client did not open automatically, please send directly to <span className="text-brand-teal">{PERSONAL_INFO.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. Sarah / John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-brand-teal text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-brand-teal text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Anirudh, we are interested in discussing your full-stack AWS & React background for a role / architecture challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-brand-teal text-sm font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-[#08090C] bg-brand-teal hover:bg-[#34e2cb] shadow-lg shadow-brand-teal/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message via Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
