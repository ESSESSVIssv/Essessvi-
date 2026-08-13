import json

with open('src/constants.ts', 'r') as f:
    text = f.read()

# Fix bio
text = text.replace(
    'workflows to developing SpareXchange and JobLence (an AI job application assistant), I translate',
    'workflows to developing SpareXChange, I translate'
)

# Fix Skills
text = text.replace(
    'items: ["Product Strategy", "Product Lifecycle Management (PLM)", "User Journey Mapping", "Market Research", "Competitor Analysis", "Agile Methodologies", "Project Management", "Process Optimization"]',
    'items: ["Product Management", "Product Strategy", "Product Lifecycle Management (PLM)", "User Journey Mapping", "Market Research", "Competitor Analysis", "Feature Prioritization", "Project Management"]'
)
text = text.replace(
    'items: ["Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering"]',
    'items: ["n8n", "OpenAI", "Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering", "Workflow Automation"]'
)
text = text.replace(
    'items: ["English", "Telugu", "Hindi", "Tamil", "Problem Solving", "Customer Relationship Management"]',
    'items: ["English", "Telugu", "Hindi", "Tamil"]'
)
text = text.replace(
    'category: "Languages & Soft Skills"',
    'category: "Languages"'
)
text = text.replace(
    'category: "AI & Technical"',
    'category: "AI & Tools"'
)

# Fix Certifications
cert_to_replace = 'export const CERTIFICATIONS = ['
cert_replacement = 'export const CERTIFICATIONS = [\n  {\n    title: "Aha! Product Management Professional Certificate",\n    issuer: "LinkedIn Learning",\n    date: "May 27, 2026"\n  },'
text = text.replace(cert_to_replace, cert_replacement)
text = text.replace(
    'issuer: "IIT Hyderabad",',
    'issuer: "IIT Hyderabad",'
)
text = text.replace(
    'title: "Ethical Hacking",',
    'title: "Ethical Hacking in IIT Hyderabad",'
)

with open('src/constants.ts', 'w') as f:
    f.write(text)

with open('src/components/Vision.tsx', 'r') as f:
    vision_content = f.read()

# Remove JobLence paragraph in Vision.tsx
vision_content = vision_content.replace(
    '<p>\n                Currently under progress is <span className="font-bold">JobLence</span>, an AI-powered job application assistant that analyzes resumes, matches candidates with relevant job opportunities, and streamlines the application process through automation. The project is driven by the challenge of making job discovery and applications more efficient for candidates.\n              </p>',
    ''
)
with open('src/components/Vision.tsx', 'w') as f:
    f.write(vision_content)
