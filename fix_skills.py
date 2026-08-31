import re

with open('src/constants.ts', 'r') as f:
    text = f.read()

text = text.replace('"Python", "Data Analysis", ', '')

with open('src/constants.ts', 'w') as f:
    f.write(text)
