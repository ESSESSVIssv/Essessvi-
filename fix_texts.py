import re

with open('src/constants.ts', 'r') as f:
    content = f.read()

# Change the role text
content = content.replace(
    'role: "Aspiring Product Manager | Open to Internships"',
    'role: "Recent B.Tech CSE Graduate | Aspiring Product Manager"'
)

with open('src/constants.ts', 'w') as f:
    f.write(content)

with open('src/components/Vision.tsx', 'r') as f:
    vision_content = f.read()

# Change the internship text in Vision
vision_content = vision_content.replace(
    'Currently seeking Product Management internships and full-time opportunities.',
    'Currently seeking full-time Product Management opportunities.'
)

with open('src/components/Vision.tsx', 'w') as f:
    f.write(vision_content)
