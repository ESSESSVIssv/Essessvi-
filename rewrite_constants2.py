import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

new_experience = """export const EXPERIENCE = [
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
];"""
content = re.sub(r'export const EXPERIENCE = \[.*?\];', new_experience, content, flags=re.DOTALL)

new_skills = """export const SKILLS = [
  { 
    category: "Product Management", 
    items: ["Product Strategy", "Product Lifecycle Management (PLM)", "User Journey Mapping", "Market Research", "Competitor Analysis", "Agile Methodologies", "Project Management", "Process Optimization"] 
  },
  { 
    category: "AI & Technical", 
    items: ["Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering", "Python", "Data Analysis"] 
  },
  {
    category: "Languages & Soft Skills",
    items: ["English", "Telugu", "Hindi", "Tamil", "Problem Solving", "Customer Relationship Management"]
  }
];"""
content = re.sub(r'export const SKILLS = \[.*?\];', new_skills, content, flags=re.DOTALL)

new_certs = """export const CERTIFICATIONS = [
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
    title: "Networking in IIT HYF",
    issuer: "IIT Hyderabad",
    date: "Oct 2023"
  }
];"""
content = re.sub(r'export const CERTIFICATIONS = \[.*?\];', new_certs, content, flags=re.DOTALL)

with open('src/constants.ts', 'w') as f:
    f.write(content)
