import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace("import Footer from './components/Footer';", "import Footer from './components/Footer';\nimport Resume from './components/Resume';")
content = content.replace('<Route path="/awards" element={<PageWrapper><Certifications /></PageWrapper>} />', '<Route path="/awards" element={<PageWrapper><Certifications /></PageWrapper>} />\n      <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />')

with open('src/App.tsx', 'w') as f:
    f.write(content)
