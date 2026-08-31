import re

with open('src/components/CaseStudyModal.tsx', 'r') as f:
    text = f.read()

text = text.replace("import { epidemicSlides } from '../data/epidemicSlides';\n", "")
text = text.replace(" | 'epidemic'", "")
text = text.replace("                 projectType === 'epidemic' ? epidemicSlides : \n", "")
text = text.replace("                projectType === 'epidemic' ? \"Predicting Epidemics\" : \n", "")
text = text.replace("                   projectType === 'epidemic' ? \"Python & Pandas Predictive Analytics System\" : \n", "")

with open('src/components/CaseStudyModal.tsx', 'w') as f:
    f.write(text)
