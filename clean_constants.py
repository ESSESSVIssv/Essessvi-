import re

with open('src/constants.ts', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "import arimaImg" in line or "import sparexchangeImg" in line or "import joblenceImg" in line:
        continue
    if "image: " in line:
        continue
    new_lines.append(line)

with open('src/constants.ts', 'w') as f:
    f.writelines(new_lines)
