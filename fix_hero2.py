import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

content = content.replace("Aspiring Product Manager & AI Workflow Engineer.", "I'M ESSESSVI — AN AI PRODUCT BUILDER WHO BUILDS USEFUL PRODUCTS AND BRINGS THEM TO LIFE.")

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
