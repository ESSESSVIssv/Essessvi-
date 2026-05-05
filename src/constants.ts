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

export const PERSONAL_INFO = {
  name: "V.ESSESSVI",
  firstName: "V.ESSESSVI",
  role: "Aspiring Product Manager",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, Andhra Pradesh",
  linkedin: "linkedin.com/in/essessvi-vadlamudi",
  bio: "I am a CSE final year student passionate about solving real-world problems through product thinking. I believe great products come from observing everyday life, not just textbooks."
};

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "B.Tech CSE",
    period: "2022-2026",
    description: "Focusing on computer science fundamentals and product development."
  },
  {
    institution: "Sri Chaitanya Jr College",
    degree: "Intermediate",
    period: "2020-2022"
  },
  {
    institution: "Camford English High School",
    degree: "Schooling",
    period: "2008-2020"
  }
];

export const EXPERIENCE = [
  {
    role: "In-house Project",
    company: "The Apollo University",
    description: "Worked on data collection, cleaning, and demand forecasting using ARIMA model."
  },
  {
    role: "Product Owner",
    company: "SpareXchange",
    description: "Conceptualised a dedicated spare parts marketplace. Designed a unique 50/50 payment model inspired by the real estate industry. Integrated Google Gemini AI for chat. Directed Google AI Studio to build a product."
  },
  {
    role: "AI Product Builder",
    company: "WhatsApp Chatbot",
    description: "Designed and implemented an AI-based WhatsApp chatbot to automate customer communication using NLP and structured workflows."
  }
];

export const PROJECTS = [
  {
    title: "SpareXchange",
    subtitle: "Spare Parts Marketplace",
    description: "Dedicated platform for buying and selling new and used automobile spare parts. Identified a gap in OLX and Amazon. Designed 50/50 payment model inspired by the real estate industry. Integrated Google Gemini AI chat.",
    tools: ["Google AI Studio", "Gemini API"],
    icon: Sparkles
  },
  {
    title: "AI WhatsApp Chatbot",
    description: "Automated customer communication system using NLP. Delivers real-time responses through structured workflows. Reduces response time and minimises human intervention.",
    tools: ["Google AI Studio", "NLP"],
    icon: MessageSquare
  },
  {
    title: "Predicting Trends",
    description: "Demand forecasting model using ARIMA for inventory and operations planning.",
    tools: ["Excel"],
    icon: TrendingUp
  }
];

export const SKILLS = [
  { category: "Product", items: ["Product Thinking", "Market Research", "Competitor Analysis", "User Research", "Problem Identification", "Product Roadmapping", "Agile/Scrum Basics"] },
  { category: "AI & Tech", items: ["Google AI Studio", "Google Gemini API", "NLP Chatbot Development", "AI Prompt Engineering", "MS Excel", "PPT", "Notion"] },
  { category: "Soft Skills", items: ["Storytelling", "Communication", "Leadership", "Decision Making", "Cross-industry Thinking"] }
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
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Vision", href: "#vision" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
