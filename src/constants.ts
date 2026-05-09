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
  Rocket
} from 'lucide-react';
import arimaImg from './assets/images/regenerated_image_1777976972209.png';
import sparexchangeImg from './assets/images/regenerated_image_1777977231180.png';

export const PERSONAL_INFO = {
  name: "V.ESSESSVI",
  firstName: "V.ESSESSVI",
  role: "AI Product Builder | Product Strategy | Market Research",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, Andhra Pradesh",
  linkedin: "https://www.linkedin.com/in/essessvi-vadlamudi",
  github: "https://github.com/vessessvi",
  resume: "/resume.pdf",
  bio: "I’m a Computer Science & Engineering student at The Apollo University with an interest in Product Management and AI. I like working on projects that combine technology, user experience, and problem-solving to build practical and useful products. Phone: 9392964456"
};

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 - 2026",
    description: "Specializing in Product Management and AI Systems. GPA: 8.5 (Current)."
  }
];

export const EXPERIENCE = [
  {
    title: "AI Chatbot Infrastructure",
    role: "AI Developer Intern",
    company: "AgentRoom AI",
    period: "Dec 2025 – Present",
    description: "Developing automated customer support and transaction workflows using low-code AI systems.",
    points: [
      "Built an AI-powered WhatsApp agent reducing customer query response time by 80%.",
      "Engineered an automated food order parser handling 50+ concurrent requests with zero latency.",
      "Optimized multi-user support workflows using n8n and OpenAI API integration."
    ],
    tools: ["n8n", "WhatsApp API", "OpenAI", "NLP", "API Integration"]
  },
  {
    title: "SpareXChange: Automobile Marketplace",
    role: "Product Lead & Developer",
    company: "Apollo University (Project)",
    period: "Jan 2025 – Mar 2025",
    description: "End-to-end development of a dual-sided marketplace for new and used automobile spare parts.",
    points: [
      "Designed full product lifecycle from user journey mapping to automated order fulfillment.",
      "Implemented QR-based payment flow with OTP-secured transaction confirmation for secure checkout.",
      "Built a unified admin dashboard to monitor inventory and transaction metrics in real-time."
    ],
    tools: ["Google AI Studio", "Auth", "Payment Gateways", "UX Design"]
  },
  {
    title: "Epidemic Trend Forecasting",
    role: "Core Team Member",
    company: "Research Project",
    period: "Oct 2024 – Dec 2024",
    description: "Utilized predictive modeling to forecast disease outbreaks based on historical WHO data.",
    points: [
      "Achieved 90% accuracy in short-term trend prediction using ARIMA time-series models.",
      "Processed 10k+ rows of raw WHO data into structured formats for technical analysis.",
      "Presented data-driven insights to stakeholders for public health awareness."
    ],
    tools: ["Python", "Pandas", "ARIMA", "Statsmodels", "Data Visualization"]
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
  { title: "Product Strategy & Consulting", icon: Target },
  { title: "AI-Powered Product Development", icon: Rocket },
  { title: "Market & Competitor Research", icon: Search },
  { title: "Customer Communication Automation", icon: Brain }
];

export const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#vision" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJ", href: "#projects" },
  { name: "EXP", href: "#experience" },
  { name: "CERTI", href: "#certifications" },
  { name: "CONTACT", href: "#contact" }
];
