import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

content = content.replace("I'M ESSESSVI — A PRODUCT BUILDER", "I'M ESSESSVI — A FINAL-YEAR CSE STUDENT WHO BUILDS PRODUCTS")

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
