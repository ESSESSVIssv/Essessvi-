/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Tractor, 
  Briefcase, 
  GraduationCap, 
  Code, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Search,
  Users,
  Target,
  Brain,
  Rocket,
  Cpu,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  Activity,
  Layers,
  FileText,
  Compass,
  ArrowRight
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "V. ESSESSVI",
  firstName: "ESSESSVI",
  role: "Junior Product Management / APM Candidate",
  targetRoles: "Product Management Intern · Associate Product Manager · Junior PM",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, India",
  linkedin: "https://www.linkedin.com/in/essessvi-vadlamudi-ab2590273",
  github: "https://github.com/dashboard",
  resume: "/resume",
  website: "https://essessvi.vercel.app",
  headline: "Building products around real user problems.",
  supportingText: "Product-focused CSE graduate with hands-on experience in user research, AI-powered products, workflow automation, and product thinking. I enjoy understanding how people actually experience a problem and turning those insights into simple, useful product solutions.",
  bio: "Product-focused Computer Science graduate with hands-on experience in user research, AI-powered products, workflow automation, and product thinking. Rather than starting with features or code, I focus on how users experience friction in their daily lives, map out their journey, and design practical, high-utility solutions. I bridge user empathy with technical literacy—collaborating effectively with engineers while keeping the user at the center. I am actively seeking a Product Management Internship or Associate Product Manager (APM) role."
};

export const CORE_CAPABILITIES = [
  "Product Discovery",
  "User Research",
  "Product Thinking",
  "AI Products",
  "User Journey Mapping",
  "Prototyping"
];

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "B.Tech in Computer Science & Engineering",
    score: "CGPA: 7.17",
    period: "Sept 2022 – Apr 2026",
    description: "Coursework in Software Engineering, Data Structures, Human-Computer Interaction, and Systems Design. Organized university-level events and community outreach programs."
  },
  {
    institution: "Govt. Jr. College, Vadamalapet, Chittoor",
    degree: "Intermediate (MPC)",
    score: "542 marks",
    period: "Mar 2020 – Aug 2022",
    description: "Mathematics, Physics, and Chemistry."
  },
  {
    institution: "Camford English High School, Chittoor",
    degree: "Secondary School Certificate (SSC)",
    score: "416 marks",
    period: "Apr 2008 – May 2020",
    description: "Foundational education."
  }
];

export const EXPERIENCE = [
  {
    company: "AgentRoomAI",
    title: "Intern AI Workflow Engineer",
    role: "Internship",
    period: "Dec 2025 – Apr 2026",
    summary: "Analyzed conversational ordering breakdowns and designed automated conversational workflows to eliminate customer ordering friction.",
    points: [
      "Identified customer challenges in the ordering process, including incomplete orders, ambiguous messages, delayed confirmations, and repetitive support inquiries.",
      "Designed structured conversational dialog flows to make customer ordering faster, simpler, and less prone to user drop-off.",
      "Integrated AI intent classification with deterministic validation rules to parse customer intent and generate relevant real-time confirmations.",
      "Automated repetitive customer WhatsApp interactions to reduce manual operator effort and improve response handling consistency.",
      "Identified critical edge cases (topic shifts, partial information, rapid duplicate requests) and iterated workflows to create a dependable customer experience.",
      "Tested conversational flows and refined system prompts based on observed customer interaction patterns."
    ],
    productSkills: [
      "Customer Problem Identification",
      "Conversational UX Design",
      "Workflow & Journey Mapping",
      "Edge-Case Analysis",
      "AI Prompt Engineering",
      "User Intent Modeling"
    ]
  },
  {
    company: "SpareXChange",
    title: "Product Lead & Developer",
    role: "Product Concept & Prototype",
    period: "Jan 2025 – Mar 2025",
    summary: "Spearheaded the product conception, user journey mapping, feature prioritization, and prototype development for a dual-sided automotive spare-parts marketplace.",
    points: [
      "Conducted market analysis and identified key friction points in the fragmented offline automobile spare-parts purchasing process.",
      "Mapped end-to-end user journeys for both individual car owners seeking verified parts and local mechanics sourcing inventory.",
      "Scoped and prioritized the MVP feature set using Value vs. Effort frameworks, focusing strictly on resolving the market trust deficit.",
      "Designed and implemented a secure QR-based payment handoff flow with OTP verification to ensure part inspection prior to fund release.",
      "Built a centralized dashboard for parts suppliers to lower onboarding barriers and simplify listing management.",
      "Validated transaction workflows and usability through peer prototype walkthroughs and iterative flow adjustments."
    ],
    productSkills: [
      "Product Discovery",
      "Market Research",
      "User Journey Mapping",
      "MVP Scoping",
      "Feature Prioritization",
      "Trust & Safety Mechanisms"
    ]
  }
];

export const CLUBS = [
  {
    title: "National Service Scheme (NSS)",
    role: "Coordinator & Member",
    company: "University Leadership",
    period: "2022 – 2026",
    description: "Led student groups in community outreach, literacy initiatives, and environmental health campaigns.",
    points: [
      "Facilitated multi-stakeholder collaboration between university administration, local community leaders, and student volunteers.",
      "Managed event logistics, volunteer scheduling, and on-ground campaign execution."
    ],
    tools: ["Stakeholder Management", "Team Leadership", "Community Outreach"]
  },
  {
    title: "Echo Club",
    role: "Member",
    company: "Campus Sustainability",
    period: "2024 – 2025",
    description: "Active contributor to campus sustainability drives and eco-friendly operational awareness.",
    points: [
      "Collaborated with cross-functional student teams to execute resource conservation and waste reduction initiatives on campus."
    ],
    tools: ["Cross-functional Teamwork", "Event Execution"]
  }
];

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the user's context, constraints, and environment before jumping to any solution.",
    icon: Search
  },
  {
    number: "02",
    title: "Discover",
    description: "Use contextual observation, direct conversations, research, and qualitative evidence to identify behavioral patterns.",
    icon: Compass
  },
  {
    number: "03",
    title: "Define",
    description: "Synthesize field observations and pain points into a crisp, actionable product problem statement.",
    icon: Target
  },
  {
    number: "04",
    title: "Prioritize",
    description: "Decide which problems and features matter most using value vs. complexity trade-offs.",
    icon: Layers
  },
  {
    number: "05",
    title: "Build",
    description: "Create the simplest useful solution or prototype to test the core hypothesis with minimal overhead.",
    icon: Rocket
  },
  {
    number: "06",
    title: "Validate",
    description: "Test assumptions against real user interactions, gather honest feedback, and rapidly iterate.",
    icon: CheckCircle
  }
];

export const PRODUCT_SKILLS = [
  {
    category: "Product",
    skills: [
      "User Research",
      "Product Discovery",
      "Product Thinking",
      "User Journey Mapping",
      "Problem Framing",
      "Feature Prioritization",
      "Initial Product Scope",
      "Market Research",
      "Competitor Analysis",
      "Product Prototyping"
    ]
  },
  {
    category: "AI / Technical",
    skills: [
      "AI Products",
      "LLMs",
      "OpenAI",
      "Gemini API",
      "Prompt Engineering",
      "Workflow Automation",
      "WhatsApp Business API",
      "API Integration"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Aha! Product Management Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "May 27, 2026",
    note: "Structured Product Management learning supporting practical product work."
  },
  {
    title: "IBM Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Dec 2025",
    note: "Data literacy and core analysis concepts"
  },
  {
    title: "Acquiring Data – AI Fundamentals",
    issuer: "IBM / AI Education",
    date: "Nov 2024",
    note: "Data ingestion, preparation, and AI fundamentals"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Dec 2023",
    note: "Cloud computing infrastructure principles"
  }
];

export const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/work" },
  { name: "RESEARCH", href: "/research" },
  { name: "TEARDOWNS", href: "/teardowns" },
  { name: "ABOUT", href: "/about" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACT", href: "/contact" }
];
