import re

with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

content = content.replace("bg-text-main text-bg", "bg-text-main text-white")

with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
