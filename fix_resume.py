import re

with open('src/components/Resume.tsx', 'r') as f:
    content = f.read()

content = content.replace("PERSONAL_INFO.portfolio", "PERSONAL_INFO.website")
content = content.replace("PERSONAL_INFO.summary", "PERSONAL_INFO.bio")
content = content.replace("edu.score", "edu.description")

with open('src/components/Resume.tsx', 'w') as f:
    f.write(content)
