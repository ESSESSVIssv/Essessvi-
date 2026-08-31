import re

with open('src/constants.ts', 'r') as f:
    text = f.read()

# Remove Epidemic from EXPERIENCE array
epidemic_regex = re.compile(r'\s*\{\s*company:\s*"Epidemic Trend Forecasting",.*?\n\s*\}\s*(?=,|\])', re.DOTALL)
text = epidemic_regex.sub('', text)

# Just in case there is a trailing comma before the end of the array, clean it up
text = re.sub(r',\s*\]', '\n]', text)

with open('src/constants.ts', 'w') as f:
    f.write(text)

with open('src/components/Vision.tsx', 'r') as f:
    vision_content = f.read()

# Remove the Epidemic line from Vision.tsx
vision_content = vision_content.replace(' I also developed an epidemic forecasting engine using WHO data that achieved 90% prediction accuracy.', '')

with open('src/components/Vision.tsx', 'w') as f:
    f.write(vision_content)

