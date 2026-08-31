import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

# Add Tractor to imports
if 'Tractor' not in content:
    content = content.replace("import {", "import {\n  Tractor,")

# Define FarmerToken project object
farmer_token_project = """  {
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
  },"""

# Insert before CashKaro
if 'title: "CashKaro Product Teardown"' in content:
    content = content.replace('  {\n    title: "CashKaro Product Teardown",', farmer_token_project + '\n  {\n    title: "CashKaro Product Teardown",')
else:
    # Fallback to just before the end of PROJECTS array
    pass

with open('src/constants.ts', 'w') as f:
    f.write(content)
