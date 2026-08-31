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
  Globe
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "V.ESSESSVI",
  firstName: "ESSESSVI",
  role: "Recent B.Tech CSE Graduate | Aspiring Product Manager",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, India",
  linkedin: "https://www.linkedin.com/in/essessvi-vadlamudi-ab2590273",
  github: "https://github.com/dashboard",
  resume: "/resume.pdf",
  website: "https://essessvi.vercel.app",
  bio: "I am a recent B.Tech CSE graduate and Aspiring Product Manager with hands-on experience in AI-powered products, workflow automation, and user-focused product development. From building AI WhatsApp agents to developing product strategies for JobLens and SpareXChange, I translate real-world problems into practical solutions. I am currently seeking a Product Management Internship."
};

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "B.Tech in Computer Science — CGPA: 7.17",
    period: "Sept 2022 - April 2026",
    description: ""
  },
  {
    institution: "GOVT. JR. COLLEGE, VADAMALAPET, Chittoor",
    degree: "Intermediate — 542 marks",
    period: "March 2020 - August 2022",
    description: ""
  },
  {
    institution: "Camford English High School, Chittoor",
    degree: "SSC — 416 marks",
    period: "April 2008 - May 2020",
    description: ""
  }
];

export const EXPERIENCE = [
  {
    company: "AgentRoomAI",
    title: "AI Workflow Engineer",
    role: "Intern",
    period: "Dec 2025 - April 2026",
    description: "Built end-to-end AI agent workflows for automated customer interactions and order processing.",
    points: [
      "Integrated OpenAI language models to generate intelligent, real-time customer responses.",
      "Connected AI systems with the WhatsApp Business API for seamless customer communication.",
      "Built end-to-end AI agent workflows for automated customer interactions and order processing.",
      "Streamlined operations by automating message handling, confirmations, and workflow execution, reducing manual effort and improving efficiency."
    ],
    tools: ["OpenAI", "WhatsApp Business API", "Workflow Automation"]
  },
  {
    company: "SpareXChange",
    title: "Product Lead & Developer",
    role: "Project",
    period: "Jan 2025 - Mar 2025",
    description: "Owned the end-to-end product lifecycle of an automobile marketplace platform.",
    points: [
      "Owned the end-to-end product lifecycle of an automobile marketplace platform.",
      "Conducted market research and competitor analysis to identify user needs and product opportunities.",
      "Designed user journeys and optimized the buying experience across the platform.",
      "Built a centralized admin dashboard for inventory and transaction management.",
      "Implemented a secure QR-based payment system with OTP verification for safe transactions.",
      "Collaborated on feature planning and prioritized product improvements to enhance usability and growth."
    ],
    tools: ["Product Lifecycle Management", "Market Research", "User Journey Mapping"]
  }
];

export const CLUBS = [
  {
    title: "National Service Scheme (NSS)",
    role: "Coordinator & Member",
    company: "Clubs & Organizations",
    period: "2022 – 2026",
    description: "Organized and participated in community service initiatives and social awareness campaigns.",
    points: [
      "Led student groups in organizing community outreach and environmental campaigns.",
      "Facilitated collaboration between university administration and student volunteers."
    ],
    tools: ["Leadership", "Event Coordination", "Community Service"]
  },
  {
    title: "Echo Club",
    role: "Member",
    company: "Clubs & Organizations",
    period: "2024 – 2025",
    description: "Active member contributing to environmental conservation and awareness programs.",
    points: [
      "Participated in sustainability drives and eco-friendly campus initiatives.",
      "Collaborated with team members to execute awareness events."
    ],
    tools: ["Teamwork", "Sustainability", "Public Awareness"]
  }
];

export const PROJECTS = [
  {
    title: "AI WhatsApp Agent",
    subtitle: "AI-Powered Customer Automation",
    description: "An AI product automation solution designed to eliminate manual customer support and streamline order logistics.",
    problem: "Manual order processing was slow, error-prone, and caused significant friction for both business operators and end-customers waiting for responses.",
    user: "Small-to-medium business owners burdened by manual logistics, and customers seeking instant support.",
    solution: "Designed a conversational AI agent flow that parses intent, handles queries, and triggers automated fulfillment sequences in real-time.",
    product_decision: "Prioritized WhatsApp as the interface to meet users where they already are. Chose an orchestrator (n8n) and OpenAI to securely parse order details without hallucination risks, ensuring a scalable product flow.",
    impact: "Reduced manual processing effort significantly and decreased average response time from hours to seconds.",
    tools: ["WhatsApp API", "OpenAI", "n8n", "Prompt Engineering"],
    role: "AI Workflow Engineer (Intern)",
    status: "Live",
    icon: MessageSquare,
    link: "#"
  },
  {
    title: "SpareXChange",
    subtitle: "Dual-Sided Auto Parts Platform",
    description: "An end-to-end e-commerce marketplace prototype designed to solve the discovery and trust problems in the automobile spare parts market.",
    problem: "Finding reliable, verified spare parts is a highly fragmented experience that lacks transparency and secure transaction mechanisms.",
    user: "Automobile owners needing affordable parts, and local mechanics looking to reliably source specific inventory.",
    solution: "Mapped out the full user journey and implemented a structured marketplace with a secure payment handoff system.",
    product_decision: "Focused the MVP strictly on solving the 'trust deficit' by designing a secure QR-based payment flow with OTP confirmation. Built a centralized dashboard to lower the barrier for supplier inventory management.",
    impact: "Successfully validated the dual-sided marketplace model, user flows, and core transaction logic.",
    tools: ["Product Discovery", "User Journey Mapping", "Prototyping", "Feature Prioritization"],
    role: "Product Lead & Developer",
    status: "Prototype",
    icon: Sparkles,
    link: "https://sparexchange-tau.vercel.app"
  },
  {
    title: "JobLens",
    subtitle: "AI Job Discovery Assistant",
    description: "A smart application platform that evaluates resume-to-job fit to solve the frustration of low-signal job applications.",
    problem: "Applicants waste hours applying for mismatched roles due to a lack of immediate fit-feedback, leading to application fatigue.",
    user: "Recent graduates and job seekers overwhelmed by high-volume, low-transparency application processes.",
    solution: "Designed user flows and integrated AI to instantly parse resumes against job descriptions, providing job-fit scores.",
    product_decision: "Shifted the product focus away from being just another 'job board' to an AI-driven 'fit-scorer'. Prioritized instant feedback in the user flow to solve the 'resume black hole' anxiety.",
    impact: "Streamlined the application process, empowering candidates to focus their effort solely on high-probability opportunities.",
    tools: ["Product Strategy", "AI Products", "UX Flow", "LLMs"],
    role: "Product Planning & UX",
    status: "Prototype",
    icon: Briefcase,
    link: "https://joblens-ten.vercel.app/"
  },
  {
    title: "FarmerToken",
    subtitle: "Digital Agricultural Procurement Platform",
    description: "A dual-sided digital procurement platform designed to reduce factory waiting times and improve grading and payment transparency for farmers.",
    problem: "Farmers often arrive at factories without knowing available processing capacity, causing long queues and wasted time. Manual grading and payment handling lack transparency, making final payments difficult for farmers to understand.",
    user: "Farmers needing to deliver agricultural produce, and factory admins managing daily processing capacity and intake.",
    solution: "Digitized the procurement process. Farmers use mobile login to view nearby factory capacity, book delivery slots, and receive digital tokens. Factory admins check in farmers using tokens, record grade-wise weights, and automatically calculate payments.",
    product_decision: "Prioritized a simple mobile-number login and digital token system for farmers to reduce barriers to entry. For admins, automated the complex grading math (A/B/C/Rejected) to instantly generate clear digital receipts, building trust.",
    impact: "Created a scalable prototype that maps the entire agricultural procurement workflow from slot booking to digital receipt generation (Evolving Prototype).",
    tools: ["Product Management", "Dual-Sided Platform", "Workflow Design", "Prototyping"],
    role: "Product Manager & Developer",
    status: "Prototype",
    icon: Tractor,
    link: "https://farmer-token.vercel.app"
  },
  {
    title: "CashKaro Product Teardown",
    subtitle: "UX & Value Proposition Analysis",
    description: "A product teardown identifying friction points in new-user onboarding and product-level value communication.",
    problem: "New users may not immediately grasp the 'shop via us' value proposition, causing potential drop-offs before their first purchase.",
    user: "New customers interacting with the CashKaro platform for the first time.",
    insight: "Observation 1: New-user discovery needs to clarify the 'why' before the 'how'. Observation 2: Displaying generic cashback percentages is less effective than showing concrete, product-specific savings.",
    solution: "Proposed simplifying the onboarding flow to immediately communicate value, and implementing concrete discount calculations directly on product cards.",
    product_decision: "Hypothesized that moving from abstract percentages to tangible currency savings would lower cognitive load and increase activation rates.",
    impact: "Expected impact: Higher new-user activation rates and clearer upfront value communication (Proposed Recommendations).",
    tools: ["Product Teardown", "Product Thinking", "UX Evaluation"],
    role: "Product Analyst",
    status: "Case Study",
    icon: Target,
    link: "#"
  }
];
export const SKILLS = [
  {
     category: "Product Management & Discovery",
     items: ["Product Management", "Product Discovery", "User Research", "Product Strategy", "Product Thinking", "MVP Definition", "Competitive Analysis", "Prototyping"]
   },
  {
     category: "AI & Automation",
     items: ["AI Products", "LLMs", "Prompt Engineering", "AI Automation", "Google AI Studio", "Gemini API", "OpenAI", "n8n"]
   },
  {
     category: "Technical & Other",
     items: ["API Integration", "WhatsApp Business API", "Project Management"]
   },
  {
    category: "Languages",
    items: ["English", "Telugu", "Hindi", "Tamil"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Aha! Product Management Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "May 27, 2026"
  },
  {
    title: "IBM Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Dec 2025"
  },
  {
    title: "Acquiring Data - AI Fundamentals",
    issuer: "Accenture",
    date: "Nov 2024"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "Dec 2023"
  },
  {
    title: "Ethical Hacking in IIT Hyderabad",
    issuer: "IIT Hyderabad",
    date: "Oct 2023"
  }
];

export const SERVICES = [
  { 
    title: "AI Chatbot Development", 
    icon: "Target",
    description: "Architecting high-conversion AI roadmaps that bridge market gaps and drive scalable user value."
  },
  { 
    title: "Business Process Automation", 
    icon: "Zap",
    description: "Eliminating operational bottlenecks by engineering intelligent autonomous systems and n8n pipelines."
  },
  { 
    title: "AI Tool Integration", 
    icon: "Search",
    description: "Deep-dive user journey mapping and problem discovery to validate high-impact product hypotheses."
  },
  { 
    title: "WhatsApp Bot Development", 
    icon: "Brain",
    description: "Designing conversational interfaces and agents that feel human-centric and solve real-world friction."
  },
  { 
    title: "n8n Workflow Building", 
    icon: "Cpu",
    description: "Refining technical execution and logic models to maximize output efficiency and resource allocation."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Awards", href: "/awards" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" }
];
