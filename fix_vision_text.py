import re

with open('src/components/Vision.tsx', 'r') as f:
    content = f.read()

content = content.replace('Currently seeking full-time Product Management opportunities.', 'Currently seeking APM, Product Intern, Product Analyst, and AI Product opportunities.')

with open('src/components/Vision.tsx', 'w') as f:
    f.write(content)
