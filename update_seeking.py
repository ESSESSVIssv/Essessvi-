import re

# Update Vision.tsx
with open('src/components/Vision.tsx', 'r') as f:
    vision = f.read()
vision = vision.replace('Currently seeking APM, Product Intern, Product Analyst, and AI Product opportunities.', 'Currently seeking a Product Management Internship.')
with open('src/components/Vision.tsx', 'w') as f:
    f.write(vision)

# Update constants.ts
with open('src/constants.ts', 'r') as f:
    constants = f.read()
constants = constants.replace('I am currently seeking full-time APM, Product Intern, Product Analyst, and AI Product opportunities.', 'I am currently seeking a Product Management Internship.')
with open('src/constants.ts', 'w') as f:
    f.write(constants)
