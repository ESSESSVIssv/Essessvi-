import re

with open('src/components/Projects.tsx', 'r') as f:
    content = f.read()

content = content.replace("PROJECTS.map((project, idx) =>", "(PROJECTS as any[]).map((project, idx) =>")

with open('src/components/Projects.tsx', 'w') as f:
    f.write(content)
