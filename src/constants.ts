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
  bio: "Aspiring Product Manager with hands-on experience in AI-powered products, workflow automation, product discovery, and user-focused product development. Experienced in market research, user journey mapping, product strategy, API integrations, and translating real-world problems into practical product solutions. Interested in building simple, scalable, and user-centric AI products that solve meaningful problems."
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
  },
  {
    company: "Epidemic Trend Forecasting",
    title: "Core Team Member",
    role: "Project",
    period: "Oct 2024 - Dec 2024",
    description: "Developed predictive models to support data-driven public health research and forecasting.",
    points: [
      "Processed and cleaned 10,000+ rows of WHO public health data for analysis.",
      "Developed an ARIMA time-series forecasting model to predict epidemic trends.",
      "Achieved nearly 90% accuracy in short-term outbreak prediction.",
      "Performed data preprocessing, trend analysis, and predictive modelling using Python.",
      "Built the project to support data-driven public health research and forecasting."
    ],
    tools: ["Python", "ARIMA", "Data Analysis", "Predictive Modeling"]
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
    title: "AgentRoomAI",
    subtitle: "AI Workflow Engineer",
    description: "An intelligent WhatsApp agent designed to automate customer interactions and streamline order processing in real-time.",
    problem: "Manual order processing was slow, error-prone, and required constant human intervention.",
    solution: "Built a conversational AI agent using n8n and OpenAI to handle queries, parse orders, and trigger fulfillment workflows.",
    impact: "Reduced manual processing effort by 70% and decreased average response time from hours to seconds.",
    tools: ["n8n", "WhatsApp API", "OpenAI", "NLP"],
    role: "Intern",
    status: "Live",
    icon: MessageSquare,
    link: "#"
  },
  {
    title: "SpareXChange",
    subtitle: "Product Lead & Developer",
    description: "An end-to-end e-commerce marketplace prototype designed specifically for new and used automobile spare parts.",
    problem: "Finding reliable, verified spare parts is fragmented and lacks secure transaction mechanisms.",
    solution: "Mapped out the full user journey and implemented a QR-based payment flow with OTP confirmation for secure handoffs.",
    impact: "Successfully validated the dual-sided marketplace model and established a unified inventory dashboard.",
    tools: ["Google AI Studio", "Gemini API", "Product Logic", "Journey Mapping"],
    role: "Product Lead & Developer",
    status: "Prototype",
    icon: Sparkles,
    link: "https://sparexchange-tau.vercel.app"
  },

  {
    title: "Epidemic Trend Forecasting",
    subtitle: "Core Team Member",
    description: "A time-series forecasting engine utilizing historical data to predict and map future disease outbreaks.",
    problem: "Healthcare responses are often reactive due to unpredictable epidemic patterns.",
    solution: "Preprocessed 10,000+ data points and tuned ARIMA models to establish a reliable predictive baseline.",
    impact: "Achieved high predictive accuracy (MAE: 45.32), laying the groundwork for adaptive healthcare resource allocation.",
    tools: ["Python", "ARIMA", "Data Strategy", "Predictive Analytics"],
    role: "Core Researcher",
    status: "Completed",
    icon: TrendingUp,
  }
];
export const SKILLS = [
  { 
    category: "Product Management", 
    items: ["Product Management", "Product Strategy", "Product Lifecycle Management (PLM)", "User Journey Mapping", "Market Research", "Competitor Analysis", "Feature Prioritization", "Project Management"] 
  },
  { 
    category: "AI & Tools", 
    items: ["n8n", "OpenAI", "Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering", "Workflow Automation"] 
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
