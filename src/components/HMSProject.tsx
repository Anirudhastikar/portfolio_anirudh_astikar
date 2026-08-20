import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarCheck,
  Stethoscope,
  BedDouble,
  FileCheck,
  Video,
  MessageSquare,
  BellRing,
  Receipt,
  BarChart3,
  Boxes,
  Clock,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Zap,
  Activity,
  ArrowRight,
  CheckCircle2,
  X,
  Database,
  Shield,
  Radio,
  ExternalLink,
  Lock,
  Key,
  RefreshCw,
  Pill,
  Search,
  User,
  LayoutGrid
} from 'lucide-react';
import { HMS_MODULES, ProjectModule } from '../data/portfolioData';

// 1. OPD - Out Patient Department Starburst Network
const OpdIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full text-brand-teal/80" fill="none">
    <line x1="0" y1="50" x2="160" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
    <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
    
    <line x1="80" y1="50" x2="25" y2="28" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="135" y2="35" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="45" y2="78" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="120" y2="75" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="148" y2="58" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="15" y2="60" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.2" />

    <circle cx="25" cy="28" r="4" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="135" cy="35" r="4.5" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="45" cy="78" r="3.5" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1.5" />
    <circle cx="120" cy="75" r="3" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="148" cy="58" r="2.5" fill="#38BDF8" />
    <circle cx="15" cy="60" r="2.5" fill="#2DD4BF" />

    <circle cx="80" cy="50" r="10" fill="rgba(45, 212, 191, 0.15)" />
    <circle cx="80" cy="50" r="6" fill="#0F1117" stroke="#2DD4BF" strokeWidth="2" />
    <circle cx="80" cy="50" r="2.5" fill="#2DD4BF" />

    <motion.circle
      cx="80"
      cy="50"
      r="14"
      stroke="#2DD4BF"
      strokeWidth="1"
      opacity="0.4"
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
    />
  </svg>
);

// 2. ED - Emergency Department Cardiac ECG Monitor
const EdIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    <path d="M0 25 H160 M0 50 H160 M0 75 H160" stroke="rgba(255,255,255,0.04)" />
    <path d="M40 0 V100 M80 0 V100 M120 0 V100" stroke="rgba(255,255,255,0.04)" />

    <path
      d="M0 50 L40 50 L48 45 L54 58 L62 20 L72 82 L80 44 L86 52 L92 50 L160 50"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M80 50 L95 50 L102 38 L110 65 L118 30 L126 50 L160 50"
      stroke="rgba(244, 114, 182, 0.35)"
      strokeWidth="1.2"
      strokeDasharray="2 2"
    />

    <circle cx="62" cy="20" r="3" fill="#F43F5E" />
    <circle cx="118" cy="30" r="2.5" fill="#FB7042" />
    
    <motion.circle
      cx="72"
      cy="82"
      r="4"
      fill="#38BDF8"
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    />
  </svg>
);

// 3. IP - In-Patient Doctor & Patient Conversation
const IpIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Floor / Hospital Bed Frame */}
    <line x1="20" y1="78" x2="140" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    
    {/* Hospital Bed */}
    <path d="M30 60 L75 60 L85 75 L25 75 Z" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="35" cy="52" r="5" fill="#93C5FD" />
    <path d="M25 75 L25 82 M85 75 L85 82" stroke="#38BDF8" strokeWidth="1.5" />

    {/* IV Drip Stand */}
    <line x1="18" y1="35" x2="18" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
    <circle cx="18" cy="38" r="4" fill="rgba(45,212,191,0.3)" stroke="#2DD4BF" strokeWidth="1.2" />

    {/* Attending Doctor Figure */}
    <circle cx="110" cy="42" r="6" fill="#2DD4BF" />
    <path d="M100 78 L104 55 Q110 50 116 55 L120 78 Z" fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1.5" />
    <rect x="115" y="56" width="9" height="13" rx="2" fill="#0F1117" stroke="#38BDF8" strokeWidth="1" />

    {/* Doctor & Patient Conversation Speech Bubbles */}
    <motion.g
      animate={{ y: [0, -3, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
    >
      <rect x="52" y="24" width="28" height="14" rx="5" fill="#3B82F6" opacity="0.9" />
      <polygon points="62,38 68,38 60,43" fill="#3B82F6" />
      <line x1="57" y1="30" x2="73" y2="30" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="57" y1="34" x2="67" y2="34" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </motion.g>

    <motion.g
      animate={{ y: [0, -2, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
    >
      <rect x="120" y="22" width="26" height="13" rx="4" fill="#10B981" opacity="0.9" />
      <polygon points="124,35 130,35 122,39" fill="#10B981" />
      <line x1="125" y1="28" x2="140" y2="28" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
    </motion.g>
  </svg>
);

// 4. Pharma - Pharmacy Molecular Compound
const PharmaIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    <g stroke="#38BDF8" strokeWidth="1.2" opacity="0.75">
      <polygon points="45,35 60,25 75,35 75,55 60,65 45,55" fill="rgba(56,189,248,0.05)" />
      <polygon points="75,35 90,25 105,35 105,55 90,65 75,55" fill="rgba(56,189,248,0.05)" />
      <polygon points="60,65 75,55 90,65 90,85 75,95 60,85" fill="rgba(45,212,191,0.08)" />
      <line x1="30" y1="45" x2="45" y2="35" strokeDasharray="2 2" />
      <line x1="105" y1="55" x2="120" y2="65" strokeDasharray="2 2" />
    </g>

    <circle cx="45" cy="35" r="2.5" fill="#38BDF8" />
    <circle cx="60" cy="25" r="2.5" fill="#2DD4BF" />
    <circle cx="75" cy="35" r="3" fill="#38BDF8" />
    <circle cx="90" cy="25" r="2.5" fill="#2DD4BF" />
    <circle cx="105" cy="35" r="2.5" fill="#38BDF8" />
    <circle cx="90" cy="65" r="3" fill="#60A5FA" />
    <circle cx="75" cy="55" r="3" fill="#2DD4BF" />
    <circle cx="60" cy="85" r="2.5" fill="#38BDF8" />
    <circle cx="75" cy="95" r="2.5" fill="#2DD4BF" />
  </svg>
);

// 5. Diagnosis - Research Lab Microscope & Diagnostic Flask
const DiagnosisIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Base Table */}
    <line x1="20" y1="85" x2="140" y2="85" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

    {/* Laboratory Microscope Body */}
    <path d="M45 85 L75 85 M60 85 L60 65 L48 50 L58 40 L70 54 L70 65" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="58" cy="38" r="4" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1.5" />
    <line x1="45" y1="62" x2="72" y2="62" stroke="#38BDF8" strokeWidth="2" />
    
    {/* Microscope Laser Scan Light */}
    <polygon points="53,46 48,62 65,62" fill="rgba(45,212,191,0.15)" />

    {/* Research Chemical Flask with Bubbles */}
    <path d="M108 45 L108 55 L96 78 Q95 85 105 85 L125 85 Q135 85 134 78 L122 55 L122 45 Z" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="1.5" />
    <path d="M99 74 Q115 68 131 74 L132 82 Q125 85 115 85 Q105 85 98 82 Z" fill="rgba(45,212,191,0.3)" />

    {/* Animated Rising Reaction Particles */}
    <motion.circle
      cx="112"
      cy="76"
      r="2"
      fill="#2DD4BF"
      animate={{ y: [0, -22, -30], opacity: [0.9, 0.7, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
    />
    <motion.circle
      cx="118"
      cy="72"
      r="1.5"
      fill="#38BDF8"
      animate={{ y: [0, -18, -26], opacity: [0.9, 0.6, 0] }}
      transition={{ repeat: Infinity, duration: 1.8, delay: 0.6, ease: 'easeOut' }}
    />

    {/* Research Target Radar Ring */}
    <circle cx="115" cy="30" r="12" stroke="rgba(244,114,182,0.4)" strokeDasharray="2 2" />
    <circle cx="115" cy="30" r="3" fill="#F43F5E" />
  </svg>
);

// 6. Accounts Analytics - Financial Growth & Billing Bar Chart
const AccountsIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    <rect x="25" y="65" width="8" height="25" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="42" y="55" width="8" height="35" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="59" y="45" width="8" height="45" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="76" y="58" width="8" height="32" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="93" y="40" width="8" height="50" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="110" y="30" width="8" height="60" rx="2" fill="rgba(255,255,255,0.15)" />
    <rect x="127" y="20" width="8" height="70" rx="2" fill="rgba(56,189,248,0.25)" />

    <path
      d="M20 70 C45 68, 65 42, 90 44 C110 46, 125 24, 145 15"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <circle cx="20" cy="70" r="2.5" fill="#38BDF8" />
    <circle cx="90" cy="44" r="3" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="145" cy="15" r="3.5" fill="#0F1117" stroke="#38BDF8" strokeWidth="2" />
    <circle cx="145" cy="15" r="1.5" fill="#38BDF8" />
  </svg>
);

// 7. Teleconsultation & Video - Live Video Broadcasting Stream
const VideoCallIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Main Video Screen Frame */}
    <rect x="25" y="18" width="110" height="64" rx="8" fill="#0A0C10" stroke="#38BDF8" strokeWidth="1.5" />
    
    {/* Remote Doctor Avatar on Screen */}
    <circle cx="60" cy="45" r="9" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" strokeWidth="1.2" />
    <path d="M48 68 Q60 56 72 68" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />

    {/* Picture-in-Picture Patient Screen */}
    <rect x="94" y="44" width="34" height="24" rx="4" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1" />
    <circle cx="111" cy="53" r="4" fill="#2DD4BF" />
    <path d="M103 64 Q111 58 119 64" stroke="#2DD4BF" strokeWidth="1" />

    {/* Flashing "LIVE / REC" Indicator */}
    <motion.circle
      cx="38"
      cy="28"
      r="3"
      fill="#EF4444"
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    />
    <rect x="44" y="25" width="22" height="6" rx="2" fill="rgba(239,68,68,0.2)" />
    <line x1="47" y1="28" x2="62" y2="28" stroke="#EF4444" strokeWidth="1" />

    {/* Radiating Broadcasting Waves */}
    <motion.path
      d="M138 28 A 12 12 0 0 1 138 46"
      stroke="#38BDF8"
      strokeWidth="1.2"
      strokeLinecap="round"
      animate={{ opacity: [0.2, 0.9, 0.2] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    />
    <motion.path
      d="M143 23 A 18 18 0 0 1 143 51"
      stroke="#2DD4BF"
      strokeWidth="1.2"
      strokeLinecap="round"
      animate={{ opacity: [0.1, 0.8, 0.1] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
    />
  </svg>
);

// 8. Treatment Plans - Online Doctor Clinical Prescription
const TreatmentPlansIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Tablet / Clinical Clipboard */}
    <rect x="40" y="15" width="80" height="70" rx="8" fill="#0A0C10" stroke="#2DD4BF" strokeWidth="1.5" />
    <rect x="65" y="10" width="30" height="8" rx="3" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1.2" />

    {/* Treatment Step 1 Check */}
    <circle cx="56" cy="34" r="4.5" fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1.2" />
    <polyline points="53.5,34 55.5,36 58.5,32" stroke="#2DD4BF" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="66" y1="34" x2="105" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Treatment Step 2 Check */}
    <circle cx="56" cy="48" r="4.5" fill="rgba(45,212,191,0.2)" stroke="#2DD4BF" strokeWidth="1.2" />
    <polyline points="53.5,48 55.5,50 58.5,46" stroke="#2DD4BF" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="66" y1="48" x2="98" y2="48" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Treatment Step 3 in progress */}
    <motion.circle
      cx="56"
      cy="62"
      r="4.5"
      fill="rgba(245,158,11,0.2)"
      stroke="#F59E0B"
      strokeWidth="1.2"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <line x1="66" y1="62" x2="88" y2="62" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />

    {/* Stethoscope Accent */}
    <path d="M125 40 C135 40 140 60 130 75 L125 70" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="123" cy="70" r="3" fill="#38BDF8" />
  </svg>
);

// 9. Appointment Booking - Interactive Calendar Slot Booking
const AppointmentBookingIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Calendar Base */}
    <rect x="35" y="18" width="90" height="66" rx="8" fill="#0A0C10" stroke="#38BDF8" strokeWidth="1.5" />
    <path d="M35 32 H125" stroke="#38BDF8" strokeWidth="1.2" />
    
    {/* Calendar Ring Binders */}
    <line x1="55" y1="12" x2="55" y2="22" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
    <line x1="105" y1="12" x2="105" y2="22" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />

    {/* Date Slots Grid */}
    <rect x="45" y="40" width="16" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="68" y="40" width="16" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="91" y="40" width="16" height="12" rx="2" fill="rgba(56,189,248,0.25)" stroke="#38BDF8" strokeWidth="1" />
    
    <rect x="45" y="58" width="16" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="68" y="58" width="16" height="12" rx="2" fill="rgba(45,212,191,0.3)" stroke="#2DD4BF" strokeWidth="1" />
    <rect x="91" y="58" width="16" height="12" rx="2" fill="rgba(255,255,255,0.08)" />

    {/* Slot Confirmed Checkmark */}
    <polyline points="73,64 76,66 81,62" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 10. Patient-Doctor Chat - E2EE Real-Time Messaging Bubbles
const PatientChatIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Doctor Message Bubble */}
    <rect x="25" y="20" width="80" height="24" rx="8" fill="#3B82F6" opacity="0.9" />
    <polygon points="30,44 38,44 26,50" fill="#3B82F6" />
    <line x1="36" y1="29" x2="88" y2="29" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="36" y1="36" x2="68" y2="36" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Patient Message Bubble */}
    <rect x="55" y="52" width="80" height="24" rx="8" fill="#10B981" opacity="0.9" />
    <polygon points="130,76 122,76 134,82" fill="#10B981" />
    
    {/* Typing Indicator Animated Dots */}
    <motion.circle cx="75" cy="64" r="2.5" fill="#FFFFFF" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.9 }} />
    <motion.circle cx="85" cy="64" r="2.5" fill="#FFFFFF" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.2 }} />
    <motion.circle cx="95" cy="64" r="2.5" fill="#FFFFFF" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.4 }} />

    {/* E2EE Mini Lock Badge */}
    <circle cx="128" cy="24" r="7" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1.2" />
    <rect x="125" y="24" width="6" height="5" rx="1" fill="#2DD4BF" />
    <path d="M126 24 V22 Q128 20 130 22 V24" stroke="#2DD4BF" strokeWidth="1" />
  </svg>
);

// 11. Automated Notifications - Ringing Bell & Omnichannel Dispatch
const NotificationEngineIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* Notification Bell */}
    <motion.g
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      style={{ transformOrigin: '55px 25px' }}
    >
      <path d="M55 25 C45 25 42 45 35 52 L75 52 C68 45 65 25 55 25 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="55" cy="56" r="3" fill="#F59E0B" />
      <circle cx="55" cy="23" r="2.5" fill="#F59E0B" />
    </motion.g>

    {/* Vibrating Bell Soundwaves */}
    <path d="M26 38 A 12 12 0 0 0 26 50" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M20 33 A 18 18 0 0 0 20 55" stroke="rgba(245,158,11,0.5)" strokeWidth="1.2" strokeLinecap="round" />

    {/* Dispatched Omnichannel Notification Packets (SMS, WhatsApp, Email) */}
    <rect x="90" y="25" width="48" height="15" rx="4" fill="#0F1117" stroke="#2DD4BF" strokeWidth="1.2" />
    <line x1="96" y1="32" x2="128" y2="32" stroke="#2DD4BF" strokeWidth="1.2" />

    <rect x="98" y="46" width="48" height="15" rx="4" fill="#0F1117" stroke="#10B981" strokeWidth="1.2" />
    <line x1="104" y1="53" x2="136" y2="53" stroke="#10B981" strokeWidth="1.2" />

    <rect x="90" y="67" width="48" height="15" rx="4" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.2" />
    <line x1="96" y1="74" x2="128" y2="74" stroke="#38BDF8" strokeWidth="1.2" />
  </svg>
);

// 12. Doctor Rostering - 24/7 On-Call Shift Rotation Dial
const DoctorRosteringIllustration: React.FC = () => (
  <svg viewBox="0 0 160 100" className="w-full h-full" fill="none">
    {/* 24/7 Clock Dial */}
    <circle cx="80" cy="50" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
    <circle cx="80" cy="50" r="3" fill="#2DD4BF" />

    {/* Shift Segments */}
    <path d="M80 50 L80 18 A 32 32 0 0 1 112 50 Z" fill="rgba(45,212,191,0.15)" stroke="#2DD4BF" strokeWidth="1" />
    <path d="M80 50 L112 50 A 32 32 0 0 1 80 82 Z" fill="rgba(56,189,248,0.15)" stroke="#38BDF8" strokeWidth="1" />

    {/* Rotating Clock Hand */}
    <motion.line
      x1="80"
      y1="50"
      x2="80"
      y2="24"
      stroke="#2DD4BF"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      style={{ transformOrigin: '80px 50px' }}
    />

    {/* Active Doctor Badges */}
    <circle cx="125" cy="30" r="6" fill="#0F1117" stroke="#10B981" strokeWidth="1.5" />
    <circle cx="125" cy="30" r="2.5" fill="#10B981" />

    <circle cx="35" cy="65" r="6" fill="#0F1117" stroke="#38BDF8" strokeWidth="1.5" />
    <circle cx="35" cy="65" r="2.5" fill="#38BDF8" />
  </svg>
);

export const HMSProject: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'clinical' | 'operations' | 'communication'>('all');
  const [selectedModule, setSelectedModule] = useState<ProjectModule | null>(null);

  // Auto-Scaling Simulator States
  const [containerCount, setContainerCount] = useState<number>(2);
  const [isSimulatingPeak, setIsSimulatingPeak] = useState<boolean>(false);
  const [cpuUtilization, setCpuUtilization] = useState<number>(32);
  const [requestRate, setRequestRate] = useState<number>(2400);
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');

  // E2EE Interactive State
  const [isEncryptedView, setIsEncryptedView] = useState<boolean>(true);

  const scaleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (scaleIntervalRef.current) {
        clearInterval(scaleIntervalRef.current);
      }
    };
  }, []);

  const animateContainerScaling = (target: number) => {
    if (scaleIntervalRef.current) {
      clearInterval(scaleIntervalRef.current);
      scaleIntervalRef.current = null;
    }

    const clampedTarget = Math.max(1, Math.min(9, target));

    scaleIntervalRef.current = setInterval(() => {
      setContainerCount((prev) => {
        if (prev === clampedTarget) {
          if (scaleIntervalRef.current) {
            clearInterval(scaleIntervalRef.current);
            scaleIntervalRef.current = null;
          }
          return prev;
        }

        const next = prev < clampedTarget ? prev + 1 : prev - 1;

        if (next === clampedTarget) {
          if (scaleIntervalRef.current) {
            clearInterval(scaleIntervalRef.current);
            scaleIntervalRef.current = null;
          }
        }

        return Math.max(1, Math.min(9, next));
      });
    }, 120);
  };

  // Interactive Scaling Engine
  const handleTogglePeak = () => {
    if (isSimulatingPeak) {
      setIsSimulatingPeak(false);
      setCpuUtilization(28);
      setRequestRate(1850);
      animateContainerScaling(2);
    } else {
      setIsSimulatingPeak(true);
      setCpuUtilization(78);
      setRequestRate(11400);
      animateContainerScaling(9);
    }
  };

  const handleScheduleChange = (time: 'day' | 'night') => {
    setTimeOfDay(time);
    if (time === 'day') {
      setIsSimulatingPeak(false);
      setCpuUtilization(64);
      setRequestRate(8200);
      animateContainerScaling(7);
    } else {
      setIsSimulatingPeak(false);
      setCpuUtilization(18);
      setRequestRate(950);
      animateContainerScaling(2);
    }
  };

  // Get Bespoke SVG Illustration for each module
  const renderModuleIllustration = (id: string) => {
    switch (id) {
      case 'opd-management': return <OpdIllustration />;
      case 'emergency-dept': return <EdIllustration />;
      case 'ipd-management': return <IpIllustration />;
      case 'pharmacy-mgmt': return <PharmaIllustration />;
      case 'diagnostics-mgmt': return <DiagnosisIllustration />;
      case 'billing-refunds': return <AccountsIllustration />;
      case 'video-calling': return <VideoCallIllustration />;
      case 'treatment-plans': return <TreatmentPlansIllustration />;
      case 'appointment-booking': return <AppointmentBookingIllustration />;
      case 'patient-chat': return <PatientChatIllustration />;
      case 'notification-engine': return <NotificationEngineIllustration />;
      case 'doctor-availability': return <DoctorRosteringIllustration />;
      default: return <OpdIllustration />;
    }
  };

  // Map icon names to Lucide icon components
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarCheck': return <CalendarCheck className="w-6 h-6 text-brand-teal" />;
      case 'Stethoscope': return <User className="w-6 h-6 text-brand-cyan" />;
      case 'Activity': return <Activity className="w-6 h-6 text-brand-cyan" />;
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-brand-cyan" />;
      case 'Pill': return <Pill className="w-6 h-6 text-brand-cyan" />;
      case 'Search': return <Search className="w-6 h-6 text-brand-cyan" />;
      case 'Receipt': return <LayoutGrid className="w-6 h-6 text-brand-cyan" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-brand-teal" />;
      case 'Video': return <Video className="w-6 h-6 text-brand-teal" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-brand-teal" />;
      case 'BellRing': return <BellRing className="w-6 h-6 text-brand-teal" />;
      case 'Boxes': return <Boxes className="w-6 h-6 text-brand-teal" />;
      case 'Clock': return <Clock className="w-6 h-6 text-brand-teal" />;
      default: return <Sparkles className="w-6 h-6 text-brand-teal" />;
    }
  };

  const filteredModules = selectedCategory === 'all'
    ? HMS_MODULES
    : HMS_MODULES.filter(m => m.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-cyan/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* URNEEDS DIAGNOSE TREAT OPTIMIZE BANNER & SECTION HEADER */}
        {/* ============================================================ */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal font-mono text-xs">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>FEATURED PRODUCTION ARCHITECTURE</span>
            </div>

            <a
              href="https://urneeds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-teal/40 text-text-secondary hover:text-white font-mono text-xs transition-colors"
            >
              <span>urneeds.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                Hospital Management System
              </h2>
              
              {/* Motto Tagline */}
              <div className="flex items-center gap-2 text-brand-teal font-mono text-sm sm:text-base font-semibold mt-2">
                <span>Diagnose.</span>
                <span className="text-brand-cyan">Treat.</span>
                <span className="text-brand-amber">Optimize Your Practice.</span>
              </div>

              <p className="text-text-secondary text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
                A multi-module enterprise healthcare ecosystem running real-time OPD, IPD, and Emergency Department workflows across mobile & web platforms with client-side End-to-End Encryption (E2EE).
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://urneeds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-surface-raised border border-white/10 hover:border-brand-teal/40 text-xs font-mono text-white flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-teal" />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: END-TO-END ENCRYPTION (E2EE) SHOWCASE */}
        {/* ============================================================ */}
        <div id="e2ee-security" className="mb-20">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-brand-teal/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal flex-shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-xl text-white">
                      End-to-End Encryption (E2EE) for Consumer & Patient Data
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-brand-teal/10 text-brand-teal border border-brand-teal/30">
                      AES-256-GCM + ECDH
                    </span>
                  </div>
                  <p className="text-xs font-mono text-text-secondary mt-1">
                    Zero-Knowledge Architecture · Client-Side Key Exchange · HIPAA Compliant Workflows
                  </p>
                </div>
              </div>

              {/* Encryption View Toggle */}
              <button
                onClick={() => setIsEncryptedView(!isEncryptedView)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-subtle hover:bg-surface-raised border border-white/10 hover:border-brand-teal/40 font-mono text-xs text-text-primary transition-all self-start md:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 text-brand-teal" />
                <span>Toggle: {isEncryptedView ? 'Show Decrypted (Plaintext)' : 'Show E2EE Ciphertext'}</span>
              </button>
            </div>

            {/* Interactive Live Cryptographic Payload Card */}
            <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Code / Payload Inspector */}
              <div className="lg:col-span-8 rounded-2xl bg-[#08090C] border border-white/10 overflow-hidden font-mono text-xs">
                <div className="px-4 py-2.5 bg-surface-raised border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-text-muted">
                    <Key className="w-3.5 h-3.5 text-brand-teal" />
                    <span>patient-record-payload.json ({isEncryptedView ? 'E2EE AES-256 Encrypted' : 'Plaintext View'})</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    {isEncryptedView ? '🔒 Locked on Device' : '🔓 Decrypted locally'}
                  </span>
                </div>

                <div className="p-4 sm:p-5 overflow-x-auto text-[11px] leading-relaxed">
                  {isEncryptedView ? (
                    <pre className="text-brand-teal">
                      <code>
                        {`{\n`}
                        {`  "patientUuid": "e7b92c4a-819a-4c2f-89a1",\n`}
                        {`  "encryptionAlgorithm": "AES-256-GCM",\n`}
                        {`  "keyDerivation": "ECDH-P256-DeviceKey",\n`}
                        {`  "ciphertext": "U2FsdGVkX1+vG8sXJ7q4l9xZ8mKpW2nV9cT3eY1aB5dF7gH...[E2EE-LOCKED]",\n`}
                        {`  "initializationVector": "8f3b2a1c9e4d",\n`}
                        {`  "authTag": "c9a4e2f18b5d7e3a"\n`}
                        {`}`}
                      </code>
                    </pre>
                  ) : (
                    <pre className="text-text-primary">
                      <code>
                        {`{\n`}
                        {`  "patientUuid": "e7b92c4a-819a-4c2f-89a1",\n`}
                        {`  "department": "Emergency Trauma (ED)",\n`}
                        {`  "vitals": { "bloodPressure": "120/80", "heartRate": 74, "spo2": 99 },\n`}
                        {`  "clinicalNotes": "Patient admitted with stable vitals. Prescribed treatment plan.",\n`}
                        {`  "doctorDiagnosis": "Acute Triage Cleared",\n`}
                        {`  "privacyStatus": "Client-Encrypted Before AWS Transport"\n`}
                        {`}`}
                      </code>
                    </pre>
                  )}
                </div>
              </div>

              {/* Security Pillars Checklist */}
              <div className="lg:col-span-4 space-y-3">
                <div className="p-3.5 rounded-xl bg-surface-subtle border border-white/5 flex items-start gap-3">
                  <Key className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Client-Side Key Ownership</h5>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Private encryption keys remain strictly on the clinician or consumer's device.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-subtle border border-white/5 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Zero Server Leakage</h5>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Cloud resolvers and databases store zero plaintext patient health information (PHI).
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: INTERACTIVE AUTO-SCALING SIMULATOR */}
        {/* ============================================================ */}
        <div id="scaling-simulator" className="mb-20">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-brand-amber/10 border border-brand-amber/30 text-brand-amber">
                    <Server className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      Auto-Scaling Docker Container Infrastructure
                    </h3>
                    <p className="text-xs font-mono text-text-secondary mt-0.5">
                      AWS Application Load Balancer · CloudWatch Triggers · Scheduled Peak Balancer
                    </p>
                  </div>
                </div>
              </div>

              {/* Mode Toggle Controls */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleTogglePeak}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all active:scale-95 ${
                    isSimulatingPeak
                      ? 'bg-brand-amber text-[#08090C] shadow-lg shadow-brand-amber/30 scale-105'
                      : 'bg-surface-raised border border-white/10 text-text-primary hover:border-brand-amber/40'
                  }`}
                >
                  <Zap className={`w-3.5 h-3.5 ${isSimulatingPeak ? 'fill-current' : ''}`} />
                  {isSimulatingPeak ? '🔥 Peak Load Active (9 Containers)' : '⚡ Simulate Traffic Surge'}
                </button>

                <div className="hidden sm:flex items-center bg-surface-subtle p-1 rounded-xl border border-white/5 font-mono text-xs">
                  <button
                    onClick={() => handleScheduleChange('day')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      timeOfDay === 'day' ? 'bg-brand-teal/20 text-brand-teal font-semibold' : 'text-text-muted hover:text-white'
                    }`}
                  >
                    ☀️ 7 AM–9 PM (Peak)
                  </button>
                  <button
                    onClick={() => handleScheduleChange('night')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      timeOfDay === 'night' ? 'bg-brand-teal/20 text-brand-teal font-semibold' : 'text-text-muted hover:text-white'
                    }`}
                  >
                    🌙 Night (1-2 Standby)
                  </button>
                </div>
              </div>
            </div>

            {/* Container Visualization Bar */}
            <div className="py-8">
              <div className="flex items-center justify-between mb-3 text-xs font-mono">
                <span className="text-text-secondary">ACTIVE CONTAINER PODS BEHIND LOAD BALANCER:</span>
                <span className="text-brand-teal font-bold">{containerCount} of 9 Pods Active</span>
              </div>

              <div className="grid grid-cols-9 gap-2 sm:gap-3 p-4 rounded-2xl bg-surface-subtle border border-white/5">
                {Array.from({ length: 9 }).map((_, index) => {
                  const isActive = index < containerCount;
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.2,
                        scale: isActive ? 1 : 0.95,
                        borderColor: isActive ? 'rgba(45, 212, 191, 0.6)' : 'rgba(255, 255, 255, 0.05)',
                        backgroundColor: isActive ? 'rgba(45, 212, 191, 0.12)' : 'rgba(15, 17, 23, 0.5)'
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl border p-3 flex flex-col items-center justify-between h-28 sm:h-32 text-center group"
                    >
                      <div className="text-[10px] font-mono text-text-muted">Pod #{index + 1}</div>
                      
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-brand-teal/20 text-brand-teal' : 'text-text-muted'}`}>
                        <Cpu className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col items-center">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-white' : 'text-text-muted'}`}>
                          {isActive ? 'HEALTHY' : 'STANDBY'}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse mt-0.5" />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Live Telemetry Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-surface-subtle/80 border border-white/5">
                <div className="text-text-muted mb-1 text-[11px]">AVG CPU UTILIZATION</div>
                <div className={`text-lg font-bold ${cpuUtilization > 70 ? 'text-brand-amber' : 'text-brand-teal'}`}>
                  {cpuUtilization}% <span className="text-[10px] text-text-muted font-normal">(Threshold: 70%)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-subtle/80 border border-white/5">
                <div className="text-text-muted mb-1 text-[11px]">REQUEST THROUGHPUT</div>
                <div className="text-lg font-bold text-brand-cyan">
                  {requestRate.toLocaleString()} <span className="text-[10px] text-text-muted font-normal">req / min</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-subtle/80 border border-white/5">
                <div className="text-text-muted mb-1 text-[11px]">LATENCY P95</div>
                <div className="text-lg font-bold text-emerald-400">
                  {isSimulatingPeak ? '42ms' : '18ms'} <span className="text-[10px] text-text-muted font-normal">(Redis Cached)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-subtle/80 border border-white/5">
                <div className="text-text-muted mb-1 text-[11px]">INFRA COST PROFILE</div>
                <div className="text-lg font-bold text-white">
                  Optimized <span className="text-[10px] text-text-muted font-normal">(Auto-downscaled)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 3: SYSTEM ARCHITECTURE VISUALIZER */}
        {/* ============================================================ */}
        <div id="architecture" className="mb-20">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0F1117] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-teal mb-1">
                  <Layers className="w-4 h-4" />
                  <span>END-TO-END CLOUD TOPOLOGY</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  GraphQL (AppSync) + Serverless Event Pipeline
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span>AWS CDK Provisioned · IaC Managed</span>
              </div>
            </div>

            {/* Architecture Node Map */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              {/* Tier 1: Client Frontends */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-brand-teal/20 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-brand-teal font-semibold mb-2">TIER 1 · CLIENTS</div>
                  <div className="font-display font-bold text-base text-white mb-1">React Native & Web</div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Cross-platform mobile apps for clinical staff + React.js web admin dashboards with E2EE client keys.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">Amplify DataStore</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">TypeScript</span>
                </div>
              </div>

              {/* Tier 2: GraphQL Gateway */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-brand-cyan/20 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-brand-cyan font-semibold mb-2">TIER 2 · API GATEWAY</div>
                  <div className="font-display font-bold text-base text-white mb-1">AWS AppSync</div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Managed GraphQL schemas, subscriptions for real-time doctor slot updates and chat.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">GraphQL Resolvers</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">Real-time Pub/Sub</span>
                </div>
              </div>

              {/* Tier 3: Compute & Messaging */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-brand-amber/20 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-brand-amber font-semibold mb-2">TIER 3 · LOGIC & EVENTS</div>
                  <div className="font-display font-bold text-base text-white mb-1">AWS Lambda & SQS</div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Serverless microservices for Treatment plans, billing calculations, and message queues.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">SNS / SQS FIFO</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">10k+ Reminders/mo</span>
                </div>
              </div>

              {/* Tier 4: Storage & Cache */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-emerald-500/20 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold mb-2">TIER 4 · DATA & CACHE</div>
                  <div className="font-display font-bold text-base text-white mb-1">PostgreSQL & Redis</div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Relational integrity for medical records with horizontal Redis caching for low latency.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">AWS CDK</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 rounded text-text-secondary">Sub-millisecond Hit</span>
                </div>
              </div>

            </div>

            {/* Pipeline Callout Footer */}
            <div className="p-4 rounded-xl bg-surface-subtle/50 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-teal" />
                <span>Zero-downtime rolling deployments configured with AWS CDK & CloudWatch monitoring.</span>
              </div>
              <a
                href="#experience"
                className="text-brand-teal hover:underline inline-flex items-center gap-1 font-semibold flex-shrink-0"
              >
                Read Experience Log <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 4: 12 INTERACTIVE CLINICAL MODULES WITH BESPOKE SVGs */}
        {/* ============================================================ */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                Core Clinical & Operational Modules
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Explore the key departments and clinical workflows built for the URNEEDS healthcare ecosystem.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-subtle border border-white/5 font-mono text-xs overflow-x-auto">
              {[
                { id: 'all', label: 'All (12)' },
                { id: 'clinical', label: 'Clinical' },
                { id: 'operations', label: 'Operations' },
                { id: 'communication', label: 'Comms & Video' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-brand-teal text-[#08090C] font-semibold shadow-sm'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Module Grid with Split Layout and Custom SVGs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredModules.map((module) => (
              <motion.div
                key={module.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedModule(module)}
                className="rounded-3xl bg-[#0F1117] hover:bg-surface-raised border border-white/10 hover:border-brand-teal/40 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xl overflow-hidden"
              >
                {/* Top Split Header: Left Icon + Info, Right Bespoke SVG */}
                <div className="grid grid-cols-12 border-b border-white/5 bg-surface-subtle/60">
                  {/* Left Column: Icon & Department Name */}
                  <div className="col-span-5 p-4 sm:p-5 flex flex-col justify-center border-r border-white/5">
                    <div className="mb-2">
                      {getModuleIcon(module.iconName)}
                    </div>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-brand-teal transition-colors leading-tight">
                      {module.name}
                    </h4>
                    <span className="text-[10px] font-mono text-text-muted mt-1 leading-tight line-clamp-2">
                      {module.category === 'clinical' ? 'Clinical Department' : module.category === 'communication' ? 'Realtime Comms' : 'Operations & Cloud'}
                    </span>
                  </div>

                  {/* Right Column: Custom Animated SVG Illustration */}
                  <div className="col-span-7 p-2 flex items-center justify-center bg-black/20 overflow-hidden relative">
                    <div className="w-full h-24">
                      {renderModuleIllustration(module.id)}
                    </div>
                  </div>
                </div>

                {/* Bottom Body: Available Features & Tech */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] font-mono font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                      Available Features:
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {module.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {module.tech.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-text-muted bg-white/5 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {module.tech.length > 2 && (
                        <span className="text-[10px] font-mono text-text-muted px-1">
                          +{module.tech.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE MODULE DETAIL MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#0F1117] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal">
                  {getModuleIcon(selectedModule.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-teal font-semibold">
                    MODULE DEEP DIVE · {selectedModule.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {selectedModule.name}
                  </h3>
                </div>
              </div>

              {/* Description Body */}
              <div className="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
                <p className="text-white font-medium text-base">
                  {selectedModule.shortDesc}
                </p>
                <p className="bg-surface-subtle p-4 rounded-xl border border-white/5">
                  {selectedModule.details}
                </p>
              </div>

              {/* Key Impact Metric if any */}
              {selectedModule.metrics && (
                <div className="p-3.5 rounded-xl bg-brand-teal/10 border border-brand-teal/30 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <span className="font-mono text-xs text-brand-teal font-medium">
                    Impact: {selectedModule.metrics}
                  </span>
                </div>
              )}

              {/* Technologies Used */}
              <div className="mb-6">
                <h5 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2.5">
                  Technologies & AWS Services
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedModule.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-surface-raised border border-white/10 text-text-primary rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-text-secondary bg-surface-raised hover:text-white border border-white/10"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedModule(null)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs text-[#08090C] bg-brand-teal hover:bg-brand-teal/90"
                >
                  Discuss Architecture
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
