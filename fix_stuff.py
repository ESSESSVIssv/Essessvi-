import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

content = content.replace("Hi, I'm {PERSONAL_INFO.firstName}", "PRODUCT PORTFOLIO")
content = content.replace(
    "I'M ESSESSVI — AN AI PRODUCT BUILDER WHO BUILDS USEFUL PRODUCTS AND BRINGS THEM TO LIFE.",
    "I'M ESSESSVI — <span className=\"text-brand\">AN AI PRODUCT BUILDER WHO BUILDS USEFUL PRODUCTS AND BRINGS THEM TO LIFE.</span>"
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

with open('src/constants.ts', 'r') as f:
    content = f.read()

content = content.replace(
    'items: ["Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering", "Python", "Data Analysis"]',
    'items: ["Google AI Studio", "Gemini API", "WhatsApp Business API", "API Integration", "Prompt Engineering"]'
)

with open('src/constants.ts', 'w') as f:
    f.write(content)
