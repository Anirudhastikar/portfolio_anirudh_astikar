import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HMSProject } from './components/HMSProject';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F1F5F9] selection:bg-brand-teal/20 selection:text-brand-teal overflow-x-hidden font-sans">
      
      {/* Background Subtle Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      {/* Floating Header Navbar */}
      <Navbar onCopyEmail={handleCopyEmail} copied={copied} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />
        <HMSProject />
        <Experience />
        <Skills />
        <About />
        <ContactSection onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Copy Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F1117]/95 backdrop-blur-xl border border-brand-teal/40 shadow-2xl shadow-brand-teal/10 font-mono text-xs text-white"
          >
            <div className="p-1.5 rounded-lg bg-brand-teal/20 text-brand-teal">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-brand-teal">Email Copied to Clipboard</div>
              <div className="text-[11px] text-text-muted">{PERSONAL_INFO.email}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
