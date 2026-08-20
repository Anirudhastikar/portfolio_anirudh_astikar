export interface ProjectModule {
  id: string;
  name: string;
  category: 'clinical' | 'operations' | 'communication' | 'infrastructure';
  shortDesc: string;
  details: string;
  iconName: string;
  tech: string[];
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
  stack: string[];
  keyMetric: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level?: 'expert' | 'advanced' | 'proficient'; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "Anirudh Astikar",
  role: "Senior Software Engineer",
  subtitle: "Full Stack React & AWS Developer",
  location: "Mysore, IN 570017",
  email: "astikaranirudh2000@gmail.com",
  phone: "+91-8123996998",
  linkedin: "https://www.linkedin.com/in/anirudh-astikar-501157170/",
  github: "https://github.com/Anirudhastikar",
  companyWebsite: "https://urneeds.com/",
  experienceYears: "3.5+",
  bio: "Results-driven Senior Software Engineer with 3.5+ years of experience building scalable healthcare and enterprise applications. Specializing in React Native, React.js, TypeScript, GraphQL, End-to-End Encryption (E2EE), and AWS cloud architectures (Amplify, AppSync, Lambda, SNS/SQS, CDK). Delivered production systems handling 10,000+ monthly reminders and core Hospital Management System modules powering real-time clinical workflows.",
  education: {
    degree: "Bachelor of Engineering (BE), Computer Science Engineering",
    institution: "Basaveshwar Engineering College",
    year: "Graduated with Honors"
  }
};

export const HERO_METRICS = [
  {
    value: "10,000+",
    label: "Monthly Clinical Reminders",
    sub: "AWS Lambda via Email, SMS & WhatsApp",
    color: "teal"
  },
  {
    value: "2 → 9",
    label: "Auto-scaled Containers",
    sub: "Dynamically scaling at 70% CPU / 10k req/min",
    color: "cyan"
  },
  {
    value: "3.5+",
    label: "Years in Production",
    sub: "Live 24/7 Hospital Environments",
    color: "amber"
  },
  {
    value: "12+",
    label: "Core Modules Shipped",
    sub: "From OPD/IPD to Video & Billing",
    color: "emerald"
  }
];

export const HMS_MODULES: ProjectModule[] = [
  {
    id: "opd-management",
    name: "OPD",
    category: "clinical",
    shortDesc: "Out Patient Department queue, triage, vitals logging, and token call-outs.",
    details: "Streamlines patient check-in, token generation, vitals recording, and live queue updates for consultation rooms, drastically shortening waiting room turnaround.",
    iconName: "Stethoscope",
    tech: ["React.js", "AppSync", "Redis Cache", "TypeScript"],
    metrics: "Reduced patient waiting room turnaround"
  },
  {
    id: "emergency-dept",
    name: "ED",
    category: "clinical",
    shortDesc: "Emergency Department high-priority trauma intake, triage tags, and doctor dispatch.",
    details: "Zero-latency priority workflow for critical emergencies. Provides rapid-access patient history and immediate resource locking across crash carts and OT availability.",
    iconName: "Activity",
    tech: ["React Native", "AWS SNS/SQS", "AppSync", "PostgreSQL"],
    metrics: "Zero-delay trauma triage dispatch"
  },
  {
    id: "ipd-management",
    name: "IP",
    category: "clinical",
    shortDesc: "In-Patient Department bed allocation, ward telemetry, and admission/discharge.",
    details: "Manages bed mapping across wards/ICUs, automated discharge summary generation, and real-time nursing task assignments.",
    iconName: "BedDouble",
    tech: ["React.js", "PostgreSQL", "GraphQL", "AWS Lambda"],
    metrics: "Unified ward bed status & discharge protocol"
  },
  {
    id: "pharmacy-mgmt",
    name: "Pharma",
    category: "operations",
    shortDesc: "Pharmacy Department inventory, batch expiration alerts, and POS dispensing.",
    details: "Monitors drug inventory across central pharmacy and department sub-stores with automated low-stock warnings, batch expiration tracking, and e-prescription sync.",
    iconName: "Pill",
    tech: ["React.js", "TypeScript", "GraphQL", "PostgreSQL"],
    metrics: "Real-time stock audits & auto re-ordering"
  },
  {
    id: "diagnostics-mgmt",
    name: "Diagnosis",
    category: "clinical",
    shortDesc: "Diagnostics Department lab test orders, imaging sync, and report dispatch.",
    details: "Integrated diagnostic order workflows connecting physicians with pathology, radiology, and lab equipment with instant digital report generation and patient delivery.",
    iconName: "Search",
    tech: ["React.js", "AWS S3", "AppSync", "TypeScript"],
    metrics: "Sub-minute digital report generation"
  },
  {
    id: "billing-refunds",
    name: "Accounts Analytics",
    category: "operations",
    shortDesc: "Accounts & Billing dynamic invoices, GST/tax splits, and revenue velocity.",
    details: "Constructed financial tracking modules, itemized bill summaries, ledger reconciliation, and instant refund receipt generators for hospital accounting teams.",
    iconName: "Receipt",
    tech: ["React.js", "TypeScript", "PostgreSQL", "Lambda"],
    metrics: "Zero-error accounting & audit trail"
  },
  {
    id: "appointment-booking",
    name: "Appointment Booking",
    category: "clinical",
    shortDesc: "Doctor slot scheduling & multi-department calendar synchronization.",
    details: "Built with React Native & AppSync GraphQL subscriptions to handle concurrent slot reservations, prevent double-bookings, and instantly sync doctor availability.",
    iconName: "CalendarCheck",
    tech: ["React Native", "GraphQL Subscriptions", "AWS AppSync", "TypeScript"],
    metrics: "Instant sub-second sync across mobile & web"
  },
  {
    id: "treatment-plans",
    name: "Treatment Plans",
    category: "clinical",
    shortDesc: "Clinical diagnostic pathways, structured prescriptions, and doctor round logs.",
    details: "Shipped comprehensive treatment plan builder enabling clinicians to assign multi-stage clinical protocols, follow-ups, and dosage timelines with automatic drug conflict checks.",
    iconName: "FileCheck",
    tech: ["React.js", "TypeScript", "AppSync", "PostgreSQL"],
    metrics: "Shipped new module adopted hospital-wide"
  },
  {
    id: "video-calling",
    name: "Teleconsultation & Video",
    category: "communication",
    shortDesc: "HIPAA-compliant HD video consultations between doctors and remote patients.",
    details: "Integrated WebRTC & third-party SDKs with AWS infrastructure for low-latency, encrypted multi-party telemedicine consults with synchronized clinical notes.",
    iconName: "Video",
    tech: ["React Native", "WebRTC SDK", "AWS Lambda", "GraphQL"],
    metrics: "End-to-end encrypted video streaming"
  },
  {
    id: "patient-chat",
    name: "Patient-Doctor Chat",
    category: "communication",
    shortDesc: "Secure, E2EE messaging workflows with rich attachments and voice memos.",
    details: "Real-time bi-directional messaging with offline support powered by AWS Amplify DataStore and client-side encryption keys.",
    iconName: "MessageSquare",
    tech: ["React Native", "Amplify DataStore", "AWS AppSync", "E2EE"],
    metrics: "100% offline-ready chat synchronization"
  },
  {
    id: "notification-engine",
    name: "Automated Notifications",
    category: "communication",
    shortDesc: "Omnichannel notification pipeline for appointment reminders & lab reports.",
    details: "Scalable event-driven pipeline on AWS Lambda, SNS, and SQS delivering 10,000+ monthly reminders via Email, SMS, and WhatsApp with delivery status webhooks.",
    iconName: "BellRing",
    tech: ["AWS Lambda", "AWS SNS/SQS", "Twilio / WhatsApp API", "Node.js"],
    metrics: "10,000+ reminders dispatched per month"
  },
  {
    id: "doctor-availability",
    name: "Doctor Rostering",
    category: "operations",
    shortDesc: "Dynamic on-call schedules, shift management, and leave approval workflows.",
    details: "Automated schedule builder handling complex physician rotation shifts, locum coverage, and emergency standby alerts.",
    iconName: "Clock",
    tech: ["React Native", "React.js", "AppSync", "TypeScript"],
    metrics: "Multi-department shift coordination"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sde-2",
    role: "Senior Software Engineer",
    company: "URNEEDS",
    location: "Mysore, IN",
    period: "Feb 2024 — Present",
    isCurrent: true,
    keyMetric: "Auto-scaled 2→9 Docker containers @ 70% CPU / 10k req/min",
    highlights: [
      "Architect and develop a multi-module Hospital Management System (HMS) across mobile (React Native) and web (React.js) with TypeScript, GraphQL, and AWS.",
      "Engineered client-side End-to-End Encryption (E2EE) for sensitive patient health records, teleconsultation streams, and doctor-patient chats.",
      "Design GraphQL schemas, AppSync resolvers, and AWS-based cloud architectures in close collaboration with backend and DevOps teams.",
      "Led UI and workflow integration for OPD, IPD, and Emergency Department (ED) modules; shipped the Treatment Plan module, boosting clinical workflow efficiency.",
      "Developed Metrics Tracking and Refund Receipt modules, enhancing hospital financial reporting, auditability, and operational visibility.",
      "Implemented secure, HIPAA-compliant messaging workflows, and integrated real-time notifications and video calling using AWS services and 3rd-party SDKs.",
      "Provisioned cloud infrastructure as code (IaC) using AWS CDK, with PostgreSQL for persistence and Redis for horizontal caching of network calls, cutting redundant API requests.",
      "Architected auto-scaling Docker container infrastructure behind an AWS Application Load Balancer: scales dynamically from 2 to 9 containers during traffic surges (70% CPU or 10,000+ req/min), and down to 1–2 containers off-peak.",
      "Configured time-based scaling schedules (2–9 containers during 7 AM–9 PM peak hours, 1–2 overnight) to balance performance with cloud infrastructure cost.",
      "Provided 24/7 DevOps support — CI/CD deployments, production monitoring, and incident resolution — to keep the platform reliable for live hospital operations."
    ],
    stack: [
      "React Native",
      "React.js",
      "TypeScript",
      "E2E Encryption (AES-256)",
      "GraphQL",
      "AWS AppSync",
      "AWS CDK",
      "AWS Lambda",
      "Docker",
      "PostgreSQL",
      "Redis",
      "SNS / SQS"
    ]
  },
  {
    id: "sde-1",
    role: "Software Engineer",
    company: "URNEEDS",
    location: "Mysore, IN",
    period: "Dec 2022 — Feb 2024",
    isCurrent: false,
    keyMetric: "10,000+ monthly clinical reminders via AWS Lambda",
    highlights: [
      "Built an event-driven AWS Lambda notification engine delivering 10,000+ monthly appointment reminders via Email, SMS, and WhatsApp.",
      "Developed scalable, modular UI components for Invoice Generation, Bill Summaries, Tax Management, and Inventory/Item Management workflows used in daily hospital operations.",
      "Contributed to Appointment Booking, Doctor Availability, and Patient Communication modules from the ground up using React Native, AWS AppSync, and GraphQL subscriptions.",
      "Implemented real-time data synchronization using AWS AppSync and Amplify DataStore, integrated REST APIs, and drastically improved mobile/tablet responsiveness, cutting UI-related support tickets."
    ],
    stack: [
      "React Native",
      "React.js",
      "TypeScript",
      "AWS Lambda",
      "AWS Amplify",
      "AWS AppSync",
      "GraphQL Subscriptions",
      "REST APIs",
      "Material UI"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Specialized in cross-platform mobile and web applications with bulletproof state management and polished UI.",
    skills: [
      { name: "React Native", level: "expert", tag: "Mobile" },
      { name: "React.js", level: "expert", tag: "Web" },
      { name: "TypeScript", level: "expert", tag: "Core" },
      { name: "End-to-End Encryption (E2EE)", level: "expert", tag: "Security" },
      { name: "JavaScript (ES6+)", level: "expert", tag: "Core" },
      { name: "HTML5 / Modern CSS", level: "expert", tag: "Styling" },
      { name: "Tailwind CSS", level: "advanced", tag: "Styling" },
      { name: "Material UI", level: "advanced", tag: "Components" },
      { name: "Responsive UI/UX", level: "expert", tag: "Design" }
    ]
  },
  {
    title: "Cloud & Backend Architecture",
    icon: "Cloud",
    description: "Architecting serverless, GraphQL, and microservices cloud pipelines for mission-critical enterprise systems.",
    skills: [
      { name: "GraphQL & Schemas", level: "expert", tag: "API" },
      { name: "AWS AppSync", level: "expert", tag: "Cloud API" },
      { name: "AWS Lambda", level: "expert", tag: "Serverless" },
      { name: "AWS Amplify", level: "advanced", tag: "Mobile Cloud" },
      { name: "AWS SNS & SQS", level: "advanced", tag: "Messaging" },
      { name: "AWS CDK", level: "advanced", tag: "IaC" },
      { name: "PostgreSQL", level: "advanced", tag: "Database" },
      { name: "Redis Caching", level: "advanced", tag: "Performance" },
      { name: "RESTful APIs", level: "expert", tag: "Integration" }
    ]
  },
  {
    title: "Security, DevOps & Infrastructure",
    icon: "Shield",
    description: "Cryptographic key exchange, container orchestration, high availability, and HIPAA standards.",
    skills: [
      { name: "HIPAA Security Architecture", level: "expert", tag: "Security" },
      { name: "AES-256-GCM / WebCrypto", level: "expert", tag: "Crypto" },
      { name: "Docker & Containers", level: "advanced", tag: "Infra" },
      { name: "Auto-scaling ALB", level: "advanced", tag: "AWS" },
      { name: "CI/CD & Monitoring", level: "advanced", tag: "Reliability" }
    ]
  },
  {
    title: "Tools & Engineering Practices",
    icon: "Cpu",
    description: "Rigorous software craft, agile execution, and collaboration across product and clinical stakeholders.",
    skills: [
      { name: "Git & Version Control", level: "expert", tag: "Tools" },
      { name: "Jira / Atlassian", level: "advanced", tag: "Agile" },
      { name: "VS Code / WebStorm", level: "expert", tag: "IDE" },
      { name: "Code Reviews", level: "expert", tag: "Quality" },
      { name: "Sprint Planning", level: "expert", tag: "Leadership" },
      { name: "Performance Profiling", level: "advanced", tag: "Optimization" },
      { name: "Software Testing", level: "advanced", tag: "QA" }
    ]
  }
];
