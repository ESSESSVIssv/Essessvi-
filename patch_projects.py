import re

with open("src/components/Projects.tsx", "r") as f:
    content = f.read()

old_tools = """                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="px-3 py-1.5 bg-[#FBF6F0] border border-[#D9C7B2] rounded-lg text-[9px] font-mono uppercase tracking-widest text-text-main/70">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-3 py-1.5 bg-[#FBF6F0] border border-[#D9C7B2] rounded-lg text-[9px] font-mono uppercase tracking-widest text-text-main/70">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>"""

new_tools = """                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-3 py-1.5 bg-[#FBF6F0] border border-[#D9C7B2] rounded-lg text-[9px] font-mono uppercase tracking-widest text-text-main/70">
                        {tool}
                      </span>
                    ))}
                  </div>"""

content = content.replace(old_tools, new_tools)

with open("src/components/Projects.tsx", "w") as f:
    f.write(content)
