import re

with open('src/components/ProductThinking.tsx', 'r') as f:
    content = f.read()

content = content.replace('className="bg-bg py-32 border-y border-border relative overflow-hidden"', 'className="bg-bg pb-24 relative overflow-hidden"')

with open('src/components/ProductThinking.tsx', 'w') as f:
    f.write(content)
