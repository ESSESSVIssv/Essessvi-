import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

# Update BIO
new_bio = "I am a recent B.Tech CSE graduate and Aspiring Product Manager with hands-on experience in AI-powered products, workflow automation, and user-focused product development. From building AI WhatsApp agents to developing product strategies for JobLens and SpareXChange, I translate real-world problems into practical solutions. I am currently seeking full-time APM, Product Intern, Product Analyst, and AI Product opportunities."
content = re.sub(r'bio: ".*?"', f'bio: "{new_bio}"', content)

# Update SKILLS
new_skills = """export const SKILLS = [
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
     items: ["API Integration", "WhatsApp Business API", "Python", "Data Analysis", "Project Management"]
   },
  {
    category: "Languages",
    items: ["English", "Telugu", "Hindi", "Tamil"]
  }
];"""
content = re.sub(r'export const SKILLS = \[.*?\];', new_skills, content, flags=re.DOTALL)

# Update PROJECTS
new_projects = """export const PROJECTS = [
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
];"""
content = re.sub(r'export const PROJECTS = \[.*?\];', new_projects, content, flags=re.DOTALL)

with open('src/constants.ts', 'w') as f:
    f.write(content)
