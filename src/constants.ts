/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
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
  Globe
} from 'lucide-react';
import arimaImg from './assets/images/regenerated_image_1777976972209.png';
import sparexchangeImg from './assets/images/regenerated_image_1777977231180.png';

export const PERSONAL_INFO = {
  name: "ESSESSVI VADLAMUDI",
  firstName: "ESSESSVI",
  role: "Aspiring Product Manager | AI Workflow Engineer",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/essessvi-vadlamudi-ab2590273",
  github: "https://github.com/vessessvi",
  resume: "/resume.pdf",
  bio: "I’m a Computer Science & Engineering student at The Apollo University with an interest in Product Management and AI. I like working on projects that combine technology, user experience, and problem-solving to build practical and useful products."
};

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "Bachelor of Technology, computer science and engineering",
    period: "Sept 2022 - April 2026",
    description: "Focused on bridging technical execution with product strategy."
  },
  {
    institution: "Sri Chaitanya College of Education",
    degree: "Higher Secondary Education",
    period: "March 2020 - August 2022",
    description: ""
  },
  {
    institution: "CAMFORD",
    degree: "Primary & Secondary Education",
    period: "April 2008 - May 2020",
    description: ""
  }
];

export const EXPERIENCE = [
  {
    title: "AgentRoomAI",
    role: "AI Workflow Engineer",
    company: "AgentRoomAI",
    period: "Dec 2025 – April 2026",
    description: "Designed and developed an AI-powered WhatsApp automation system using n8n and OpenAI.",
    points: [
      "Integrated OpenAI's language model for intelligent response generation.",
      "Connected WhatsApp Business API for real-time customer communication.",
      "Built end-to-end workflows including message triggering, AI agent processing, and order parsing.",
      "Automated confirmations and deployed intelligent systems in a real-world environment."
    ],
    tools: ["n8n", "WhatsApp API", "OpenAI", "Workflow Engineering"]
  },
  {
    title: "SpareXChange: Automobile Marketplace",
    role: "Product Lead & Developer",
    company: "Apollo University (Project)",
    period: "Jan 2025 – Mar 2025",
    description: "End-to-end development of a dual-sided marketplace for new and used automobile spare parts.",
    points: [
      "Designed full product lifecycle from user journey mapping to automated order fulfillment.",
      "Implemented QR-based payment flow with OTP-secured transaction confirmation.",
      "Built a unified admin dashboard to monitor inventory and transaction metrics."
    ],
    tools: ["Google AI Studio", "Gemini API", "Product Logic"]
  }
];

export const PROJECTS = [
  {
    title: "AI WhatsApp Agent",
    subtitle: "Automated Support & Logistics",
    description: "Reduced manual order processing effort by 70% through AI-powered automation workflows. Integrated real-time parsing for commerce operations.",
    tools: ["n8n", "WhatsApp Business API", "OpenAI", "NLP"],
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "SpareXchange Marketplace",
    subtitle: "End-to-End E-Commerce",
    description: "A full-scale basic working version of the idea for automobile part sales. Features include secure OTP transactions, real-time inventory tracking, and dynamic pricing.",
    tools: ["Google AI Studio", "Gemini API", "Product Logic"],
    icon: Sparkles,
    image: sparexchangeImg
  },
  {
    title: "Health Forecasting System",
    subtitle: "Predictive Analytics",
    description: "Built a forecasting engine for epidemic detection. Focused on data strategy and predictive accuracy for humanitarian impact.",
    tools: ["Python", "Pandas", "ARIMA", "Data Analysis"],
    icon: TrendingUp,
    image: arimaImg
  }
];

export const SKILLS = [
  { 
    category: "Product Management", 
    items: ["Product Strategy", "Market Research", "User Personas", "Basic version of the idea Definition", "Roadmapping", "Stakeholder Management", "Agile Methodology"] 
  },
  { 
    category: "Technical Stack", 
    items: ["Python", "Pandas", "ARIMA", "Google AI Studio", "Gemini API", "n8n Automation", "API Integration", "Prompt Engineering"] 
  },
  { 
    category: "Data & Strategy", 
    items: ["Data Analysis", "Metric Tracking", "Competitor Benchmarking", "User Journey Mapping", "Logic Modeling"] 
  },
  { 
    category: "Soft Skills", 
    items: ["Customer Relationship Management", "Public Relations", "Advertising", "Problem Solving", "Stakeholder Management"] 
  }
];

export const CERTIFICATIONS = [
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Dec 2023"
  },
  {
    title: "IBM Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025"
  },
  {
    title: "Acquiring Data - AI Fundamentals",
    issuer: "Accenture",
    date: "Nov 2024"
  },
  {
    title: "Ethical Hacking",
    issuer: "IIT Hyderabad",
    date: "Oct 2023"
  }
];

export const CLUBS = [
  {
    name: "NSS (National Service Scheme)",
    role: "Coordinator & Member",
    period: "2022 - 2026"
  },
  {
    name: "Echo Club",
    role: "Member",
    period: "2024 - 2026"
  }
];

export const ACHIEVEMENTS = [
  "Gold Medal, Hindi Olympiad 2019",
  "NSS Coordinator and Member",
  "ASER 2024 Volunteer",
  "Google Cloud Skillboosts Certified"
];

export const SERVICES = [
  { 
    title: "AI Product Strategy", 
    icon: Target,
    description: "Architecting high-conversion AI roadmaps that bridge market gaps and drive scalable user value."
  },
  { 
    title: "Workflow Automation", 
    icon: Zap,
    description: "Eliminating operational bottlenecks by engineering intelligent autonomous systems and n8n pipelines."
  },
  { 
    title: "Product Research", 
    icon: Search,
    description: "Deep-dive user journey mapping and problem discovery to validate high-impact product hypotheses."
  },
  { 
    title: "AI Assistant Design", 
    icon: Brain,
    description: "Designing conversational interfaces and agents that feel human-centric and solve real-world friction."
  },
  { 
    title: "Process Optimization", 
    icon: Cpu,
    description: "Refining technical execution and logic models to maximize output efficiency and resource allocation."
  },
  { 
    title: "Market Analysis", 
    icon: BarChart3,
    description: "Competitor benchmarking and data-driven insights to position products for maximum technical edge."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Stack", href: "/stack" },
  { name: "Vision", href: "/vision" },
  { name: "Work", href: "/work" },
  { name: "Journey", href: "/journey" },
  { name: "Awards", href: "/awards" },
  { name: "Resume", href: "/resume" },
  { name: "Services", href: "/services" },
  { name: "Connect", href: "/connect" }
];
