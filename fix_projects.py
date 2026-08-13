import re

with open('src/components/Projects.tsx', 'r') as f:
    content = f.read()

# Let's replace the image block with just the icon
to_replace = """                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <project.icon className="w-24 h-24 text-text-main/20" />
                  )}"""

replacement = """                  <project.icon className="w-24 h-24 text-brand/30" />"""

content = content.replace(to_replace, replacement)

with open('src/components/Projects.tsx', 'w') as f:
    f.write(content)
