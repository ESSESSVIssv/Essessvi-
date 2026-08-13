import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

content = content.replace("PERSONAL_INFO.summary", "PERSONAL_INFO.bio")

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
