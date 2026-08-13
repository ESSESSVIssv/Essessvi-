import re

with open('src/components/Contact.tsx', 'r') as f:
    content = f.read()

content = content.replace("bg-text-main text-bg", "bg-text-main text-white")
content = content.replace("bg-brand text-bg", "bg-brand text-white")

with open('src/components/Contact.tsx', 'w') as f:
    f.write(content)
