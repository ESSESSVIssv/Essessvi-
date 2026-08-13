with open('src/components/Vision.tsx', 'r') as f:
    text = f.read()

text = text.replace('SpareXchange', 'SpareXChange')

with open('src/components/Vision.tsx', 'w') as f:
    f.write(text)
