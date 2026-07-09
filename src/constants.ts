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
import joblenceImg from './assets/images/joblence_mockup_1781166249602.png';

export const PERSONAL_INFO = {
  name: "V.ESSESSVI",
  firstName: "ESSESSVI",
  role: "Aspiring Product Manager | Open to Internships",
  email: "vessessvi2005@gmail.com",
  phone: "9392964456",
  location: "Chittoor, India",
  linkedin: "https://www.linkedin.com/in/essessvi-vadlamudi-ab2590273",
  github: "https://github.com/dashboard",
  resume: "/resume.pdf",
  website: "https://essessvi.vercel.app",
  bio: "I am a final-year CSE student who combines product thinking with hands-on execution. From building AI-powered WhatsApp automation workflows to developing SpareXchange and JobLence (an AI job application assistant), I translate problem discovery into high-impact products. Currently seeking Product Management internships and full-time opportunities."
};

export const EDUCATION = [
  {
    institution: "The Apollo University",
    degree: "B.Tech in Computer Science — CGPA: 7.17",
    period: "Sept 2022 - April 2026",
    description: "Focused on bridging technical execution with product strategy."
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
    title: "SpareXChange: Automobile Marketplace",
    role: "Product Lead & Developer",
    company: "SpareXchange",
    period: "Jan 2025 – Mar 2025",
    description: "End-to-end development of a dual-sided marketplace for new and used automobile spare parts.",
    points: [
      "Designed full product lifecycle from user journey mapping to automated order fulfillment.",
      "Implemented QR-based payment flow with OTP-secured transaction confirmation.",
      "Built a unified admin dashboard to monitor inventory and transaction metrics."
    ],
    tools: ["Google AI Studio", "Gemini API", "Product Logic"]
  },
  {
    title: "AI WhatsApp Agent",
    role: "AI Workflow Engineer",
    company: "agentroomai",
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
    title: "JobLence: AI Job Assistant",
    role: "AI Job Application Assistant",
    company: "JobLence",
    period: "Feb 2025 – Present",
    description: "An AI-powered job application assistant designed to evaluate resume-to-job relevance, design seamless applicant user flows, and automate job discovery pipelines.",
    points: [
      "Built an AI-powered platform that matches resumes with relevant job opportunities.",
      "Designed user flows and product features to simplify the job application process.",
      "Automated job discovery and recommendation workflows.",
      "Led product planning, AI integration, and end-to-end development."
    ],
    tools: ["AI Integration", "Product Planning", "Workflow Automation", "User Experience (UX)"]
  },
  {
    title: "Health Forecasting System",
    role: "Core Developer & Thesis Presenter",
    company: "Apollo University (Research Project)",
    period: "Oct 2024 – Dec 2024",
    description: "Designed and developed an epidemic time-series system using ARIMA models to analyze historical records, identify patterns, and map future disease outbreaks under the guidance of Dr. K. Sudheer.",
    points: [
      "Preprocessed, formatted, and cleaned 10,000+ data points of raw WHO historical epidemic records using Python, Pandas, and NumPy to establish stationarity.",
      "Designed and fitted ARIMA (AutoRegressive Integrated Moving Average) algorithms, conducting robust mathematical parameters (p, d, q) tuning.",
      "Evaluated model performance using statistical metrics, achieving a Mean Absolute Error (MAE) of 45.32 and a Root Mean Square Error (RMSE) of 60.78.",
      "Structured diagnostic plotting pipelines with Matplotlib/Seaborn to outline confidence limits (95% interval) and observed-vs-predicted curves.",
      "Presented thesis findings in a departmental forum, laying the groundwork for resource optimization and adaptive healthcare response planning."
    ],
    tools: ["Python", "Pandas", "NumPy", "Predictive Analytics", "ARIMA", "Statsmodels", "Matplotlib", "Seaborn"]
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
    title: "SpareXchange Marketplace",
    subtitle: "Dual-Sided Auto Parts Platform",
    description: "An end-to-end e-commerce marketplace prototype designed specifically for new and used automobile spare parts.",
    problem: "Finding reliable, verified spare parts is fragmented and lacks secure transaction mechanisms.",
    solution: "Mapped out the full user journey and implemented a QR-based payment flow with OTP confirmation for secure handoffs.",
    impact: "Successfully validated the dual-sided marketplace model and established a unified inventory dashboard.",
    tools: ["Google AI Studio", "Gemini API", "Product Logic", "Journey Mapping"],
    role: "Product Lead & Developer",
    status: "Prototype",
    icon: Sparkles,
    image: sparexchangeImg,
    link: "https://sparexchange-tau.vercel.app"
  },
  {
    title: "AI WhatsApp Agent",
    subtitle: "Automated Support & Logistics Pipeline",
    description: "An intelligent WhatsApp agent designed to automate customer interactions and streamline order processing in real-time.",
    problem: "Manual order processing was slow, error-prone, and required constant human intervention.",
    solution: "Built a conversational AI agent using n8n and OpenAI to handle queries, parse orders, and trigger fulfillment workflows.",
    impact: "Reduced manual processing effort by 70% and decreased average response time from hours to seconds.",
    tools: ["n8n", "WhatsApp API", "OpenAI", "NLP"],
    role: "Product & AI Automation",
    status: "Live",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "JobLence: AI Job Assistant",
    subtitle: "AI-Powered Applicant Flow",
    description: "A smart application platform that evaluates resume-to-job fit and automates discovery pipelines for job seekers.",
    problem: "Applicants waste hours applying for mismatched roles due to a lack of immediate fit-feedback.",
    solution: "Designed user flows and integrated AI to parse resumes against job descriptions, calculating instant job-fit scores.",
    impact: "Streamlined the application process, enabling users to focus solely on high-probability opportunities.",
    tools: ["Resume Matching", "Job-Fit Scores", "AI Automation", "Product Strategy"],
    role: "Product Planning & UX",
    status: "Under Progress",
    icon: Briefcase,
    image: joblenceImg,
    link: "https://joblens-ten.vercel.app/"
  },
  {
    title: "Health Forecasting System",
    subtitle: "Epidemic Predictive Analytics",
    description: "A time-series forecasting engine utilizing historical data to predict and map future disease outbreaks.",
    problem: "Healthcare responses are often reactive due to unpredictable epidemic patterns.",
    solution: "Preprocessed 10,000+ data points and tuned ARIMA models to establish a reliable predictive baseline.",
    impact: "Achieved high predictive accuracy (MAE: 45.32), laying the groundwork for adaptive healthcare resource allocation.",
    tools: ["Python", "ARIMA", "Data Strategy", "Predictive Analytics"],
    role: "Core Researcher",
    status: "Completed",
    icon: TrendingUp,
    image: arimaImg
  }
];
export const SKILLS = [
  { 
    category: "Technical Stack", 
    items: ["Google AI Studio", "Gemini API", "n8n Automation", "API Integration", "Prompt Engineering", "WhatsApp Business API"] 
  },
  { 
    category: "Soft Skills", 
    items: ["Customer Relationship Management", "Public Relations", "Problem Solving"] 
  },
  {
    category: "Languages Known",
    items: ["Telugu — Fluent", "English — Working Proficiency", "Hindi — Basic Proficiency", "Tamil — Conversational Understanding"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Aha! Product Management Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "May 2026"
  },
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
  { name: "Stack", href: "/stack" },
  { name: "Vision", href: "/vision" },
  { name: "Work", href: "/work" },
  { name: "Journey", href: "/journey" },
  { name: "Awards", href: "/awards" },
  { name: "Connect", href: "/connect" }
];
