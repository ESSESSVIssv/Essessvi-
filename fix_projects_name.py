import re

with open('src/constants.ts', 'r') as f:
    text = f.read()

# Remove JobLence completely
joblence_regex = re.compile(r'  \{\n    title: "JobLence: AI Job Assistant".*?icon: Briefcase,\n    link: "https://joblens-ten\.vercel\.app/"\n  \},', re.DOTALL)
text = joblence_regex.sub('', text)

# Update AI WhatsApp Agent to AgentRoomAI
text = text.replace('title: "AI WhatsApp Agent",', 'title: "AgentRoomAI",')
text = text.replace('subtitle: "Automated Support & Logistics Pipeline",', 'subtitle: "AI Workflow Engineer",')
text = text.replace('role: "Product & AI Automation",', 'role: "Intern",')
# Update SpareXchange Marketplace
text = text.replace('title: "SpareXchange Marketplace",', 'title: "SpareXChange",')
text = text.replace('subtitle: "Dual-Sided Auto Parts Platform",', 'subtitle: "Product Lead & Developer",')
# Update Health Forecasting System
text = text.replace('title: "Health Forecasting System",', 'title: "Epidemic Trend Forecasting",')
text = text.replace('subtitle: "Epidemic Predictive Analytics",', 'subtitle: "Core Team Member",')

with open('src/constants.ts', 'w') as f:
    f.write(text)
