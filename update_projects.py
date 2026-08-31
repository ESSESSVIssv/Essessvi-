import re

with open('src/components/Projects.tsx', 'r') as f:
    content = f.read()

# Add ProductThinking component import
import_statement = "import ProductThinking from './ProductThinking';\n"
content = content.replace("import { ArrowUpRight } from 'lucide-react';", "import { ArrowUpRight } from 'lucide-react';\n" + import_statement)

# Inject ProductThinking component before the projects list
content = content.replace('<div className="space-y-32">', '<ProductThinking />\n        <div className="space-y-32 mt-16">')

with open('src/components/Projects.tsx', 'w') as f:
    f.write(content)
