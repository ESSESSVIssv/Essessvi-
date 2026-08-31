import re

with open('src/components/Projects.tsx', 'r') as f:
    proj = f.read()
proj = proj.replace('max-w-2xl', 'w-full')
with open('src/components/Projects.tsx', 'w') as f:
    f.write(proj)

with open('src/components/ProductThinking.tsx', 'r') as f:
    pt = f.read()
pt = pt.replace('mb-24 text-center max-w-3xl mx-auto', 'mb-24 w-full')
pt = pt.replace('items-center text-center', 'items-start text-left')
pt = pt.replace('justify-center mb-6', 'justify-center mb-6') # leave icon centered or left? better left aligned circle
pt = pt.replace('<step.icon className="w-8 h-8" />', '<step.icon className="w-8 h-8" />')
with open('src/components/ProductThinking.tsx', 'w') as f:
    f.write(pt)

