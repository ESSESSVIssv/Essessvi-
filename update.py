import re

with open("src/constants.ts", "r") as f:
    content = f.read()

# I will use a simple regex to extract and reorder. Actually, I can just replace the whole PROJECTS block.
projects_replacement = """export const PROJECTS = [
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
];"""

content = re.sub(r'export const PROJECTS = \[.*\}\n\];', projects_replacement, content, flags=re.DOTALL)

with open("src/constants.ts", "w") as f:
    f.write(content)

